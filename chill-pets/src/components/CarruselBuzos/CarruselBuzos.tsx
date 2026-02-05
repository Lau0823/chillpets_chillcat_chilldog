"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/app/context/CartContext";

interface Producto {
  id: number;
  nombre: string;
  img: string;
  precio: number;
}

const productos: Producto[] = [
  { id: 1, nombre: "Buzo Amarillo", img: "/buzo amarillo.png", precio: 160000 },
  { id: 2, nombre: "Buzo Cream", img: "/milo1.png", precio: 160000 },
  { id: 3, nombre: "Buzo Black", img: "/buzo negro b.png", precio: 160000 },
  { id: 4, nombre: "Buzo Red", img: "/buzo red.png", precio: 160000 },
  { id: 5, nombre: "Buzo Rose", img: "/buzo rose.png", precio: 160000 },
  { id: 6, nombre: "Buzo Gray", img: "/LULU.png", precio: 160000 },
];

export default function CarruselBuzos() {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Buzos</h2>

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
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative w-56 h-72 overflow-hidden rounded-2xl">
                <Image
                  src={prod.img}
                  alt={prod.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />

                {/* Botones tipo vidrio */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() =>
                      alert(`👀 Ver producto: ${prod.nombre}`)
                    }
                    className="p-3 rounded-full bg-white/25 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300"
                    title="Ver producto"
                  >
                    <Eye className="text-white w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      addToCart({
                        id: prod.id,
                        name: prod.nombre,
                        price: prod.precio,
                        image: prod.img,
                        quantity: 1,
                      })
                    }
                    className="p-3 rounded-full bg-white/25 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300"
                    title="Agregar al carrito"
                  >
                    <ShoppingCart className="text-white w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-lg font-semibold text-white">{prod.nombre}</p>
              <span className="text-gray-400">${prod.precio.toLocaleString()}</span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
