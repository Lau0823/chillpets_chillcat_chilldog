"use client";

import Image from "next/image";

export default function BackgroundPets() {
  return (
    <div className=" w-screen relative w-full h-[80vh] overflow-hidden ">
      <Image
        src="https://i.pinimg.com/1200x/54/67/05/5467057d1c63146327d325ac086dd2f3.jpg"
        alt="Hero ChillPets"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay con contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Bienvenido a ChillPets
        </h1>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg">
          Comprar
        </button>
      </div>
    </div>
  );
}
