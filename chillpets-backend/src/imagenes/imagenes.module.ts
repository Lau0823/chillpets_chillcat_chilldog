// src/imagenes/imagenes.module.ts
import { Module } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { ImagenesController } from './imagenes.controller';
import { CloudinaryProvider } from './cloudinary.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ImagenesController],
  providers: [CloudinaryProvider, ImagenesService],
  exports: [CloudinaryProvider, ImagenesService], // Lo exportamos para que otros módulos puedan usarlo
})
export class ImagenesModule {}