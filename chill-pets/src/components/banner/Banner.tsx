"use client";

import Image from "next/image";

export default function BannerCategorias() {
  const categorias = [
    {
      nombre: "CAMISETAS",
      img: "https://i.pinimg.com/1200x/90/62/66/9062664f5079f1ab73773933749f3910.jpg", 
    },
    {
      nombre: "BUZOS",
      img: "https://i.pinimg.com/1200x/2b/3c/90/2b3c90deb4a23d28f46dafd0699aab8e.jpg",
    },
    {
      nombre: "TERMOS",
      img: "https://i.pinimg.com/1200x/19/a2/09/19a20916c7ca813afbbe7a0d727e14f8.jpg",
    },
    {
      nombre: "POCILLOS",
      img: "https://i.pinimg.com/736x/0f/0b/48/0f0b487eef6d87a2e7f22caec3504598.jpg",
    },
  ];

  return (
    <section className="w-full">
      {/* Banner principal */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="https://i.pinimg.com/736x/52/2e/65/522e65944a199ede5a0b830eaf27cda1.jpg"
          alt="Banner principal"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            NUEVA COLECCIÓN
          </h1>
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
