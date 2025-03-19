// app/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src="/banner(2).png"
        alt="PetShop Banner"
        className="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-4 sm:px-10">
        <div className="text-center sm:text-left text-white">
          {/* Texto responsive */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 p-4 bg-black/50 rounded-lg">
            ¡Tu peludito es nuestra prioridad!
          </p>
          
          {/* Botón responsive */}
          <a
            href="/tienda"
            className="bg-black text-white py-3 px-5 rounded-lg text-lg sm:text-xl font-marker transition duration-300 hover:bg-gray-800"
          >
            Ir a la tienda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
