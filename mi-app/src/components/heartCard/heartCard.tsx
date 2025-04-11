// components/BannerCard.tsx
'use client';

import { useEffect, useState } from 'react';

export default function BannerCard() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, Date.now()]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-72 bg-orange-400 rounded-xl shadow-xl overflow-hidden flex items-center justify-center ">
      {/* Imagen o ícono */}
      <img
        src="/cama.png"
        alt="Perrito"
        className="w-200 h-200 "
      />
      <section className="h-96 bg-orange-400 flex items-center justify-between px-10">
  {/* Texto de bienvenida al lado izquierdo */}
  <div>
    <h1 className="text-8xl font-bold text-white">LOVE</h1>
    <p className="text-white mt-4 text-lg">
    "La cama de tus sueños… ¡ahora para tu peludo!
Diseñada con materiales ultra suaves, soporte ortopédico y estilo único, nuestra cama ChillPets es el lugar perfecto para que tu mascota descanse como se merece.
¡Porque su comodidad también es amor!
    </p>
  </div>

  {/* Botón y texto al lado derecho */}
  <div className="flex flex-col items-end">
    <p className="text-white text-lg mb-2"></p>
    <button className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition duration-300">
      Comprar
    </button>
  </div>
</section>


      

    </div>
  );
}
