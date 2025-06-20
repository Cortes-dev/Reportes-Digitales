/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Reportes = () => {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    // Simulación de datos. Aquí puedes hacer fetch a tu API.
    setReportes([
      {
        id: 1,
        titulo: "Reporte de avance - Turno A",
        fecha_limite: "2025-06-20",
        estado: "pendiente",
      },
      {
        id: 2,
        titulo: "Revisión de sensores",
        fecha_limite: "2025-06-18",
        estado: "En proceso",
      },
      {
        id: 3,
        titulo: "Reporte semanal - Producción",
        fecha_limite: "2025-06-17",
        estado: "Terminado",
      },
    ]);
  }, []);

  const iconoEstado = (estado) => {
    switch (estado) {
      case "pendiente":
        return <Clock className="text-yellow-500" />;
      case "En proceso":
        return <CheckCircle className="text-blue-500" />;
      case "Terminado":
        return <CheckCircle className="text-green-500" />;
      default:
        return <AlertCircle className="text-red-500" />;
    }
  };

  return (
    <motion.main
      className="p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText /> Reportes Pendientes
        </h2>
        <Link to="/reportes/nuevo">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm cursor-pointer">
            Nuevo Reporte
          </button>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          {/* Filtro de reportes y busqueda */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar reporte"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
              Buscar
            </button>
          </div>
        </h2>
      </div>

      <div className="grid gap-4">
        {reportes.map((reporte) => (
          <motion.div
            key={reporte.id}
            className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="text-lg font-semibold">{reporte.titulo}</h3>
              <p className="text-sm text-gray-400">
                Fecha límite: {reporte.fecha_limite}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {iconoEstado(reporte.estado)}
              <span className="capitalize text-sm">{reporte.estado}</span>
              <Link to={`/reportes/${reporte.id}`}>
                <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm cursor-pointer">
                  Ver
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Reportes;
