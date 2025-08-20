// src/ordenes/ordenes.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoOrden, Orden } from './entities/ordenes.entity';
import { DetalleOrden } from './entities/detalle-orden.entity';
import { CreateOrdenDto } from './dto/create-ordene.dto';
import { UpdateOrdenDto } from './dto/update-ordene.dto';
import { UsuariosService } from '../usuarios/usuarios.service';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private ordenesRepository: Repository<Orden>,
    @InjectRepository(DetalleOrden)
    private detallesRepository: Repository<DetalleOrden>,
    private usuariosService: UsuariosService,
    private productosService: ProductosService,
  ) {}

async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
  const { usuarioId, detalles } = createOrdenDto;

  const usuario = await this.usuariosService.buscarPorId(usuarioId);
  if (!usuario) {
    throw new NotFoundException(`Usuario con ID "${usuarioId}" no encontrado.`);
  }

  let total = 0;
  let detallesOrden: DetalleOrden[] = [];  // Declara el tipo explícitamente

  for (const item of detalles) {
    const producto = await this.productosService.findOne(item.productoId);
    if (!producto || producto.stock < item.cantidad) {
      throw new BadRequestException(`Producto con ID "${item.productoId}" sin stock suficiente.`);
    }

    const detalle = this.detallesRepository.create({
      cantidad: item.cantidad,
      precioUnitario: producto.precio,
      producto: producto,
    });

    total += producto.precio * item.cantidad;
    detallesOrden.push(detalle);

    // Opcional: Actualizar el stock
    producto.stock -= item.cantidad;
    await this.productosService.update(producto.id, producto);
  }

  const nuevaOrden = this.ordenesRepository.create({
    usuario,
    total,
    detalles: detallesOrden,
  });

  return this.ordenesRepository.save(nuevaOrden);
}

  async findAll(): Promise<Orden[]> {
    return this.ordenesRepository.find({ relations: ['usuario', 'detalles', 'detalles.producto'] });
  }

  async findOne(id: string): Promise<Orden> {
    const orden = await this.ordenesRepository.findOne({
      where: { id },
      relations: ['usuario', 'detalles', 'detalles.producto'],
    });
    if (!orden) {
      throw new NotFoundException(`Orden con ID "${id}" no encontrada.`);
    }
    return orden;
  }
   async generarReporteIngresos(): Promise<{ totalIngresos: number }> {
    const resultado = await this.ordenesRepository
      .createQueryBuilder('orden')
      .select('SUM(orden.total)', 'totalIngresos')
      .where('orden.estado = :estado', { estado: EstadoOrden.PAGADO })
      .getRawOne();

    const totalIngresos = parseFloat(resultado.totalIngresos) || 0;
    return { totalIngresos };
  }

  async generarReporteVentasPorProducto(): Promise<any[]> {
    const resultado = await this.detallesRepository
      .createQueryBuilder('detalle')
      .leftJoinAndSelect('detalle.producto', 'producto')
      .leftJoin('detalle.orden', 'orden')
      .select('producto.nombre', 'nombreProducto')
      .addSelect('SUM(detalle.cantidad)', 'cantidadVendida')
      .addSelect('SUM(detalle.cantidad * detalle.precioUnitario)', 'ingresos')
      .where('orden.estado = :estado', { estado: EstadoOrden.PAGADO })
      .groupBy('producto.nombre')
      .orderBy('ingresos', 'DESC')
      .getRawMany();

    return resultado;
  }
}