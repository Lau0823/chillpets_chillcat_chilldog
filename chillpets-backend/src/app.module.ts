import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { CarritoModule } from './carrito/carrito.module';
import { CategoriasModule } from './categorias/categorias.module';
import { AuthModule } from './auth/auth.module';
import { PagosModule } from './pagos/pagos.module';
import { StockModule } from './stock/stock.module';
import { FinanzasModule } from './finanzas/finanzas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true, // Carga automáticamente las entidades
        synchronize: true, // Sincroniza el esquema de la base de datos (¡solo para desarrollo!)
      }),
    }),




    UsuariosModule,
    UsuariosModule, ProductosModule, ImagenesModule, OrdenesModule, CarritoModule, CategoriasModule, AuthModule, PagosModule, StockModule, FinanzasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


