// src/components/Cards.jsx
"use client";
import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext"; // asegúrate que la ruta es correcta

const products = [
  { id: 1, name: "T-shirt white", price: "$140.000", image: "/minie camiseta.png" },
  { id: 2, name: "T-shirt black", price: "$140.000", image: "/camiseta black.png" },
  { id: 3, name: "T-shirt pink", price: "$140.000", image: "/camiseta tau.png" },
  { id: 4, name: "T-shirt red", price: "$140.000", image: "/camiseta red sibi.png" },
  { id: 5, name: "T-shirt gray", price: "$140.000", image: "/tito.png" },
  { id: 6, name: "T-shirt yellow", price: "$140.000", image: "/yellow.png" },
];

export default function Cards() {
  const router = useRouter();
  const { addToCart } = useCart();

  // convierte "$140.000" => 140000 (number)
  const priceToNumber = (p: any) => {
    if (typeof p === "number") return p;
    const onlyDigits = String(p).replace(/[^0-9]/g, "");
    return onlyDigits ? Number(onlyDigits) : 0;
  };

  const handleOpenProduct = (product: { id: any; name?: string; price?: string; image?: string; }) => {
    // navega a la página general /camisetas/:id (ajusta la ruta si la quieres distinta)
    router.push(`/camisetas/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: { id: any; name: any; price: any; image: any; }) => {
    e.stopPropagation(); // evita que el click en el botón abra la página del producto
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
            {/* Si usas next/image asegúrate que las rutas estén en /public */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Botón flotante de Add to Cart (pequeño) */}
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

            {/* Botón principal (texto) */}
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
