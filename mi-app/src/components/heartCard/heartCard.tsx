
'use client';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import Link from 'next/link';

const eduFont = Edu_VIC_WA_NT_Beginner({
  subsets: ['latin'],
  weight: '400', // también podés usar 500 o 700 si querés más grosor
});


import { useEffect, useState } from 'react';

export default function BannerCard() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, Date.now()]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
  
<div className="relative w-full bg-white rounded-xl shadow-xl flex items-center justify-center px-4 py-8">
  <div className="flex flex-col items-center w-full max-w-3xl">
    
    {/* Imagen 1 */}
    <img
      src="/amor3.png"
      alt="Amor"
      className="w-full max-w-xl object-contain mb-0"
    />

    

    {/* Botón */}
    <Link href="/promociones">
      <button className="mt-2 bg-yellow-400 text-white font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
        Comprar
      </button>
    </Link>
  </div>
</div>



  );
}
