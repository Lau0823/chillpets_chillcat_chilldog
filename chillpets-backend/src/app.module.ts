import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { CarritoModule } from './carrito/carrito.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [UsuariosModule, ProductosModule, ImagenesModule, OrdenesModule, CarritoModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
