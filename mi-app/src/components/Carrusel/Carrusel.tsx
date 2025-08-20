"use client"; // Si usas App Router en Next.js

import React from "react";
import Slider from "react-slick";



const images = [
  "/perrito.jpg",
  "/gatico1.jpg",
  "/perrito2.jpg",
   "/gatico 3.jpg",
  "/perrito3.jpg",
   "/gatico 4.jpg",
  "/perrito4.jpg",
  "/gatico 5.jpg",
  "/perrito 5.jpg",
  
  
];

const Carousel = () => {
  const settings = {
    dots: true, // Muestra los puntitos de navegación
    infinite: true, // Ciclo infinito de imágenes
    speed: 500, // Velocidad del cambio
    slidesToShow: 3, // Cuántas imágenes se ven al mismo tiempo
    slidesToScroll: 1,
    autoplay: true, // Auto reproducción
    autoplaySpeed: 3000, // Cada 3 segundos cambia la imagen
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
       
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
