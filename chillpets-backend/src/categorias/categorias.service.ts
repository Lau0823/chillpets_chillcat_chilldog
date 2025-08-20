// src/productos/categorias.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  // Crear una nueva categoría
  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const nuevaCategoria = this.categoriasRepository.create(createCategoriaDto);
    return this.categoriasRepository.save(nuevaCategoria);
  }

  // Obtener todas las categorías
  async findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.find();
  }

  // Obtener una categoría por ID
  async findOne(id: string): Promise<Categoria> {
    const categoria = await this.categoriasRepository.findOne({ where: { id } });
    if (!categoria) {
      throw new NotFoundException(`Categoría con ID "${id}" no encontrada.`);
    }
    return categoria;
  }

  // Actualizar una categoría
  async update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    const categoriaActualizada = Object.assign(categoria, updateCategoriaDto);
    return this.categoriasRepository.save(categoriaActualizada);
  }

  // Eliminar una categoría
  async remove(id: string): Promise<void> {
    const resultado = await this.categoriasRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Categoría con ID "${id}" no encontrada.`);
    }
  }
}