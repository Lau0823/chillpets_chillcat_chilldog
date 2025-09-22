"use client";
import React from "react";
import { ShoppingCart, Zap } from "lucide-react";

import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    name: "Camiseta Cat Woman",
    price: 90000,
    image:
      "https://i.pinimg.com/736x/5f/69/38/5f6938a467b7c3afaf1ad192afbc926f.jpg",
   
    label: "New",
  },
  {
    id: 2,
    name: "Camiseta Dog",
    price: 90000,
    image:
      "https://i.pinimg.com/736x/c9/c2/ce/c9c2ce5f6f191087552a95ac1ba693b2.jpg",
 
    label: "Hot",
  },
  {
    id: 3,
    name: "Camiseta Doglover",
    price: 60000,
    image:
      "https://i.pinimg.com/1200x/3e/7b/d8/3e7bd81a57f95458cc09faff35d3ce0c.jpg",
  
    label: "Sale",
  },
  {
    id: 4,
    name: "buzo cuello redondo",
    price: 12000,
    image:
      "https://i.pinimg.com/1200x/59/44/67/5944671dee4eb0069752a11746378342.jpg",
    
    label: "New",
  },
    {
    id: 5,
    name: "buzo capota",
    price: 170000,
    image:
      "https://i.pinimg.com/1200x/2e/f5/86/2ef5864053ce2823c29fbe85c11b7b19.jpg",
    
    label: "New",
  },
    {
    id: 6,
    name: "buzo Dog Mom",
    price: 35000,
    image:
      "https://i.pinimg.com/736x/64/52/e4/6452e494fe5333e099caf7b838f90811.jpg",
    
    label: "New",
  },
   
];

const Cards = () => {
  const { addToCart } = useCart();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto item-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
        >
          {/* Etiqueta */}
          {product.label && (
            <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              {product.label}
            </span>
          )}

          {/* Imagen */}
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full hover:scale-105 transition"
            />
          </div>

          {/* Contenido */}
          <div className="p-5 flex flex-col items-center text-center">
            {/* Nombre */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>

            {/* Rating con huellitas */}
          
            
            

            {/* Precio */}
            <p className="text-xl font-bold text-gray-900 mb-4">
              ${product.price.toLocaleString()}
            </p>

            {/* Botones */}
   <div className="flex gap-4">
      {/* Botón Add to Cart (glassmorphism) */}
      <button
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 
                   text-black shadow-lg hover:bg-white/20 hover:scale-105 
                   transition-all duration-300"
      >
        <ShoppingCart size={20} />
      </button>

      {/* Botón Buy Now (glow LED) */}
  <button
  className="px-6 py-3 rounded-full 
             bg-pink-500/80 text-white font-semibold
             shadow-[0_0_20px_4px_rgba(236,72,153,0.8)] 
             hover:shadow-[0_0_35px_6px_rgba(236,72,153,1)] 
             hover:scale-105 transition-all duration-300"
>
  Comprar ahora
</button>


    </div>

          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
