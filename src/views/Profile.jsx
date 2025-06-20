/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */





import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Shield } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    nombre: "Diego Cortés",
    correo: "diego@adminmayor.com",
    rol: "admin_mayor",
    contraseña: "",
    confirmar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (user.contraseña && user.contraseña !== user.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí iría tu lógica para actualizar
    console.log("Actualizando perfil:", user);
  };

  return (
    <motion.main
      className="p-6 max-w-3xl mx-auto text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User /> Mi Perfil
      </h2>

      {/* Perfil visible */}
      <div className="bg-slate-800 p-6 rounded-xl shadow mb-6 flex items-center gap-6">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.nombre}`}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.nombre}</h3>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <Mail size={16} /> {user.correo}
          </p>
          <p className="text-sm text-blue-400 mt-1 flex items-center gap-2">
            <Shield size={16} /> Rol: {user.rol}
          </p>
        </div>
      </div>

      {/* Formulario para editar */}
      <form
        onSubmit={handleUpdate}
        className="bg-[#1e293b] p-6 rounded-xl shadow space-y-5"
      >
        <div>
          <label className="text-sm">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          />
        </div>

        <div>
          <label className="text-sm">Contraseña nueva</label>
          <input
            type="password"
            name="contraseña"
            value={user.contraseña}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          />
        </div>

        <div>
          <label className="text-sm">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmar"
            value={user.confirmar}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold w-full"
        >
          Actualizar Perfil
        </button>
      </form>
    </motion.main>
  );
};

export default Profile;
