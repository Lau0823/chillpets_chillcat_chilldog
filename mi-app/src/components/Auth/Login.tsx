'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mascota: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </label>

      <label>
        Mascota:
        <input
          type="text"
          name="mascota"
          value={formData.mascota}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}


