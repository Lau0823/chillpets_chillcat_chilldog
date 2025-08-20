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
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiBody, 
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
  @ApiBody({ 
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'El archivo de imagen a subir.',
        },
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Imagen subida exitosamente.',
    type: CloudinaryResponseDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async subirImagen(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CloudinaryResponseDto> {
    if (!file) {
      throw new BadRequestException('No se ha proporcionado un archivo.');
    }
    return this.imagenesService.subirImagen(file);
  }
}