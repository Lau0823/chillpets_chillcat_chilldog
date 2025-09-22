"use client";

import { useState } from "react";

export default function RegisterModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Registering:", { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-4">
      {/* Modal */}
      <div className="flex w-[900px] h-[550px] rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Sección izquierda con imagen */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/35/47/71/35477178f1ded1aca4d01ae5ca1c5026.jpg')", // 👉 Cambia esta URL
            }}
          ></div>
          {/* Overlay oscuro */}
          <div className="absolute inset-0 "></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4"></h2>
            <p className="mb-6">Amamos las mascotas </p>
          </div>
        </div>

        {/* Sección derecha con formulario */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Crear cuenta 
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              {/* Confirm Password */}
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              {/* Botón */}
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
              >
                Registro
              </button>
            </form>

            {/* Links */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Ya tienes una cuenta?{" "}
              <a href="/login" className="text-pink-500 hover:underline">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
