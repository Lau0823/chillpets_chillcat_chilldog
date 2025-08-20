// src/components/Cards.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Cama para perro",
    price: "$120.000",
    image:
      "https://i.pinimg.com/1200x/a6/b0/73/a6b073dbfb66d40ddf0454dff7da93bf.jpg",
  },
  {
    id: 2,
    name: "Collar para gato",
    price: "$25.000",
    image:
      "https://i.pinimg.com/736x/fe/74/40/fe7440a49c8c2815a885f853402d256c.jpg",
  },
  {
    id: 3,
    name: "Juguete mordedor",
    price: "$18.000",
    image:
      "https://i.pinimg.com/736x/f9/f1/ca/f9f1ca2abbfb5a103b710c31fdc4ff6d.jpg",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className=" m-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-black">
              {product.name}
            </h3>
            <p className="text-pink-300 font-bold">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
