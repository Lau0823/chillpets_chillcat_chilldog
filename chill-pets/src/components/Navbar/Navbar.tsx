"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react"; 
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", search);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="w-full flex items-center justify-between h-20 px-8">
        
        {/* LOGO + MENÚ */}
        <div className="flex items-center space-x-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo (3).png"
              alt="ChillPets Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </Link>

          {/* MENÚ pegado al logo con subrayado animado */}
          <ul className="flex space-x-6 text-lg font-medium text-black">
            {[
              { href: "/perros", label: "Perros" },
              { href: "/gato", label: "Gatos" },
              { href: "/promociones", label: "Promociones" },
              { href: "/blog", label: "Blog" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group hover:pink-500 transition"
                >
                  {item.label}
                  {/* Subrayado animado */}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SEARCH + ICONS */}
        <div className="flex items-center space-x-6">
          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-white/20 rounded-full px-3 py-1"
          >
            <FaSearch className="text-white mr-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder=""
              className="bg-transparent placeholder-white text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-600 rounded-xl"
            >
              Buscar
            </button>
          </form>

          {/* CARRITO */}
          <Link
            href="/cart"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
          >
            <ShoppingCart size={18} />
          </Link>

          {/* LOGIN */}
          <Link
            href="/login"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
          >
            <LogIn size={18} />
          </Link>

          {/* REGISTRO */}
          <Link
            href="/register"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
          >
            <UserPlus size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
