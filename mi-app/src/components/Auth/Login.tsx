'use client';

import { useState, useEffect } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mascota: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    mascota: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { nombre: '', apellido: '', mascota: '' };
    let valid = true;

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 letras.';
      valid = false;
    }

    if (formData.apellido.trim().length < 3) {
      newErrors.apellido = 'El apellido debe tener al menos 3 letras.';
      valid = false;
    }

    if (formData.mascota.trim().length < 3) {
      newErrors.mascota = 'El nombre de la mascota debe tener al menos 3 letras.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formulario enviado:', formData);
    } else {
      alert('Por favor corrige los errores antes de enviar.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-violet-400 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-white text-center">
        LOGIN
      </h2>

      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`border p-2 w-full rounded-md ${
            errors.nombre ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
        )}
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className={`border p-2 w-full rounded-md ${
            errors.apellido ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.apellido && (
          <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>
        )}
      </label>

      <label>
        Mascota:
        <input
          type="text"
          name="mascota"
          value={formData.mascota}
          onChange={handleChange}
          className={`border p-2 w-full rounded-md ${
            errors.mascota ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.mascota && (
          <p className="text-red-500 text-sm mt-1">{errors.mascota}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`p-2 rounded-lg text-white font-semibold ${
          isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Enviar
      </button>
    </form>
  );
}



