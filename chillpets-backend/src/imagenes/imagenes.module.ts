import { Module } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { ImagenesController } from './imagenes.controller';
import { CloudinaryProvider } from './cloudinary.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ImagenesController],
  providers: [CloudinaryProvider, ImagenesService],
  exports: [CloudinaryProvider, ImagenesService],
})
export class ImagenesModule {}