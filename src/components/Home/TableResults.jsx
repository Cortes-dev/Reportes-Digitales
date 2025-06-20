/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */



import React from "react";
import { motion } from "framer-motion";

const TableResults = () => {
  const userName = "Diego Cortés";
  const tareasPendientes = 5;
  const tareasCompletadas = 12;

  return (
    <main className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Bienvenido, {userName}
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Tareas Pendientes
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">
            {tareasPendientes}
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Tareas Completadas
          </h2>
          <p className="text-4xl font-bold text-green-600 mt-2">
            {tareasCompletadas}
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Total Tareas
          </h2>
          <p className="text-4xl font-bold text-purple-600 mt-2">
            {tareasPendientes + tareasCompletadas}
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default TableResults;
