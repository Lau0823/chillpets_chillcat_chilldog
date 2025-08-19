// src/productos/productos.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
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
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo producto (solo para administradores)' })
  @ApiBody({ type: CreateProductoDto })
  @ApiCreatedResponse({ description: 'Producto creado exitosamente.', type: CreateProductoDto })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiOkResponse({ description: 'Lista de todos los productos.' })
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por su ID' })
  @ApiOkResponse({ description: 'Producto encontrado.', type: CreateProductoDto })
  @ApiNotFoundResponse({ description: 'Producto no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un producto (solo para administradores)' })
  @ApiBody({ type: UpdateProductoDto })
  @ApiOkResponse({ description: 'Producto actualizado exitosamente.', type: UpdateProductoDto })
  @ApiNotFoundResponse({ description: 'Producto no encontrado.' })
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un producto (solo para administradores)' })
  @ApiOkResponse({ description: 'Producto eliminado exitosamente.' })
  @ApiNotFoundResponse({ description: 'Producto no encontrado.' })
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }
}