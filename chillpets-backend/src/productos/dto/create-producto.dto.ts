// src/productos/dto/create-producto.dto.ts
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsArray, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty({ example: 'Alimento para perros', description: 'Nombre del producto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Alimento premium rico en proteínas', description: 'Descripción del producto' })
  @IsNotEmpty({ message: 'La descripción es obligatoria.' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 25.5, description: 'Precio del producto' })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  precio: number;

  @ApiProperty({ example: 100, description: 'Stock inicial', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El stock debe ser un número.' })
  stock?: number;

  @ApiProperty({ example: 5, description: 'Peso en kg', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El peso debe ser un número.' })
  peso?: number;

  @ApiProperty({ example: '30x20x15', description: 'Dimensiones del producto', required: false })
  @IsOptional()
  @IsString()
  dimensiones?: string;

  @ApiProperty({ type: [String], example: ['https://ejemplo.com/imagen1.jpg', 'https://ejemplo.com/imagen2.jpg'], description: 'URLs de las imágenes del producto' })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true, message: 'Cada URL debe ser válida.' })
  imagenes?: string[];
}