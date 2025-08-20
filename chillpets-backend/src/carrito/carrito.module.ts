// src/carrito/carrito.module.ts
import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])], // No hay entidades de DB en este módulo
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}