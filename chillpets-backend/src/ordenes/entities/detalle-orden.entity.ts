// src/ordenes/entities/detalle-orden.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Orden } from './ordenes.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('detalle_orden')
export class DetalleOrden {
  @ApiProperty({ description: 'Identificador único del detalle de la orden' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Cantidad del producto' })
  @Column('int')
  cantidad: number;

  @ApiProperty({ description: 'Precio del producto en el momento de la compra' })
  @Column('decimal', { precision: 10, scale: 2 })
  precioUnitario: number;

  // Relación con Orden
  @ApiProperty({ description: 'La orden a la que pertenece este detalle' })
  @ManyToOne(() => Orden, (orden) => orden.detalles)
  orden: Orden;

  // Relación con Producto
  @ApiProperty({ description: 'El producto del que se guarda el detalle' })
  @ManyToOne(() => Producto)
  producto: Producto;
}