import { Injectable, Inject } from '@nestjs/common';
import { CLOUDINARY } from './constants';
import { Readable } from 'stream';
import { CloudinaryResponse, ImageUploadResult } from './cloudinary-response';

@Injectable()
export class ImagenesService {
  constructor(@Inject(CLOUDINARY) private cloudinary) {}

  async subirImagen(file: Express.Multer.File): Promise<ImageUploadResult> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = this.cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      const stream = new Readable();
      stream.push(file.buffer);
      stream.push(null);
      stream.pipe(uploadStream);
    }).then(result => ({
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
    }));
  }
}