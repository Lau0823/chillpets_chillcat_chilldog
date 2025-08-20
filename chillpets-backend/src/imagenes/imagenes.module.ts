import { Module } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { ImagenesController } from './imagenes.controller';
import { CloudinaryProvider } from './cloudinary.config';
import { ConfigModule, ConfigService } from '@nestjs/config'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [] })
  ], 
  controllers: [ImagenesController],
  providers: [CloudinaryProvider, ImagenesService],
  exports: [CloudinaryProvider, ImagenesService],
})
export class ImagenesModule {}
