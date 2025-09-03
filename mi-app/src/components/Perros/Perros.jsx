// src/components/Cards.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Platos antireflujo",
    price: "$70.000",
    image:
      "https://i.pinimg.com/736x/1f/f4/c2/1ff4c266fa208d1231a9eba6c8aab2f8.jpg",
  },
  {
    id: 2,
    name: "Pechera para perro ",
    price: "$25.000",
    image:
      "https://i.pinimg.com/1200x/e5/71/d3/e571d339109f47312f783fce740a5834.jpg",
  },
  {
    id: 3,
    name: "Juguete mordedor",
    price: "$18.000",
    image:
      "https://i.pinimg.com/736x/e6/d0/9e/e6d09e4d9e6e292e3ad144b73c53d379.jpg",
  },
  {
    id: 4,
    name: "Buso Boss y Real boss",
    price: "$150.000",
    image:
      "https://i.pinimg.com/736x/67/a6/4c/67a64c4aaeb9f096ce25b5bf2740431c.jpg",
  },
  {
    id: 5,
    name: "Camiseta your pets ",
    price: "$70.000",
    image:
      "https://i.pinimg.com/1200x/17/37/2e/17372e71d75e058dcb640c9205578a14.jpg",
  },
  {
    id: 6,
    name: "Pocillo your pets",
    price: "$18.000",
    image:
      "https://i.pinimg.com/736x/d6/61/1a/d6611a7530c3eceb37b37a543f47a98a.jpg",
  },
];

const Perros = () => {
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

export default Perros;