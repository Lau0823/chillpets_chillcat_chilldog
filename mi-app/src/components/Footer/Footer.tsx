"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Gracias por suscribirte con: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-100 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* LOGO y descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ChillPets</h2>
          <p className="text-sm">
            Consentimos a tus peluditos con amor, productos y estilo. 🐶🐱
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Navegación</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/perros" className="hover:underline">Perros</Link></li>
            <li><Link href="/gato" className="hover:underline">Gatos</Link></li>
            <li><Link href="/promociones" className="hover:underline">Promociones</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-sm mb-2">Recibe ofertas y novedades exclusivas:</p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="px-3 py-2 rounded text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 transition rounded py-2 text-sm font-semibold"
            >
              Suscribirme
            </button>
          </form>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition"
            >
              <img src="/facebook.svg" alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition"
            >
              <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition"
            >
              <img src="/tiktok.svg" alt="TikTok" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center text-xs text-white mt-10 border-t border-white pt-4">
        &copy; {new Date().getFullYear()} ChillPets. Todos los derechos reservados.
      </div>
    </footer>
  );
}
