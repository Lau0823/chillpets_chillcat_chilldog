"use client";
import React from "react";
import { PawPrint } from "lucide-react"; // usamos huellitas 🐾

const products = [
  {
    id: 1,
    name: "Cama para perro",
    price: 120000,
    image:
      "https://i.pinimg.com/1200x/a6/b0/73/a6b073dbfb66d40ddf0454dff7da93bf.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 2,
    name: "Collar para gato",
    price: 25000,
    image:
      "https://i.pinimg.com/736x/fe/74/40/fe7440a49c8c2815a885f853402d256c.jpg",
    rating: 5,
    label: "Hot",
  },
  {
    id: 3,
    name: "Juguete mordedor",
    price: 18000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 3,
    label: "Sale",
  },
  {
    id: 4,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 5,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 6,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 7,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 8,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
  {
    id: 9,
    name: "Plato de comida",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
    rating: 4,
    label: "New",
  },
];

const Cards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-white rounded-2xl border shadow-md p-5 flex flex-col items-center hover:shadow-xl transition"
        >
          {/* Etiqueta */}
          {product.label && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full">
              {product.label}
            </span>
          )}

          {/* Imagen */}
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-contain mb-4"
          />

          {/* Nombre */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>

          {/* Rating con huellitas 🐾 */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <PawPrint
                key={i}
                size={18}
                className={
                  i < product.rating
                    ? "text-pink-500 opacity-100"
                    : "text-pink-500 opacity-30"
                }
              />
            ))}
          </div>

          {/* Precio */}
          <p className="text-xl font-bold text-gray-900 mb-4">
            ${product.price.toLocaleString()}
          </p>

          {/* Botones */}
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
