'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Juguete para Gatos',
    image: '/hamaca.png',
    description: 'Pelota con sonido para gatos activos.',
    price: 130.000,
  },
  {
    id: 2,
    name: 'Collar para Perros',
    image: '/cama.png',
    description: 'Collar ajustable y cómodo.',
    price: 120.000,
  },
  {
    id: 3,
    name: 'Comida Premium',
    image: '/cama2.png',
    description: 'Alimento natural y balanceado.',
    price: 120.000,

  },
  {
    id: 1,
    name: 'Juguete para Gatos',
    image: '/taudona.png',
    description: 'Pelota con sonido para gatos activos.',
    price: 130.000,
  },
  {
    id: 2,
    name: 'Collar para Perros',
    image: '/taucama.png',
    description: 'Collar ajustable y cómodo.',
    price: 120.000,
  },
  {
    id: 3,
    name: 'Comida Premium',
    image: '/rectangular.png',
    description: 'Alimento natural y balanceado.',
    price: 120.000,
    
  }, {
    id: 1,
    name: 'Juguete para Gatos',
    image: '/titocama.png',
    description: 'Pelota con sonido para gatos activos.',
    price: 130.000,
  },
  {
    id: 2,
    name: 'Collar para Perros',
    image: '/1.png',
    description: 'Collar ajustable y cómodo.',
    price: 120.000,
  },
  {
    id: 3,
    name: 'Comida Premium',
    image: '/2.png',
    description: 'Alimento natural y balanceado.',
    price: 120.000,
    
  },
];

export default function Producto() {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-violet-600 mb-10 uppercase">
        Productos 
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="w-full h-64 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-violet-700">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <span className="text-orange-500 font-bold text-lg">${product.price.toFixed(2)}</span>
              <Link
                href={`/productos/${product.id}`}
                className="mt-2 text-center bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
