"use client";
import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext"; // asegúrate que la ruta es correcta

const products = [
  { id: 1, name: "Buzo amarillo", price: "$160.000", image: "/buzo amarillo.png" },
  { id: 2, name: "Buzo Milo", price: "$160.000", image: "/milo1.png" },
  { id: 3, name: "Buzo negro básico", price: "$160.000", image: "/buzo negro b.png" },
  { id: 4, name: "Buzo rojo", price: "$160.000", image: "/buzo red.png" },
  { id: 5, name: "Buzo rosado", price: "$160.000", image: "/buzo rose.png" },
  { id: 6, name: "Buzo amarillo pastel", price: "$160.000", image: "/yellow.png" },
];

export default function BuzosCards() {
  const router = useRouter();
  const { addToCart } = useCart();

  const priceToNumber = (p: any) => {
    if (typeof p === "number") return p;
    const onlyDigits = String(p).replace(/[^0-9]/g, "");
    return onlyDigits ? Number(onlyDigits) : 0;
  };

  const handleOpenProduct = (product: { id: any; name?: string; price?: string; image?: string; }) => {
    router.push(`/buzos/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: { id: any; name: any; price: any; image: any; }) => {
    e.stopPropagation();
    const item = {
      id: product.id,
      name: product.name,
      price: priceToNumber(product.price),
      image: product.image,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="m-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          onClick={() => handleOpenProduct(product)}
        >
          <div className="relative w-full h-72 bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute bottom-3 right-3">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:scale-105 transition transform"
                title="Agregar al carrito"
              >
                <ShoppingCart className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-pink-600 font-bold mt-2">{product.price}</p>

            <div className="mt-4 flex justify-center">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
