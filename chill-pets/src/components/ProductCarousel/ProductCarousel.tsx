"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "T-shirt Dog",
    color: "Crema",
    talla: "XS, M, L, XL",
    image:
      "https://i.pinimg.com/1200x/3e/7b/d8/3e7bd81a57f95458cc09faff35d3ce0c.jpg",
  },
  {
    id: 2,
    name: "T-shirt Cat",
    color: "Negro",
    talla: "S, M, L, XL",
    image:
      "https://i.pinimg.com/1200x/e5/4c/ec/e54cecdcc5439625d43c1244a2628eb4.jpg",
  },
  {
    id: 3,
    name: "T-shirt Paw Lovers",
    color: "Blanco",
    talla: "XS, S, M, L",
    image:
      "https://i.pinimg.com/1200x/8e/30/af/8e30af96aafcc10a75f5e516f317cab3.jpg",
  },
];

const ProductCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full rounded-3xl custom-swiper"
        breakpoints={{
          768: { slidesPerView: 3 }, // en pantallas medianas o más grandes se muestran 3
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-contain mb-4 rounded-full border-4 "
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">Color: {product.color}</p>
              <p className="text-sm text-gray-600">Tallas: {product.talla}</p>
              <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition">
                Comprar ahora
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
