"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
}

const MagazinePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        title: "¿Por qué mi gato amasa con las patas?",
        author: "Laura Jimenez",
        date: "15 Feb 2024",
        image: "/gatico 3.jpg",
        description:
          "¿Alguna vez has visto a tu gato presionar con sus patitas sobre una manta o tu barriga? ¡Eso se llama amasar! Es un comportamiento instintivo que los gatitos hacen cuando están lactando, y lo conservan incluso de adultos¿Por qué lo hacen? Porque están cómodos y felices Marcan su territorio con las almohadillas de sus patas Es una forma de decirte me siento seguro contigo Si tu gato te amasa, ¡considéralo un gran cumplido!",
      },
      {
        id: 2,
        title: "¿Cuánto debo pasear a mi perro?",
        author: "Nacho",
        date: "10 Feb 2024",
        image: "/perrito2.jpg",
        description:
          "Pasear a tu perro no es solo para que haga sus necesidades, ¡es parte fundamental de su salud física y mental! ¿Cuánto tiempo es ideal? Perros pequeños: entre 30 a 45 minutos al díaPerros medianos a grandes: 1 hora o más al díaCachorros: paseos cortos y frecuentes Además de ejercicio, un paseo es estimulación olfativa, socialización y una oportunidad para fortalecer el vínculo con tu peludo 🐾💞",
      },
      {
        id: 3,
        title: "¿Qué juguetes son seguros para mi perro o gato?",
        author: "Laura Jimenez",
        date: "05 Feb 2024",
        image: "/gatico 5.jpg",
        description:
          "Elegir el juguete adecuado puede marcar la diferencia entre diversión y peligro. Aquí te damos algunas recomendaciones:🧸 Para perros:Pelotas resistentes (evita las pequeñas si tu perro es grande)Juguetes tipo kong para rellenar con premios Cuerdas gruesas para tirar y aflojar🧶 Para gatos: Plumas en varita Pelotitas con cascabel Cajas de cartón (¡las aman!) Evita juguetes con piezas pequeñas que puedan tragarse o romperse fácilmente. Y recuerda: ¡supervisa siempre el juego!.",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center uppercase tracking-widest mt-10 mb-10 text-orange-500">
        TIPS CHILL PETS
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 flex flex-col"
          >
<div className="w-full overflow-hidden rounded-t-lg">
  <Image
    src={article.image}
    alt={article.title}
    width={500}
    height={300}
    className="w-full h-auto object-contain"
  />
</div>


    <div className="p-5 flex-grow flex flex-col">
              <p className="text-gray-500 text-sm">
                {article.date} · <span className="font-bold">{article.author}</span>
              </p>
              <Link
                href={`/manager/magazine/${article.id}`}
                className="text-xl font-semibold mt-2 text-blue-600 hover:underline text-orange-500"
              >
                {article.title}
              </Link>
              <p className="text-gray-600 mt-2 flex-grow">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;

