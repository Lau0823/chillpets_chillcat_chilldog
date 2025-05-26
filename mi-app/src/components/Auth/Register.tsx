'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mascota: '',
    raza: '',
    password: '',
    cantidad: '1',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    raza: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { nombre: '', raza: '', password: '' };
    let valid = true;

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 letras.';
      valid = false;
    }

    if (formData.raza.trim().length < 3) {
      newErrors.raza = 'La raza debe tener al menos 3 letras.';
      valid = false;
    }

    if (!/(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'La contraseña debe tener una mayúscula y un número.';
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
      toast.success('¡Formulario enviado con éxito!');
      console.log('Formulario:', formData);

      setFormData({
        nombre: '',
        apellido: '',
        mascota: '',
        raza: '',
        password: '',
        cantidad: '1',
      });
    } else {
      toast.error('Por favor corrige los errores.');
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-violet-400 rounded-lg shadow"

      >
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
        SINGUP
      </h2>
        <label htmlFor="nombre">
          Nombre:
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
        </label>

        <label htmlFor="apellido">
          Apellido:
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="border p-2 w-full rounded-md border-gray-300"
            required
          />
        </label>

        <label htmlFor="mascota">
          Nombre de la mascota:
          <input
            id="mascota"
            type="text"
            name="mascota"
            value={formData.mascota}
            onChange={handleChange}
            className="border p-2 w-full rounded-md border-gray-300"
            required
          />
        </label>

      

        <label htmlFor="password">
          Contraseña:
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </label>

    

        <button
          type="submit"
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-blue-500 cursor-not-allowed'
          } text-white font-semibold py-2 px-4 rounded-lg`}
        >
          Enviar
        </button>
      </form>
    </>
  );
}
