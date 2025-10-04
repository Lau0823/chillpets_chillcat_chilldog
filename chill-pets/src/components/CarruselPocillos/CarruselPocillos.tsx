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
    nombre: "buzo amarillo ",
    img: "/buzo amarillo.png", // dentro de public/productos/
    precio: "$160.000",
  },
  {
    id: 2,
    nombre: "buzo cream",
    img: "/milo1.png",
    precio: "$160.000",
  },
  {
    id: 3,
    nombre: "buzo black",
    img: "/buzo negro b.png",
    precio: "$140.000",
  },
  {
    id: 4,
    nombre: "buzo red",
    img: "/buzo red.png",
    precio: "$140.000",
  },
  {
    id: 5,
    nombre: "buzo  rose",
    img: "/buzo rose.png",
    precio: "$140.000",
  },
  {
    id: 6,
    nombre: "buzo gray",
    img: "/LULU.png",
    precio: "$160.000",
  },
];

export default function CarruselProductos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Buzos</h2>

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
