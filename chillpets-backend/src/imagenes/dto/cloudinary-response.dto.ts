// src/imagenes/dto/cloudinary-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CloudinaryResponseDto {
  @ApiProperty({ description: 'ID público de la imagen en Cloudinary' })
  public_id: string;

  @ApiProperty({ description: 'URL segura (HTTPS) de la imagen' })
  secure_url: string;

  @ApiProperty({ description: 'Ancho de la imagen' })
  width: number;

  @ApiProperty({ description: 'Alto de la imagen' })
  height: number;

  @ApiProperty({ description: 'Formato de la imagen (ej. "jpg")' })
  format: string;
}