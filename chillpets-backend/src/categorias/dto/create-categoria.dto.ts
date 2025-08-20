// src/productos/dto/create-categoria.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Accesorios', description: 'Nombre de la categoría' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Productos para el cuidado y confort de tus mascotas', description: 'Descripción de la categoría', required: false })
  @IsOptional()
  @IsString()
  descripcion?: string;
}