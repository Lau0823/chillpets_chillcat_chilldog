"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Cómo cuidar a tu perro en verano",
    description:
      "Consejos prácticos para mantener a tu mascota fresca e hidratada durante la temporada de calor.",
    content:
      "Durante el verano, las altas temperaturas pueden afectar gravemente a nuestras mascotas. Es importante ofrecerles agua fresca constantemente, evitar paseos en horas de mucho sol y nunca dejarlos dentro del coche. También puedes preparar helados naturales con frutas seguras para perros, o proporcionarles una zona sombreada y ventilada.",
    image:
      "https://i.pinimg.com/1200x/2c/22/e6/2c22e6294b5cf60783450973ce8625b3.jpg",
    author: "Laura Martínez",
  },
  {
    id: 2,
    title: "La alimentación ideal para gatos",
    description:
      "Descubre qué alimentos son más beneficiosos y cuáles deberías evitar para tu gato.",
    content:
      "Los gatos son carnívoros estrictos, por lo que su dieta debe basarse principalmente en proteína animal. Evita darles leche, pan o alimentos con azúcar. Lo ideal es combinar alimento húmedo y seco de buena calidad, siempre acompañados de agua limpia y fresca.",
    image:
      "https://i.pinimg.com/1200x/d9/de/1d/d9de1d67e982d9014e3a921326d480af.jpg",
    author: "Carlos López",
  },
  {
    id: 3,
    title: "5 juegos para estimular a tu mascota",
    description:
      "Actividades divertidas para mantener a tu perro o gato feliz y activo.",
    content:
      "Los juegos son esenciales para mantener la mente y el cuerpo de tu mascota saludables. Prueba con juguetes interactivos, escondite con premios o circuitos de obstáculos caseros. También puedes enseñarles nuevos trucos para fortalecer el vínculo.",
    image:
      "https://i.pinimg.com/1200x/9c/ee/eb/9ceeeb1b221c34fefa7d09a98368a544.jpg",
    author: "Ana Gómez",
  },
];

export default function BlogDetalle() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Artículo no encontrado 😢
      </div>
    );
  }

  // Galería tipo Instagram
  const galleryImages = [
    "https://i.pinimg.com/1200x/3d/d6/91/3dd691e985e4b25f2a383f063a6c90e4.jpg",
    "https://i.pinimg.com/736x/3b/66/f9/3b66f90844ae57238842d4a5043a5d31.jpg",
    "https://i.pinimg.com/1200x/53/7f/28/537f282012ff97fe9be7a33158cafc36.jpg",
    "https://i.pinimg.com/736x/c1/d1/56/c1d1569ad67797a64286076ee6d39d4d.jpg",
    "https://i.pinimg.com/736x/bd/80/a0/bd80a0cc87641ad5075b986ec137393e.jpg",
    "https://i.pinimg.com/736x/52/29/36/52293699648b2323ff7754f594b56d5b.jpg",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 pt-24 grid md:grid-cols-12 gap-10">
      {/* Contenido principal */}
      <article className="md:col-span-8 bg-white rounded-xl shadow-md p-6">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover w-full h-72"
        />
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">Por {post.author}</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {post.content}
        </p>

        <Link
          href="/blog"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
        >
          ← Volver al blog
        </Link>
      </article>

      {/* Sidebar */}
      <aside className="md:col-span-4 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4"> Galería inspiracional</h2>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative group">
                <Image
                  src={img}
                  alt={`Mini imagen ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-24 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
