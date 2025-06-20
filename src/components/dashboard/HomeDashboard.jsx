/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardList,
  BarChart2,
  Users,
} from "lucide-react";
import Grafica from "./Grafica";

const HomeDashboard = () => {
  // Simulación de datos
  const resumen = {
    totalReportes: 24,
    tareasPendientes: 8,
    avanceGlobal: 72,
    usuarios: 5,
  };

  return (
    <motion.main
      className="p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-2xl font-bold mb-6">Bienvenido al Panel de Control</h1>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-600 p-4 rounded-xl flex items-center gap-4">
          <FileText size={32} />
          <div>
            <p className="text-sm">Reportes totales</p>
            <h2 className="text-xl font-bold">{resumen.totalReportes}</h2>
          </div>
        </div>

        <div className="bg-yellow-500 p-4 rounded-xl flex items-center gap-4">
          <ClipboardList size={32} />
          <div>
            <p className="text-sm">Tareas pendientes</p>
            <h2 className="text-xl font-bold">{resumen.tareasPendientes}</h2>
          </div>
        </div>

        <div className="bg-green-600 p-4 rounded-xl flex items-center gap-4">
          <BarChart2 size={32} />
          <div>
            <p className="text-sm">% Avance global</p>
            <h2 className="text-xl font-bold">{resumen.avanceGlobal}%</h2>
          </div>
        </div>

        <div className="bg-purple-600 p-4 rounded-xl flex items-center gap-4">
          <Users size={32} />
          <div>
            <p className="text-sm">Usuarios registrados</p>
            <h2 className="text-xl font-bold">{resumen.usuarios}</h2>
          </div>
        </div>
      </div>

      <Grafica />

    </motion.main>
  );
};

export default HomeDashboard;
