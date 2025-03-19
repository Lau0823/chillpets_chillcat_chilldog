// app/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-58">
      <img
        src="/banner(2).png" // Aquí coloca la ruta de tu imagen
        alt="PetShop Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start px-6">
        <div className="text-left text-white">
          {/* Párrafo encima del botón */}
          <p className="text-4xl mb-4 p-6 ">
          ¡Tu peludito es 
          nuestra prioridad!
          </p>
          
          {/* Botón más cerca del centro pero a la izquierda */}
          <a
            href="/tienda"  // Aquí ajustamos el enlace a la ruta de la tienda
            className="bg-black text-white py-4 px-6 rounded-lg text-xl font-marker transition-colors duration-300 hover:bg-black hover:text-white mt-12"
          >
            Ir a la tienda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
