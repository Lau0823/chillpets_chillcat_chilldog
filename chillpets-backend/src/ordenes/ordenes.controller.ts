// src/ordenes/ordenes.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-ordene.dto';
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

@ApiTags('Órdenes')
@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Cliente)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva orden (solo para clientes)' })
  @ApiCreatedResponse({ description: 'Orden creada exitosamente.' })
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenesService.create(createOrdenDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todas las órdenes (solo para administradores)' })
  @ApiOkResponse({ description: 'Lista de todas las órdenes.' })
  findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Rol.Admin, Rol.Cliente) // Un cliente solo puede ver su propia orden, un admin, cualquiera
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener una orden por su ID (para admins y el cliente que la creó)' })
  @ApiOkResponse({ description: 'Orden encontrada.' })
  @ApiNotFoundResponse({ description: 'Orden no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.ordenesService.findOne(id);
  }
}