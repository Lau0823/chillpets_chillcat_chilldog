// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  // **Validación de credenciales: retorna el usuario o null**
  async validarUsuario(loginUsuarioDto: LoginUsuarioDto): Promise<Usuario | null> {
    const { email, contraseña } = loginUsuarioDto;
    const usuario = await this.usuariosService.buscarPorEmail(email);

    if (usuario && (await bcrypt.compare(contraseña, usuario.contraseña))) {
      return usuario;
    }
    return null;
  }

  // **Generación del token JWT**
  async login(usuario: Usuario) {
    const payload = { 
      email: usuario.email, 
      sub: usuario.id, 
      rol: usuario.rol 
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}