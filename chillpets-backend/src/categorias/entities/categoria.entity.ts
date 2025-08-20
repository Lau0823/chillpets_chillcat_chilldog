// src/productos/entities/categoria.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity('categorias')
export class Categoria {
  @ApiProperty({ description: 'Identificador único de la categoría' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nombre de la categoría (ej. "Alimentos", "Juguetes")', example: 'Accesorios' })
  @Column({ unique: true })
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada de la categoría', example: 'Productos para el cuidado y confort de tus mascotas' })
  @Column('text', { nullable: true })
  descripcion: string;
  
  // Relación ManyToMany con la entidad Producto
  @ManyToMany(() => Producto, (producto) => producto.categorias)
  @JoinTable({
    name: 'productos_categorias',
    joinColumn: {
      name: 'categoria_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'producto_id',
      referencedColumnName: 'id',
    },
  })
  productos: Producto[];
}