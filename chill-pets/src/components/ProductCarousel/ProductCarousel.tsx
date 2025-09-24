"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  img: string;
  precio: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Camiseta Logo",
    img: "https://i.pinimg.com/1200x/5a/23/96/5a2396e54d4c0e6440d3271b7a6c220c.jpg",
    precio: "$60.000",
  },
  {
    id: 2,
    nombre: "Buzo Oversize",
    img: "https://i.pinimg.com/736x/f5/08/e1/f508e13fd1baba0a0ba16221c0e774f1.jpg",
    precio: "$120.000",
  },
  {
    id: 3,
    nombre: "Termo Metálico",
    img: "https://i.pinimg.com/1200x/a1/a6/86/a1a686fa9daaca571a64b5b80a6f3ad5.jpg",
    precio: "$45.000",
  },
  {
    id: 4,
    nombre: "Pocillo Diseño",
    img: "https://i.pinimg.com/1200x/ad/47/3b/ad473b27f7300f4fdd29ad4040d9d81e.jpg",
    precio: "$30.000",
  },
  {
    id: 5,
    nombre: "Camiseta Básica",
    img: "https://i.pinimg.com/1200x/72/3e/4c/723e4c5d7a34da863d57a3c018a9d5a6.jpg",
    precio: "$55.000",
  },
];

export default function CarruselProductos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Productos</h2>

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
