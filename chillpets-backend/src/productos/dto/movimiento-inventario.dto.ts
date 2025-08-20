// src/productos/dto/movimiento-inventario.dto.ts
import { IsNotEmpty, IsNumber, IsEnum, IsUUID, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TipoMovimiento {
  ENTRADA = 'entrada', // Por compra a proveedor o devolución
  SALIDA = 'salida',   // Por venta
  AJUSTE_ENTRADA = 'ajuste_entrada', // Por conteo físico
  AJUSTE_SALIDA = 'ajuste_salida',  // Por mermas o productos dañados
}

export class MovimientoInventarioDto {
  @ApiProperty({ description: 'ID del producto' })
  @IsUUID()
  @IsNotEmpty()
  productoId: string;

  @ApiProperty({ description: 'Cantidad a mover', example: 10 })
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @ApiProperty({ description: 'Tipo de movimiento', enum: TipoMovimiento, example: TipoMovimiento.ENTRADA })
  @IsEnum(TipoMovimiento, { message: 'El tipo de movimiento no es válido.' })
  @IsNotEmpty()
  tipo: TipoMovimiento;

  @ApiProperty({ description: 'Razón del movimiento (opcional)', required: false })
  @IsOptional()
  @IsString()
  razon?: string;
}