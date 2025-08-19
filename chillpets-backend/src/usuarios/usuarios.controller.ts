// src/usuarios/usuarios.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiNoContentResponse,
} from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiBody({ type: CreateUsuarioDto })
  @ApiOkResponse({ description: 'El usuario ha sido creado exitosamente.', type: Usuario })
  async crearUsuario(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuarioExistente = await this.usuariosService.buscarPorEmail(createUsuarioDto.email);
    if (usuarioExistente) {
      throw new UnauthorizedException('El correo electrónico ya está registrado.');
    }
    return this.usuariosService.crearUsuario(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los usuarios' })
  @ApiOkResponse({ description: 'Lista de todos los usuarios', type: [Usuario] })
  async buscarTodos(): Promise<Usuario[]> {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca un usuario por su ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: 'string' })
  @ApiOkResponse({ description: 'Usuario encontrado exitosamente.', type: Usuario })
  @ApiNotFoundResponse({ description: 'Usuario no encontrado.' })
  async buscarUsuarioPorId(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.buscarPorId(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un usuario existente' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: 'string' })
  @ApiBody({ type: UpdateUsuarioDto })
  @ApiOkResponse({ description: 'Usuario actualizado exitosamente.', type: Usuario })
  @ApiNotFoundResponse({ description: 'Usuario no encontrado.' })
  async actualizarUsuario(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(id, updateUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Elimina un usuario por su ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: 'string' })
  @ApiNoContentResponse({ description: 'Usuario eliminado exitosamente.' })
  @ApiNotFoundResponse({ description: 'Usuario no encontrado.' })
  async eliminarUsuario(@Param('id') id: string): Promise<void> {
    await this.usuariosService.eliminarUsuario(id);
  }
}