// src/productos/categorias.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Rol } from '../common/enums/rol.enum';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Categorías')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva categoría (solo para administradores)' })
  @ApiCreatedResponse({ description: 'Categoría creada exitosamente.' })
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiOkResponse({ description: 'Lista de todas las categorías.' })
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una categoría por su ID' })
  @ApiOkResponse({ description: 'Categoría encontrada.' })
  @ApiNotFoundResponse({ description: 'Categoría no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una categoría (solo para administradores)' })
  @ApiOkResponse({ description: 'Categoría actualizada exitosamente.' })
  @ApiNotFoundResponse({ description: 'Categoría no encontrada.' })
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(id, updateCategoriaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una categoría (solo para administradores)' })
  @ApiOkResponse({ description: 'Categoría eliminada exitosamente.' })
  @ApiNotFoundResponse({ description: 'Categoría no encontrada.' })
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(id);
  }
}