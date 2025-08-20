// src/productos/productos.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { MovimientoInventarioDto, TipoMovimiento } from './dto/movimiento-inventario.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  // Crear un nuevo producto
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const nuevoProducto = this.productosRepository.create(createProductoDto);
    return this.productosRepository.save(nuevoProducto);
  }

  // Obtener todos los productos
  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  // Obtener un producto por ID
  async findOne(id: string): Promise<Producto> {
    const producto = await this.productosRepository.findOne({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado`);
    }
    return producto;
  }

  // Actualizar un producto
  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    const productoActualizado = Object.assign(producto, updateProductoDto);
    return this.productosRepository.save(productoActualizado);
  }

  // Eliminar un producto
  async remove(id: string): Promise<void> {
    const resultado = await this.productosRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado`);
    }
  }

   async actualizarStock(movimiento: MovimientoInventarioDto): Promise<Producto> {
    const { productoId, cantidad, tipo, razon } = movimiento;
    const producto = await this.findOne(productoId);

    if (!producto) {
      throw new NotFoundException(`Producto con ID "${productoId}" no encontrado.`);
    }

    switch (tipo) {
      case TipoMovimiento.ENTRADA:
      case TipoMovimiento.AJUSTE_ENTRADA:
        producto.stock += cantidad;
        break;
      case TipoMovimiento.SALIDA:
      case TipoMovimiento.AJUSTE_SALIDA:
        if (producto.stock < cantidad) {
          throw new BadRequestException('No hay suficiente stock para esta operación.');
        }
        producto.stock -= cantidad;
        break;
      default:
        throw new BadRequestException('Tipo de movimiento de inventario no válido.');
    }

    // Podrías registrar la razón en un log o tabla de movimientos si la tuvieras
    console.log(`Movimiento de stock para ${producto.nombre}: ${cantidad} unidades, tipo: ${tipo}, razón: ${razon}`);

    return this.productosRepository.save(producto);
  }
}