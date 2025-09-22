// components/Blog.tsx
"use client";

import Image from "next/image";

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
      image: "https://placedog.net/500/300?id=1",
      author: "Laura Martínez",
    },
    {
      id: 2,
      title: "La alimentación ideal para gatos",
      description:
        "Descubre qué alimentos son más beneficiosos y cuáles deberías evitar para tu gato.",
      image: "https://i.pinimg.com/1200x/39/0b/a9/390ba9bfb57926d8188e6231400624c9.jpg",
      author: "Carlos López",
    },
    {
      id: 3,
      title: "5 juegos para estimular a tu mascota",
      description:
        "Actividades divertidas para mantener a tu perro o gato feliz y activo.",
      image: "https://i.pinimg.com/1200x/9c/ee/eb/9ceeeb1b221c34fefa7d09a98368a544.jpg",
      author: "Ana Gómez",
    },
  ];

  return (
   <section className="max-w-6xl mx-auto px-2 py-10 pt-24">


      {/* Hero */}
      <div className="relative text-center mb-12">
        <Image
          src="https://i.pinimg.com/736x/d7/15/57/d71557ca6e3db475a9a5eaf3df5b4769.jpg"
          alt="Hero Blog"
          width={1200}
          height={400}
          className="rounded-lg object-cover w-full h-64 md:h-96"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to My Blog
          </h1>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
            Leer más
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Posts */}
        <div className="md:col-span-8 space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full md:w-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">{post.description}</p>
                </div>
                <p className="text-sm text-gray-500">👤 {post.author}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

