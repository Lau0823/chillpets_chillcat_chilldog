// src/auth/auth.controller.ts
import {
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
  HttpCode,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import type { Response } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/auth.guard';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

interface AuthenticatedRequest extends Request {
  user: Usuario; // El 'user' ahora es obligatorio en este tipo
}

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Registra un nuevo usuario en la plataforma' })
  @ApiBody({ type: CreateUsuarioDto })
  @ApiOkResponse({ description: 'Usuario registrado exitosamente.' })
  @ApiUnauthorizedResponse({
    description: 'El correo electrónico ya está registrado.',
  })
  async register(@Body() createUsuarioDto: CreateUsuarioDto): Promise<any> {
    const usuarioExistente = await this.usuariosService.buscarPorEmail(
      createUsuarioDto.email,
    );
    if (usuarioExistente) {
      throw new UnauthorizedException(
        'El correo electrónico ya está registrado.',
      );
    }
    return this.usuariosService.crearUsuario(createUsuarioDto);
  }

  @Post('login')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Inicia sesión y establece la cookie de autenticación',
  })
  @ApiBody({ type: LoginUsuarioDto })
  @ApiOkResponse({
    description: 'Inicio de sesión exitoso y cookie establecida.',
  })
  @ApiUnauthorizedResponse({ description: 'Credenciales inválidas.' })
  async login(
    @Body() loginUsuarioDto: LoginUsuarioDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const usuario = await this.authService.validarUsuario(loginUsuarioDto);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const { access_token } = await this.authService.login(usuario);

    res.cookie('jwt', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400000,
    });

    return { mensaje: 'Inicio de sesión exitoso' };
  }

  @Post('logout')
  @HttpCode(200)
  @ApiOperation({ summary: 'Cierra la sesión y elimina la cookie de autenticación' })
  @ApiOkResponse({ description: 'Sesión cerrada exitosamente.' })
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt'); 
    return { mensaje: 'Sesión cerrada exitosamente' };
  }

 @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Verifica la validez de la cookie de sesión y devuelve el perfil del usuario.' })
  @ApiOkResponse({ description: 'La cookie es válida y el perfil ha sido devuelto.' })
  @ApiUnauthorizedResponse({ description: 'La cookie no es válida o no existe.' })
  getProfile(@Req() req: AuthenticatedRequest) {
    return req.user;
  }
}