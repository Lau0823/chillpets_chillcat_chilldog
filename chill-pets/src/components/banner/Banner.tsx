"use client";

import Image from "next/image";

export default function BannerCategorias() {
  const categorias = [
    { nombre: "HOODIES", img: "/hoodie blanco.png" },
    { nombre: "BUZOS", img: "/buzo.png" },
    { nombre: "TERMOS", img: "/termo.png" },
    { nombre: "POCILLOS", img: "/pocillo2.png" },
  ];

  return (
    <section className="w-full">
      {/* Banner principal */}
      <div className="relative w-full h-[60vh] bg-white flex items-center justify-center">
        <Image
          src="/baner3.png"
          alt="Banner principal"
          fill
          className="object-contain" // 👉 mantiene la imagen completa
          priority
        />

        {/* Fondo extra para que no quede espacio vacío */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Overlay con texto y botón alineados a la derecha */}
        <div className="absolute inset-0 flex flex-col items-end justify-center text-right px-6 md:px-20">
         <h1 className="text-black text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg leading-tight">
  ¡PRESUME A <br />
  
  TU <br />
  MASCOTA <br />
   DE UNA <br />
  MANERA <br />
  MUY <br />
  FASHION!
</h1>

          <p className="text-white/90 mt-3 text-lg md:text-xl max-w-xl drop-shadow">
           
          </p>

          <button
            className="mt-6 px-8 py-3 rounded-full 
                       bg-pink-500/90 text-white font-semibold 
                       shadow-[0_0_20px_4px_rgba(236,72,153,0.6)] 
                       hover:shadow-[0_0_35px_6px_rgba(236,72,153,0.9)] 
                       hover:scale-105 
                       backdrop-blur-md
                       transition-all duration-300"
          >
            Comprar ahora
          </button>
        </div>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden"
          >
            <Image
              src={cat.img}
              alt={cat.nombre}
              width={500}
              height={500}
              className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white font-bold text-lg md:text-xl tracking-wide">
                {cat.nombre}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
