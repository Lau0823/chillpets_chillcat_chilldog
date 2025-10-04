"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  img: string; // ruta dentro de /public
  precio: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Camiseta white ",
    img: "/minie camiseta.png", // dentro de public/productos/
    precio: "$70.000",
  },
  {
    id: 2,
    nombre: "camiseta sam",
    img: "/camiseta black.png",
    precio: "$70.000",
  },
  {
    id: 3,
    nombre: "camiseta rouse",
    img: "/camiseta tau.png",
    precio: "$70.000",
  },
  {
    id: 4,
    nombre: "camiseta red",
    img: "/camiseta red sibi.png",
    precio: "$70.000",
  },
  {
    id: 5,
    nombre: "Camista Cat",
    img: "/tito.png",
    precio: "$70.000",
  },
  {
    id: 6,
    nombre: "t-shirt yellow",
    img: "/yellow.png",
    precio: "$70.000",
  },
];

export default function CarruselProductos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">T-shirt</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {productos.map((prod) => (
          <SwiperSlide key={prod.id}>
            <div className="flex flex-col items-center text-center cursor-pointer group">
              {/* Imagen del producto */}
              <div className="relative w-48 h-60">
                <Image
                  src={prod.img}
                  alt={prod.nombre}
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Nombre y precio */}
              <p className="mt-3 text-lg font-semibold">{prod.nombre}</p>
              <span className="text-gray-600">{prod.precio}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
