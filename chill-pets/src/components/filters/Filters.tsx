"use client";
import React, { useState } from "react";
import {
  FaDog,
  FaCat,
  FaBone,
  FaTshirt,
  FaTag,
  FaPaw,
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  { label: "Perros", icon: FaDog },
  { label: "Gatos", icon: FaCat },
  { label: "Juguetes", icon: FaBone },
  { label: "Ropa & Accesorios", icon: FaTshirt },
  { label: "Promociones", icon: FaTag },
  { label: "Todos los productos", icon: FaPaw },
];

export default function Filters() {
  const [active, setActive] = useState<string>("");

  return (
    <div className="space-y-3 p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Categorías</h2>

      <ul className="space-y-3 text-gray-600 text-sm">
        {categories.map(({ label, icon: Icon }, index) => (
          <motion.li
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all ${
              active === label
                ? "bg-pink-100 text-pink-600 font-semibold"
                : "hover:text-pink-500 hover:bg-gray-100"
            }`}
            // Animación al cargar
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}

            // Bounce al hacer clic
            whileTap={{ scale: 0.9 }}
          >
            <Icon
              className={`text-xl ${
                active === label ? "text-pink-500" : "text-pink-400"
              }`}
            />
            {label}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
