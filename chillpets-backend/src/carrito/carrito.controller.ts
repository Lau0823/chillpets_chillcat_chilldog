// src/carrito/carrito.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  Put,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoDto, CarritoItemDto } from './dto/carrito.dto';
import type { Request, Response } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBody,
  ApiCookieAuth,
} from '@nestjs/swagger';

const CARRO_COOKIE_NAME = 'carrito';

@ApiTags('Carrito de Compras')
@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  private obtenerCarritoDesdeCookie(req: Request): CarritoDto {
    try {
      const carritoCookie = req.cookies[CARRO_COOKIE_NAME];
      return carritoCookie ? JSON.parse(decodeURIComponent(carritoCookie)) : { items: [] };
    } catch (e) {
      return { items: [] };
    }
  }

  private guardarCarritoEnCookie(res: Response, carrito: CarritoDto) {
    const carritoString = JSON.stringify(carrito);
    res.cookie(CARRO_COOKIE_NAME, encodeURIComponent(carritoString), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
      sameSite: 'strict',
    });
  }

  @Post('agregar')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Agrega un producto al carrito' })
  @ApiBody({ type: CarritoItemDto })
  @ApiOkResponse({ description: 'Producto agregado al carrito exitosamente.' })
  @ApiCookieAuth()
  agregarAlCarrito(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Body() itemDto: CarritoItemDto,
  ) {
    const carrito = this.obtenerCarritoDesdeCookie(req);
    const carritoActualizado = this.carritoService.agregarItem(carrito, itemDto);
    this.guardarCarritoEnCookie(res, carritoActualizado);
    return { mensaje: 'Producto agregado al carrito', carrito: carritoActualizado };
  }

  @Put('actualizar')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualiza la cantidad de un producto en el carrito' })
  @ApiBody({ type: CarritoItemDto })
  @ApiOkResponse({ description: 'Cantidad del producto actualizada exitosamente.' })
  @ApiCookieAuth()
  actualizarCarrito(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Body() itemDto: CarritoItemDto,
  ) {
    const carrito = this.obtenerCarritoDesdeCookie(req);
    const carritoActualizado = this.carritoService.actualizarItem(carrito, itemDto);
    this.guardarCarritoEnCookie(res, carritoActualizado);
    return { mensaje: 'Carrito actualizado', carrito: carritoActualizado };
  }

  @Delete('eliminar/:productoId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Elimina un producto del carrito' })
  @ApiOkResponse({ description: 'Producto eliminado del carrito exitosamente.' })
  @ApiCookieAuth()
  eliminarDelCarrito(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Param('productoId') productoId: string,
  ) {
    const carrito = this.obtenerCarritoDesdeCookie(req);
    const carritoActualizado = this.carritoService.eliminarItem(carrito, productoId);
    this.guardarCarritoEnCookie(res, carritoActualizado);
    return { mensaje: 'Producto eliminado del carrito', carrito: carritoActualizado };
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene el contenido actual del carrito' })
  @ApiOkResponse({ description: 'Contenido del carrito', type: CarritoDto })
  @ApiCookieAuth()
  obtenerCarrito(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const carrito = this.obtenerCarritoDesdeCookie(req);
    return { carrito };
  }
}