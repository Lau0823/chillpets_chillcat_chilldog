"use client";
import React from "react";
import { PawPrint } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    name: "Cama para perro",
    price: 120000,
    image:
      "https://i.pinimg.com/1200x/a6/b0/73/a6b073dbfb66d40ddf0454dff7da93bf.jpg",
    rating: 4,
    label: "New",
  },
 

];

const CardXl = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Modal */}
      <div className="flex w-[800px] h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Sección izquierda con imagen */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center text-white">
          {/* Imagen de internet como overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/8c/0b/48/8c0b48b7fa77ce470b86b5ae806540eb.jpg')",
            }}
          ></div>

          {/* Oscurecer un poco para contraste */}
          <div className="absolute inset-0 bg-black bg-opacity-40 "></div>

          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-pink-500"> </h2>
            <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-100">
              
            </button>
          </div>
        </div>

        {/* Sección derecha con el formulario */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6"></h2>
          
              {/* Email */}
              

              

            {/* Links */}
            <div className="text-center mt-4 text-sm text-pink-500">
              <a href="register" className="hover:underline">
                
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardXl;
