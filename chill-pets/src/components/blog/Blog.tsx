"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
}

export default function Blog() {
  const posts: Post[] = [
    {
      id: 1,
      title: "Cómo cuidar a tu perro en verano",
      description:
        "Consejos prácticos para mantener a tu mascota fresca e hidratada durante la temporada de calor.",
      image:
        "https://i.pinimg.com/1200x/2c/22/e6/2c22e6294b5cf60783450973ce8625b3.jpg",
      author: "Laura Martínez",
    },
    {
      id: 2,
      title: "La alimentación ideal para gatos",
      description:
        "Descubre qué alimentos son más beneficiosos y cuáles deberías evitar para tu gato.",
      image:
        "https://i.pinimg.com/1200x/d9/de/1d/d9de1d67e982d9014e3a921326d480af.jpg",
      author: "Carlos López",
    },
    {
      id: 3,
      title: "5 juegos para estimular a tu mascota",
      description:
        "Actividades divertidas para mantener a tu perro o gato feliz y activo.",
      image:
        "https://i.pinimg.com/1200x/9c/ee/eb/9ceeeb1b221c34fefa7d09a98368a544.jpg",
      author: "Ana Gómez",
    },
  ];

  // Productos destacados (miniaturas en accesos directos)
  const productos = [
    {
      id: "camisetas",
      nombre: "Camisetas",
      img: "/camiseta black.png",
      
    },
    {
      id: "hoodies",
      nombre: "Hoodies",
      img: "/hoodie negro.png",
      
    },
    {
      id: "buzos",
      nombre: "Buzos",
      img: "/buzo negro b.png",
      emoji: "",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 pt-24">
      {/* --- HERO --- */}
      <div className="relative text-center mb-16">
        <Image
          src="https://i.pinimg.com/1200x/35/88/91/3588913339832a6c9b76471a5349e684.jpg"
          alt="Hero Blog"
          width={1200}
          height={400}
          className="rounded-2xl object-cover w-full h-64 md:h-96"
        />
        <div className="absolute inset-0 bg-black/50 rounded-2xl flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a nuestro Blog
          </h1>
          <p className="max-w-2xl mb-6 text-lg text-gray-200">
            Inspírate, aprende y descubre más sobre el mundo de las mascotas.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 transition px-6 py-2 rounded-full text-white font-medium">
            Leer más
          </button>
        </div>
      </div>

      {/* --- POSTS --- */}
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full md:w-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{post.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{post.author}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-pink-500 hover:text-pink-600 font-medium"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SIDEBAR: ACCESOS DIRECTOS --- */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Accesos rápidos</h3>
          <div className="grid grid-cols-1 gap-4">
            {productos.map((item) => (
              <Link
                key={item.id}
                href={`/${item.id}`}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl flex items-center gap-3 transition"
              >
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 flex items-center gap-2">
                    {item.emoji} {item.nombre}
                  </p>
                </div>
                <span className="text-pink-500 text-lg">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
