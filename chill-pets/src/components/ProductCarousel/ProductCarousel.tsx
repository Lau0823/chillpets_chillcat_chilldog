"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/app/context/CartContext"; // 🛒 contexto global del carrito

interface Producto {
  id: number;
  nombre: string;
  img: string;
  precio: string; // Sigue siendo string porque incluye el símbolo $
}

const productos: Producto[] = [
  { id: 1, nombre: "hoodie amarillo", img: "/hoodie amarillo.png", precio: "$215.000" },
  { id: 2, nombre: "hoodie cream", img: "/hoodie blanco.png", precio: "$215.000" },
  { id: 3, nombre: "hoodie black", img: "/hoodie negro.png", precio: "$215.000" },
  { id: 4, nombre: "hoodie red", img: "/hoodie rojo.png", precio: "$215.000" },
  { id: 5, nombre: "hoodie cat rose", img: "/hoodie rosado.png", precio: "$215.000" },
  { id: 6, nombre: "hoodie gris Mon Club", img: "/hoodie gris.png", precio: "$215.000" },
];

export default function CarruselProductos() {
  const { addToCart } = useCart();

  const handleVerProducto = (id: number) => {
    console.log(`Ver producto ${id}`);
    // Ejemplo: router.push(`/producto/${id}`)
  };

  const handleAgregarCarrito = (producto: Producto) => {
    // ✅ Convertimos el precio "$160.000" a número 160000
    const precioNumerico = Number(producto.precio.replace(/[^0-9]/g, ""));

    const cartItem = {
      id: producto.id,
      name: producto.nombre,
      price: precioNumerico,
      image: producto.img,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Hoodies
      </h2>

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
            <div className="relative group flex flex-col items-center text-center bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
              
              {/* Imagen del producto */}
              <div className="relative w-full h-72">
                <Image
                  src={prod.img}
                  alt={prod.nombre}
                  fill
                  className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Botones sobre la imagen */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleVerProducto(prod.id)}
                    className="p-3 rounded-full bg-white/25 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300"
                    title="Ver producto"
                  >
                    <Eye className="text-white w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleAgregarCarrito(prod)}
                    className="p-3 rounded-full bg-white/25 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300"
                    title="Agregar al carrito"
                  >
                    <ShoppingCart className="text-white w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Información del producto */}
              <div className="p-4">
                <p className="text-lg font-semibold text-black">{prod.nombre}</p>
                <span className="text-black">{prod.precio}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
