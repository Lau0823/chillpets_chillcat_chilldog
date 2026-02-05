
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoriasBanner() {
  const router = useRouter();

  const banners = [
    {
      titulo: "Buzo personalizado con la cara de tu mascota",
      subtitulo: "Hazlo único como él 🐾",
      boton: "COMPRAR",
      img: "https://i.pinimg.com/736x/fe/7a/e9/fe7ae98dccfe808a60199e210732b41e.jpg",
      ruta: "/buzos",
      posicion: "left", // principal
    },
    {
      titulo: "Llegó Halloween",
      subtitulo: "Nueva colección 🎃",
      img: "https://i.pinimg.com/1200x/f9/42/e0/f942e004c815f7bff69c97dab001d864.jpg",
      ruta: "/coleccion-halloween",
      posicion: "right", // lateral 1
    },
    {
      titulo: "Colección Black",
      subtitulo: "Estilo urbano 🖤",
      img: "https://i.pinimg.com/1200x/b5/31/61/b5316107ebdc1f15fdd4b4db3743e977.jpg",
      ruta: "/coleccion-black",
      posicion: "right", // lateral 2
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Imagen grande izquierda */}
        <div
          onClick={() => router.push(banners[0].ruta)}
          className="relative group cursor-pointer overflow-hidden rounded-2xl lg:col-span-2 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src={banners[0].img}
            alt={banners[0].titulo}
            width={900}
            height={600}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

          {/* Texto */}
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 max-w-md leading-tight">
              {banners[0].titulo}
            </h2>
            <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-200 transition">
              {banners[0].boton} →
            </button>
          </div>
        </div>

        {/* Dos imágenes pequeñas a la derecha */}
        <div className="flex flex-col gap-4">
          {banners.slice(1).map((banner, index) => (
            <div
              key={index}
              onClick={() => router.push(banner.ruta)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={banner.img}
                alt={banner.titulo}
                width={500}
                height={300}
                className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{banner.titulo}</h3>
                <p className="text-sm opacity-90">{banner.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

