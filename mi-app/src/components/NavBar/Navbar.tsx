
"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", search);
    // Aquí puedes redirigir o filtrar resultados
  };

  return (
    <nav className="bg-orange-400 text-black px-4">
      <div className="container mx-auto flex items-center justify-between h-20">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo (3).png"
            alt="ChillPets Logo"
            className="h-16 w-auto cursor-pointer"
          />
        </Link>

        {/* MENÚ */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/perros" className=" text-white hover:text-gray-300 transition">
              Perros
            </Link>
          </li>
          <li>
            <Link href="/gato" className="text-white hover:text-gray-300 transition">
              Gatos
            </Link>
          </li>
          <li>
            <Link href="/promociones" className=" text-white hover:text-gray-300 transition">
              Promociones
            </Link>
          </li>
          <li>
            <Link href="/blog" className=" text-white hover:text-gray-300 transition">
              Blog
            </Link>
          </li>
        </ul>

        {/* SEARCH + AUTH */}
        <div className="flex items-center space-x-4">
          {/* SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="px-3 py-1 outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-white px-3 py-1 hover:bg-lime-500"
            >
              Buscar
            </button>
          </form>

          {/* AUTH BUTTONS */}
          <Link
            href="/login"
            className="bg-yellow-400 hover:bg-lime-500 text-white py-2 px-4 rounded transition"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="bg-white border border-white hover:bg-white hover:text-yellow-400 py-2 px-4 rounded transition"
          >
            Registro
          </Link>
        </div>
      </div>
    </nav>
  );
}
