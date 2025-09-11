"use client";

import { useState } from "react";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Modal */}
      <div className="flex w-[800px] h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Sección izquierda con imagen */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center text-white">
          {/* Imagen de internet como overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/8c/0b/48/8c0b48b7fa77ce470b86b5ae806540eb.jpg')",
            }}
          ></div>

          {/* Oscurecer un poco para contraste */}
          <div className="absolute inset-0 bg-black bg-opacity-40 "></div>

          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">Bienvenido a CHILLPETS </h2>
            <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-100">
              Registro
            </button>
          </div>
        </div>

        {/* Sección derecha con el formulario */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Hola petlover!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Nombre o correo "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 rounded border-gray-300"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                 Recordarme
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-pink-500 transition"
              >
                ENTRAR
              </button>
            </form>

            {/* Links */}
            <div className="text-center mt-4 text-sm text-pink-500">
              <a href="register" className="hover:underline">
                Registro
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
