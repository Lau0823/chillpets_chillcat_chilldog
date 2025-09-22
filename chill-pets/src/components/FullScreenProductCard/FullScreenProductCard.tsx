"use client";

import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  
  image: string;
}

const product: Product = {
    id: 1,
    name: "CHILL PETS",
    description: `En CHILLPETS creemos que las mascotas no son solo animales, ¡son familia!  Por eso diseñamos y estampamos productos únicos que permiten llevarlos contigo a todas partes.

Ofrecemos camisetas, buzos, termos y pocillos personalizados, creados con amor y pensados para reflejar la conexión especial que tienes con tu peludo. Cada diseño captura su esencia, para que puedas mostrar con orgullo ese lazo tan especial que solo quienes amamos a los animales entendemos.

Ya sea para regalar o para consentirte, nuestros productos son la manera perfecta de tener siempre presente a tu mascota, combinando estilo, comodidad y sentimiento.

Porque más que estampados, lo que hacemos es inmortalizar momentos y emociones`,

    image: "https://i.pinimg.com/1200x/dd/6f/5d/dd6f5d2572a452c01f7a6dcdd4da3a88.jpg",

};

const FullWidthProductCard: React.FC = () => {
  return (
<section
  className="w-screen h-screen bg-cover bg-center flex items-center justify-center p-8"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/68/00/2b/68002b04418a77c831ebaf8904f3ed8a.jpg')",
  }}
>
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-black
                  bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
    {/* Imagen + Título */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-cover drop-shadow-xl rounded-full"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        {product.name}
      </h1>
    </div>

    {/* Descripción + Precio */}
    <div className="flex-1 relative mt-8 md:mt-0">
      <p className="text-lg leading-relaxed max-w-md">{product.description}</p>
      
    </div>
  </div>
</section>


  );
};

export default FullWidthProductCard;
