"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", search);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="w-full flex items-center justify-between h-20 px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo (3).png"
            alt="ChillPets Logo"
            className="h-16 w-auto cursor-pointer"
          />
        </Link>

        {/* MENÚ */}
        <ul className="flex space-x-6 text-lg font-medium text-black">
          <li>
            <Link href="/perros" className="hover:text-yellow-300 transition">
              Perros
            </Link>
          </li>
          <li>
            <Link href="/gato" className="hover:text-yellow-300 transition">
              Gatos
            </Link>
          </li>
          <li>
            <Link
              href="/promociones"
              className="hover:text-yellow-300 transition"
            >
              Promociones
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-300 transition">
              Blog
            </Link>
          </li>
        </ul>

        {/* SEARCH + AUTH */}
        <div className="flex items-center space-x-4">
          {/* SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-white rounded-lg overflow-hidden"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="px-3 py-1 outline-none text-black"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-600"
            >
              Buscar
            </button>
          </form>

          {/* AUTH BUTTONS */}
          <Link
            href="/login"
            className="bg-white/20 text-white py-2 px-4 rounded hover:bg-white/40 transition"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="bg-white/20 text-white py-2 px-4 rounded hover:bg-white/40 transition"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </nav>
  );
}
