import { Injectable, Inject } from '@nestjs/common';
import { CLOUDINARY } from './constants';
import { Readable } from 'stream';
import { ImageUploadResult } from './cloudinary-response';
import type { v2 as cloudinaryType, UploadApiResponse } from 'cloudinary';

@Injectable()
export class ImagenesService {
  constructor(@Inject(CLOUDINARY) private cloudinary: typeof cloudinaryType) {}

  async subirImagen(file: Express.Multer.File): Promise<ImageUploadResult> {
    return new Promise<UploadApiResponse | undefined>((resolve, reject) => {
      const uploadStream = this.cloudinary.uploader.upload_stream(
        { resource_type: 'auto' }, 
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        },
      );
      const stream = new Readable();
      stream.push(file.buffer); 
      stream.push(null); 
      stream.pipe(uploadStream);
    }).then(result => {
      if (!result) {
        throw new Error('La subida a Cloudinary falló sin un mensaje de error.');
      }
      return {
        public_id: result.public_id,
        secure_url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
      };
    });
  }
}