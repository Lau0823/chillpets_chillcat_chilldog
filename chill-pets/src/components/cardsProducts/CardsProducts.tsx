"use client";

import { useState } from "react";
import Image from "next/image";

const product = {
  name: "Cama Edredon",
  description:
    "Cama edredón para gato o perro, brinda confort y bienestar a tu peludito.",
  price: "$120.000",
  oldPrice: 150000,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["#04a086af",  "#f7347ed0", "#cfcac6ff",], // morado, naranja, amarillo, rojo
  images: [
    "https://i.pinimg.com/1200x/b8/26/bb/b826bbf394b1e2098a3667e36a1feeed.jpg",
    "https://i.pinimg.com/736x/8c/2d/b6/8c2db60b99f729ab17d110ddaf066a2e.jpg",
    "https://i.pinimg.com/736x/95/5c/6e/955c6e631c0b9bbe07f5f8acb1adee10.jpg",
    "https://i.pinimg.com/1200x/2a/5d/5c/2a5d5c570b21d8f7eb6ef5bc9b212cd9.jpg"
  ],
};

export default function ProductCard() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-2 gap-8">
      {/* Imagen principal */}
      <div>
        <Image
          src={mainImage}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-3xl object-cover"
        />
        {/* Miniaturas */}
        <div className="flex gap-3 mt-4">
          {product.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              width={80}
              height={60}
              className={`cursor-pointer rounded-2xl border-2 ${
                img === mainImage ? "border-pink-500" : "border-transparent"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Info del producto */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500 mt-2">{product.description}</p>

          {/* Precio */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-pink-500">
              {product.price.toLocaleString()} 
            </span>
            <span className="text-gray-400 line-through ml-3">
              {product.oldPrice.toLocaleString()} 
            </span>
          </div>

          {/* Selector de talla */}
          <div className="mt-6">
            <h3 className="font-semibold">Tamaño</h3>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    size === selectedSize
                      ? "bg-black text-white"
                      : "hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de color */}
          <div className="mt-6">
            <h3 className="font-semibold">Color</h3>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    color === selectedColor
                      ? "border-black"
                      : "border-gray"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-8">
          <button className="flex-1 bg-pink-500 text-white py-3 rounded-xl hover:bg-black transition">
            Comprar ahora
          </button>
          <button className="flex-1 border py-3 rounded-xl hover:bg-gray-100 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
