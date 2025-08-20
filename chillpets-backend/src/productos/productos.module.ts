// src/productos/productos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { CategoriasController } from 'src/categorias/categorias.controller';
import { CategoriasService } from 'src/categorias/categorias.service';

@Module({
   imports: [TypeOrmModule.forFeature([Producto, Categoria])],
  controllers: [ProductosController, CategoriasController],
  providers: [ProductosService, CategoriasService],
  exports: [TypeOrmModule.forFeature([Producto, Categoria]), ProductosService, CategoriasService],
})
export class ProductosModule {}