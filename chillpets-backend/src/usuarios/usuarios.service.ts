// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async crearUsuario(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { email, nombre, contraseña } = createUsuarioDto;
    const salt = await bcrypt.genSalt();
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = this.usuariosRepository.create({
      email,
      nombre,
      contraseña: contraseñaEncriptada,
    });

    return this.usuariosRepository.save(nuevoUsuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { email } });
  }
}