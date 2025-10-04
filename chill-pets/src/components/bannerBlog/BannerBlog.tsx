"use client";

import Image from "next/image";

export default function BlogNewsletter() {
  return (
    <div className="w-full">
      {/* Banner superior con imagen */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-black flex justify-center">
        <Image
          src="/bannerblog.png" // 👈 asegúrate que exista en public/
          alt="Blog Banner"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
            CHILLPETS BLOG
          </h2>
        </div>
      </div>

      {/* Bloque de Newsletter */}
      <section className="w-full bg-white py-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          SUSCRÍBETE A NUESTRA NEWSLETTER
        </h2>

        <p className="mt-3 text-gray-600 max-w-xl">
          ¡Recibe antes que nadie los mejores consejos para el cuidado de tus
          mascotas, promociones y mucho más!
        </p>

        <button
          className="mt-6 px-8 py-3 rounded-full bg-black text-white font-medium 
                     hover:bg-gray-800 transition-colors"
        >
          Suscríbete
        </button>
      </section>
    </div>
  );
}
