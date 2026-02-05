"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

export default function HoodieDetalle() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const products = [
    {
      id: "1",
      name: "Hoodie Blanco",
      price: 215000,
      image: "/hoodie blanco.png",
      description: "Hoodie blanco cómodo, suave y moderno para cualquier ocasión.",
    },
    {
      id: "2",
      name: "Hoodie Amarillo",
      price: 215000,
      image: "/hoodie amarillo.png",
      description: "Hoodie amarillo vibrante con tela gruesa y capucha amplia.",
    },
    {
      id: "3",
      name: "Hoodie Negro",
      price: 215000,
      image: "/hoodie negro.png",
      description: "Hoodie negro estilo oversize, ideal para climas fríos y looks urbanos.",
    },
    {
      id: "4",
      name: "Hoodie Rojo",
      price: 215000,
      image: "/hoodie rojo.png",
      description: "Hoodie rojo intenso con bolsillos frontales y cordones ajustables.",
    },
    {
      id: "5",
      name: "Hoodie Rosado",
      price: 215000,
      image: "/hoodie rosado.png",
      description: "Hoodie rosado suave, estilo unisex y tejido liviano para el día a día.",
    },
    {
      id: "6",
      name: "Hoodie Gris",
      price: 215000,
      image: "/hoodie gris.png",
      description: "Hoodie gris clásico con acabado premium y interior afelpado.",
    },
  ];

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado 😢</h2>
        <button
          onClick={() => router.push("/hoodies")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Volver a Hoodies
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Agregaste ${quantity} unidad(es) de ${product.name} al carrito 🛒`);
  };

  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        {/* Imagen del producto */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-2xl"
          />
        </div>

        {/* Detalles del producto */}
        <div className="flex flex-col justify-between w-full md:w-1/2 text-gray-800">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-pink-500 mb-6">
              ${product.price.toLocaleString("es-CO")}
            </p>
          </div>

          {/* Selector de cantidad */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Botón agregar al carrito */}
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 text-white py-3 px-6 rounded-xl hover:bg-pink-600 transition font-semibold text-lg"
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </main>
  );
}
