// src/productos/entities/producto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('productos')
export class Producto {
  @ApiProperty({ description: 'Identificador único del producto' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nombre del producto', example: 'Alimento para gatos' })
  @Column({ unique: true })
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada del producto' })
  @Column('text')
  descripcion: string;

  @ApiProperty({ description: 'Precio del producto', example: 15.99 })
  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @ApiProperty({ description: 'Stock disponible', example: 50 })
  @Column('int', { default: 0 })
  stock: number;

  @ApiProperty({
    description: 'Peso del producto en kilogramos (opcional)',
    example: 2.5,
    required: false,
  })
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  peso: number;

  @ApiProperty({
    description: 'Dimensiones del producto (opcional)',
    example: '20x15x10 cm',
    nullable: true,
  })
  @Column({ nullable: true })
  dimensiones: string;

  @ApiProperty({
    description: 'URL de las imágenes del producto',
    type: [String],
    example: ['url-imagen-1.jpg', 'url-imagen-2.jpg'],
  })
  @Column('simple-array', { nullable: true })
  imagenes: string[];

  @ApiProperty({
    description: 'Indica si el producto está activo para la venta',
    example: true,
  })
  @Column({ default: true })
  activo: boolean;

  @ApiProperty({ description: 'Fecha de creación del producto' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;
}