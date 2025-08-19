// src/usuarios/dto/create-usuario.dto.ts

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'La dirección de correo electrónico del usuario. Debe ser un formato válido y único.',
    example: 'usuario.ejemplo@email.com',
  })
  @IsEmail({}, { message: 'Por favor, introduce un correo electrónico válido.' })
  email: string;

  @ApiProperty({
    description: 'El nombre completo del usuario.',
    example: 'Juan Pérez',
  })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @ApiProperty({
    description: 'La contraseña del usuario. Debe tener al menos 6 caracteres.',
    example: 'micontraseña123',
    format: 'password', 
  })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  contraseña: string;
}