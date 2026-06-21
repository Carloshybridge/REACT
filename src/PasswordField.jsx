import { useState } from "react";

export default function PasswordField() {
  // 1. Creamos un estado booleano para controlar la visibilidad (false por defecto)
  const [showPassword, setShowPassword] = useState(false);

  // 2. Función manejadora para alternar el estado
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md m-10">
      <div className="relative">
        <input
          // 3. Cambia dinámicamente el tipo de 'password' a 'text'
          type={showPassword ? "text" : "password"}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200"
          placeholder="Contraseña"
        />
        <button
          type="button"
          // 4. Agregamos el evento click para disparar la función
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          {/* 5. El texto del botón cambia dependiendo del estado actual */}
          {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        </button>
      </div>
    </div>
  );
}