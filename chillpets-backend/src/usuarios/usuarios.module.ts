// src/usuarios/usuarios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Registra la entidad aquí
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService], // Lo exportamos para poder usarlo en el módulo de autenticación
})
export class UsuariosModule {}