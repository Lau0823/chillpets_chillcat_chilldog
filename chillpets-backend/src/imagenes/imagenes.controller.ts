// src/imagenes/imagenes.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagenesService } from './imagenes.service';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Rol } from '../common/enums/rol.enum';
import { CloudinaryResponseDto } from './dto/cloudinary-response.dto';

@ApiTags('Imágenes')
@Controller('imagenes')
export class ImagenesController {
  constructor(private readonly imagenesService: ImagenesService) {}

  @Post('subir')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sube una imagen a Cloudinary (solo administradores)' })
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({
    description: 'Imagen subida exitosamente.',
    type: CloudinaryResponseDto, 
  })
  @UseInterceptors(FileInterceptor('file'))
  async subirImagen(@UploadedFile() file: Express.Multer.File): Promise<any> { // Nota: cambiamos el tipo de retorno a `any`
    if (!file) {
      throw new BadRequestException('No se ha proporcionado un archivo.');
    }
    const result = await this.imagenesService.subirImagen(file);
    // Devuelve solo los datos relevantes que definiste en el DTO
    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
    };
  }
}