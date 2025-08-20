// src/carrito/dto/carrito.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsOptional } from 'class-validator';

export class CarritoItemDto {
  @ApiProperty({ description: 'ID del producto en el carrito' })
  @IsUUID()
  productoId: string;

  @ApiProperty({ description: 'Cantidad del producto' })
  @IsNumber()
  cantidad: number;
}

export class CarritoDto {
  @ApiProperty({ type: [CarritoItemDto], description: 'Lista de productos en el carrito' })
  items: CarritoItemDto[];

  @ApiProperty({ description: 'Total de artículos en el carrito' })
  @IsOptional()
  total?: number;
}