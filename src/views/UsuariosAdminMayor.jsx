/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserCog } from "lucide-react";

const UsuariosAdminMayor = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Simulación de usuario logueado (reemplazar con tu auth real)
  const usuarioLogueado = {
    id: 100,
    nombre: "Diego Cortés",
    rol: "admin_mayor", // cambiar a "admin" para probar otro flujo
  };

  useEffect(() => {
    // Simulación de todos los usuarios
    const datos = [
      { id: 1, nombre: "Paulina Vázquez", correo: "pauli@admin.com", rol: "admin", id_admin: null },
      { id: 2, nombre: "Adriana Pérez", correo: "adri@admin.com", rol: "admin", id_admin: null },
      { id: 3, nombre: "Nancy Torres", correo: "nancy@usuario.com", rol: "usuario", id_admin: 1 },
      { id: 4, nombre: "Ale Vázquez", correo: "ale@usuario.com", rol: "usuario", id_admin: 1 },
      { id: 5, nombre: "Manuel López", correo: "manuel@usuario.com", rol: "usuario", id_admin: 2 },
    ];

    let filtrados = [];

    if (usuarioLogueado.rol === "admin_mayor") {
      filtrados = datos.filter((u) => u.rol === "admin");
    } else if (usuarioLogueado.rol === "admin") {
      filtrados = datos.filter((u) => u.rol === "usuario" && u.id_admin === usuarioLogueado.id);
    }

    setUsuarios(filtrados);
  }, []);

  return (
    <motion.main
      className="p-6 text-white max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <UserCog />
        {usuarioLogueado.rol === "admin_mayor" ? "Administradores" : "Mis Usuarios"}
      </h2>

      {usuarios.length === 0 ? (
        <p className="text-gray-400">No hay usuarios disponibles.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {usuarios.map((usuario) => (
            <div
              key={usuario.id}
              className="bg-slate-800 p-4 rounded-lg border border-slate-600 shadow"
            >
              <p className="font-semibold text-lg">{usuario.nombre}</p>
              <p className="text-sm text-gray-400">{usuario.correo}</p>
              <p className="text-xs mt-1 text-blue-400">{usuario.rol.toUpperCase()}</p>
            </div>
          ))}
        </div>
      )}
    </motion.main>
  );
};

export default UsuariosAdminMayor;
