'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Hamaca para Gatos',
    image: '/hamaca.png',
    description: 'Pelota con sonido para gatos activos.',
    price: "$150.000",
  },
  {
    id: 2,
    name: 'Cama para mascota',
    image: '/cama.png',
    description: 'Collar ajustable y cómodo.',
    price: "120.000",
  },
  {
    id: 3,
    name: 'Cama puntitos',
    image: '/cama2.png',
    description: 'Alimento natural y balanceado.',
    price: "120.000",

  },
  {
    id: 4,
    name: 'Collar isabelino',
    image: '/taudona.png',
    description: 'Pelota con sonido para gatos activos.',
    price: "130.000",
  },
  {
    id: 5,
    name: 'Cama doble faz',
    image: '/taucama.png',
    description: 'Collar ajustable y cómodo.',
    price: "120.000",
  },
  {
    id: 6,
    name: 'Cama box',
    image: '/rectangular.png',
    description: 'Alimento natural y balanceado.',
    price: "120.000",
    
  }, {
    id: 7,
    name: 'Cama para Gatos',
    image: '/titocama.png',
    description: 'Pelota con sonido para gatos activos.',
    price: "130.000",
  },
  {
    id: 8,
    name: 'Rascdor para gato',
    image: '/1.png',
    description: 'Collar ajustable y cómodo.',
    price: "$150.000",
  },
  {
    id: 9,
    name: 'Mordedor perro',
    image: '/mordedor perro.jpg',
    description: 'Alimento natural y balanceado.',
    price: "120.000",
    
  },
];

export default function Producto() {
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

 