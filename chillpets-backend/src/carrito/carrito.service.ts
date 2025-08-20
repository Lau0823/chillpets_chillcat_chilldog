// src/carrito/carrito.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CarritoDto, CarritoItemDto } from './dto/carrito.dto';

@Injectable()
export class CarritoService {
  constructor() {}

  agregarItem(carrito: CarritoDto, item: CarritoItemDto): CarritoDto {
    const itemExistente = carrito.items.find((i) => i.productoId === item.productoId);
    if (itemExistente) {
      itemExistente.cantidad += item.cantidad;
    } else {
      carrito.items.push(item);
    }
    return carrito;
  }

  actualizarItem(carrito: CarritoDto, item: CarritoItemDto): CarritoDto {
    const itemExistente = carrito.items.find((i) => i.productoId === item.productoId);
    if (itemExistente) {
      itemExistente.cantidad = item.cantidad;
    } else {
      throw new NotFoundException('El producto no se encuentra en el carrito.');
    }
    return carrito;
  }

  eliminarItem(carrito: CarritoDto, productoId: string): CarritoDto {
    carrito.items = carrito.items.filter((item) => item.productoId !== productoId);
    return carrito;
  }

  obtenerCarrito(carrito: CarritoDto): CarritoDto {
    return carrito;
  }
}