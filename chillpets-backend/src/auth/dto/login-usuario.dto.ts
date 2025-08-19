// src/auth/dto/login-usuario.dto.ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUsuarioDto {
  @IsEmail({}, { message: 'Por favor, introduce un correo electrónico válido.' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  contraseña: string;
}