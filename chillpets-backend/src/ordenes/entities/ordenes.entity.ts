// src/ordenes/entities/ordene.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { DetalleOrden } from './detalle-orden.entity';

export enum EstadoOrden {
  PENDIENTE = 'pendiente',
  PAGADO = 'pagado',
  ENVIADO = 'enviado',
  ENTREGADO = 'entregado',
  CANCELADO = 'cancelado',
}

@Entity('ordenes')
export class Orden {
  @ApiProperty({ description: 'Identificador único de la orden' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Estado actual de la orden', enum: EstadoOrden, default: EstadoOrden.PENDIENTE })
  @Column({ type: 'enum', enum: EstadoOrden, default: EstadoOrden.PENDIENTE })
  estado: EstadoOrden;

  @ApiProperty({ description: 'Total de la orden, incluyendo impuestos y envío' })
  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ApiProperty({ description: 'Fecha y hora de creación de la orden' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @ApiProperty({ description: 'Fecha y hora de la última actualización de la orden' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaActualizacion: Date;

  // Relación con la entidad Usuario
  @ApiProperty({ description: 'Usuario que realizó la compra' })
  @ManyToOne(() => Usuario, (usuario) => usuario.ordenes)
  usuario: Usuario;

  // Relación con DetalleOrden
  @ApiProperty({ description: 'Lista de productos y cantidades de la orden' })
  @OneToMany(() => DetalleOrden, (detalleOrden) => detalleOrden.orden, { cascade: true })
  detalles: DetalleOrden[];
}