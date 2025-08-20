// src/ordenes/ordenes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/ordenes.entity';
import { DetalleOrden } from './entities/detalle-orden.entity';
import { OrdenesService } from './ordenes.service';
import { OrdenesController } from './ordenes.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orden, DetalleOrden]),
    UsuariosModule,
    ProductosModule,
  ],
  controllers: [OrdenesController],
  providers: [OrdenesService],
})
export class OrdenesModule {}