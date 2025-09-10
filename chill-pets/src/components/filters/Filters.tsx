// src/components/Filters.tsx
"use client";
import React from "react";
import {
  FaDog,
  FaCat,
  FaBone,
  FaTshirt,
  FaTag,
  FaPaw,
} from "react-icons/fa";

export default function Filters() {
  return (
    <div className="space-y-3 p-6 ">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Categorías</h2>

      <ul className="space-y-3 text-gray-600 text-sm">
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaDog className="text-xl text-pink-400" />
          Perros
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaCat className="text-xl text-pink-400" />
          Gatos
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaBone className="text-xl text-pink-400" />
          Juguetes
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaTshirt className="text-xl text-pink-400" />
          Ropa & Accesorios
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaTag className="text-xl text-pink-400" />
          Promociones
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-500 transition-colors">
          <FaPaw className="text-xl text-pink-400" />
          Todos los productos
        </li>
      </ul>
    </div>
  );
}
