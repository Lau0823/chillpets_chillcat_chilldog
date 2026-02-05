"use client";
import React from "react";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Hoodie Blanco",
    price: 215000,
    image: "/hoodie blanco.png",
  },
  {
    id: 2,
    name: "Hoodie Amarillo",
    price: 215000,
    image: "/hoodie amarillo.png",
  },
  {
    id: 3,
    name: "Hoodie Negro",
    price: 215000,
    image: "/hoodie negro.png",
  },
  {
    id: 4,
    name: "Hoodie Rojo",
    price: 215000,
    image: "/hoodie rojo.png",
  },
  {
    id: 5,
    name: "Hoodie Rosado",
    price: 215000,
    image: "/hoodie rosado.png",
  },
  {
    id: 6,
    name: "Hoodie Gris",
    price: 215000,
    image: "/hoodie gris.png",
  },
];

export default function Hoodies() {
  const router = useRouter();

  const handleAddToCart = (product) => {
    alert(`Agregaste ${product.name} al carrito 🛍️`);
  };

  const handleViewProduct = (id) => {
    router.push(`/hoodies/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="m-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
        >
          <div
            className="cursor-pointer"
            onClick={() => handleViewProduct(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-black">{product.name}</h3>
            <p className="text-pink-500 font-bold">
              ${product.price.toLocaleString("es-CO")}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
