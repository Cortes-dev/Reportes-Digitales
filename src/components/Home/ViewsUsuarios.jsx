/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */






import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const ViewsUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  // 👤 Simulamos el usuario logueado (puedes reemplazarlo con contexto)
  const usuarioLogueado = { id: 1, nombre: "Diego Cortés", correo: "diego@adminmayor.com", rol: "admin_mayor" }; // o "admin_mayor"

  useEffect(() => {
    setUsuarios([
      // 👑 Admin Mayor
      { id: 1, nombre: "Diego Cortés", correo: "diego@adminmayor.com", rol: "admin_mayor", id_admin: null },
  
      // 👤 Admins
      { id: 2, nombre: "Paulina Vázquez", correo: "pauli@admin.com", rol: "admin", id_admin: 1 },
      { id: 3, nombre: "Marta López", correo: "marta@admin.com", rol: "admin", id_admin: 1 },
      { id: 4, nombre: "Victor Fernández", correo: "victor@admin.com", rol: "admin", id_admin: 1 },
  
      // 👥 Usuarios de Paulina
      { id: 5, nombre: "Nancy Gómez", correo: "nancy@user.com", rol: "usuario", id_admin: 2 },
      { id: 6, nombre: "Ester Rivas", correo: "ester@user.com", rol: "usuario", id_admin: 2 },
  
      // 👥 Usuarios de Marta
      { id: 7, nombre: "Alejandra Méndez", correo: "ale@user.com", rol: "usuario", id_admin: 3 },
      { id: 8, nombre: "Adriana Silva", correo: "adriana@user.com", rol: "usuario", id_admin: 3 },
  
      // 👥 Usuarios de Victor
      { id: 9, nombre: "Servando López", correo: "servando@user.com", rol: "usuario", id_admin: 4 },
      { id: 10, nombre: "Manuel Ruiz", correo: "manuel@user.com", rol: "usuario", id_admin: 4 },
  
      // ❌ Usuario huérfano (sin admin válido)
      { id: 11, nombre: "Usuario Sin Admin", correo: "lost@user.com", rol: "usuario", id_admin: 999 },
    ]);
  }, []);
  

  const handleEditar = (id) => {
    toast.info("Función de edición no implementada aún");
  };

  const handleEliminar = (id) => {
    const usuario = usuarios.find((u) => u.id === id);

    toast.warning(`¿Eliminar a ${usuario.nombre}?`, {
      action: {
        label: "Sí, eliminar",
        onClick: () => {
          setUsuarios((prev) => prev.filter((u) => u.id !== id));
          toast.success("Usuario eliminado correctamente");
        },
      },
      cancel: {
        label: "Cancelar",
      },
      duration: 7000,
    });
  };

  // 🔒 Filtro por privilegios
  const usuariosFiltrados = usuarios.filter((user) => {
    if (usuarioLogueado.rol === "admin_mayor") {
      return user.id_admin === 1;
    }
    if (usuarioLogueado.rol === "admin") {
      // Solo puede ver a sus usuarios (no otros admins ni usuarios ajenos)
      return user.id === usuarioLogueado.id || user.id_admin === usuarioLogueado.id;
    }
    return false;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Lista de Usuarios
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border rounded-lg">
          <thead>
            <tr className="text-left bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <th className="p-3">Nombre</th>
              <th className="p-3">Correo</th>
              <th className="p-3">Rol</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((user, i) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3">{user.nombre}</td>
                <td className="p-3">{user.correo}</td>
                <td className="p-3 capitalize">{user.rol}</td>
                <td className="p-3 flex gap-3 justify-center">
                  <button
                    onClick={() => handleEditar(user.id)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Editar"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleEliminar(user.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Eliminar"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
            {usuariosFiltrados.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No tienes usuarios disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ViewsUsuarios;
