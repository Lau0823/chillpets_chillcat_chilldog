// src/ordenes/dto/create-ordene.dto.ts
import { IsNotEmpty, IsNumber, IsUUID, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ItemOrdenDto {
  @ApiProperty({ description: 'ID del producto' })
  @IsNotEmpty({ message: 'El ID del producto es obligatorio.' })
  @IsUUID()
  productoId: string;

  @ApiProperty({ description: 'Cantidad del producto' })
  @IsNotEmpty({ message: 'La cantidad es obligatoria.' })
  @IsNumber({}, { message: 'La cantidad debe ser un número.' })
  cantidad: number;
}

export class CreateOrdenDto {
  @ApiProperty({ description: 'ID del usuario que realiza la compra' })
  @IsNotEmpty({ message: 'El ID de usuario es obligatorio.' })
  @IsUUID()
  usuarioId: string;

  @ApiProperty({ description: 'Lista de productos de la orden', type: [ItemOrdenDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemOrdenDto)
  detalles: ItemOrdenDto[];
}