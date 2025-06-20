/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserRoundPlus } from "lucide-react";

const NewUser = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: "",
    rol: "user", // puedes cambiar a "usuario" si quieres default diferente
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contraseña !== formData.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí harías un POST a tu API
    console.log("Nuevo usuario:", formData);
  };

  return (
    <motion.main
      className="p-6 max-w-lg mx-auto text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <UserRoundPlus /> Registrar Nuevo Usuario
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-6 rounded-xl shadow space-y-5"
      >
        <div>
          <label className="text-sm">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          />
        </div>

        <div>
          <label className="text-sm">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
            />
          </div>
          <div>
            <label className="text-sm">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmar"
              value={formData.confirmar}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
        >
          Guardar Usuario
        </button>
      </form>
    </motion.main>
  );
};

export default NewUser;
