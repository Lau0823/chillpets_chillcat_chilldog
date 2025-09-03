// src/components/Cards.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Platos antireflujo",
    price: "$70.000",
    image:
      "https://i.pinimg.com/736x/2a/a5/63/2aa563d722a173dbefd3c62d07ef35cf.jpg",
  },
  {
    id: 2,
    name: "Pocillo Your cat ",
    price: "$25.000",
    image:
      "https://i.pinimg.com/1200x/aa/c0/3a/aac03ad3e669d25a267b1506b57019c2.jpg",
  },
  {
    id: 3,
    name: "Rascador para gato",
    price: "$18.000",
    image:
      "https://i.pinimg.com/1200x/bd/47/a4/bd47a4a794bd71bde265f12876920d44.jpg",
  },
  {
    id: 4,
    name: "Cepillo para gato",
    price: "$50.000",
    image:
      "https://i.pinimg.com/736x/88/90/13/889013a1f9af4fe290c518d9f043512b.jpg",
  },
  {
    id: 5,
    name: "Churru ",
    price: "$14.000",
    image:
      "https://i.pinimg.com/736x/de/ea/67/deea6761b91fe2a9e2256a0069643404.jpg",
  },
  {
    id: 6,
    name: "Camiseta your pets",
    price: "$18.000",
    image:
      "https://i.pinimg.com/736x/27/ea/30/27ea308d99874aded1008178d67746fb.jpg",
  },
];

const Gatos = () => {
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

export default Gatos;