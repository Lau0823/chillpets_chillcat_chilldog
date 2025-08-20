// src/usuarios/entities/usuario.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { Rol } from '../../common/enums/rol.enum';
import * as bcrypt from 'bcryptjs';
import { Orden } from 'src/ordenes/entities/ordenes.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nombre: string;

  @Column()
  contraseña: string;

  @Column({ type: 'enum', enum: Rol, default: Rol.Cliente })
  rol: Rol;


  @OneToMany(() => Orden, (orden) => orden.usuario)
  ordenes: Orden[];

  @BeforeInsert()
  async hashContrasena() {
    if (this.contraseña) {
      const salt = await bcrypt.genSalt();
      this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
  }
}