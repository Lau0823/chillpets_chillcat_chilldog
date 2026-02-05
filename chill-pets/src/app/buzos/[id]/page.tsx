
"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const products = [
  { id: 1, name: "Buzo amarillo", price: "$160.000", image: "/buzo amarillo.png", description: "Buzo cómodo de algodón suave, ideal para clima fresco." },
  { id: 2, name: "Buzo Milo", price: "$160.000", image: "/milo1.png", description: "Diseño moderno con estampado de Milo." },
  { id: 3, name: "Buzo negro básico", price: "$160.000", image: "/buzo negro b.png", description: "Perfecto para combinar con cualquier outfit." },
  { id: 4, name: "Buzo rojo", price: "$160.000", image: "/buzo red.png", description: "Color vibrante y corte oversize." },
  { id: 5, name: "Buzo rosado", price: "$160.000", image: "/buzo rose.png", description: "Estilo casual y femenino." },
  { id: 6, name: "Buzo amarillo pastel", price: "$160.000", image: "/yellow.png", description: "Tono pastel que resalta con jeans o joggers." },
];

export default function BuzoDetalle() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-10 text-center text-gray-600">Producto no encontrado</div>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price.replace(/[^0-9]/g, "")),
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-[500px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-xl bg-gray-50"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-pink-600 text-2xl font-bold mb-6">{product.price}</p>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition w-fit"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
