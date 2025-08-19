// src/productos/productos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

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
}