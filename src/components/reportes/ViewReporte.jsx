/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */



import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Circle, FileText, User, Image } from "lucide-react";

const ViewReporte = () => {
  // Simulación de datos (normalmente viene por props o fetch)
  const reporte = {
    titulo: "Monitoreo de Sensores Industriales",
    fechaInicio: "2025-06-16",
    fechaFin: "2025-06-30",
    avanceReal: 67,
    avanceProgramado: 100,
    tareas: [
      { texto: "Terminar dashboard de gráficas", hecha: true },
      { texto: "Relacionar sensores con tabla", hecha: true },
      { texto: "Generar código QR", hecha: false }
    ],
    actividadesCriticas:
      "Terminar la parte de la gráfica de monitoreo y relacionar tablas de sensores con el equipo.",
    actividadesRelevantes:
      "Definir alcance, subir cambios a GitHub, reunión de cierre.",
    hallazgos:
      "Los datos no salían bien por un límite en el controlador.",
    causas:
      "Falta de conexión en la parte del QR, pendiente código de imagen.",
    observaciones: "Sólo falta generar QR final.",
    responsable: "Diego Cortés",
    imagenes: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/160"
    ]
  };

  return (
    <motion.main
      className="p-6 max-w-5xl mx-auto text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 text-2xl font-bold mb-4">
        <FileText />
        {reporte.titulo}
      </div>

      {/* Fechas y Avance */}
      <div className="grid md:grid-cols-2 gap-6 mb-4">
        <div className="flex items-center gap-2">
          <Calendar />
          <span>
            <b>Inicio:</b> {reporte.fechaInicio}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar />
          <span>
            <b>Fin:</b> {reporte.fechaFin}
          </span>
        </div>
      </div>

      {/* Avance */}
      <div className="mb-6">
        <label className="block mb-1 text-sm">Avance del Proyecto</label>
        <div className="bg-slate-700 h-4 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-4"
            style={{ width: `${reporte.avanceReal}%` }}
          ></div>
        </div>
        <p className="text-sm text-right mt-1 text-green-300">
          {reporte.avanceReal}% real / {reporte.avanceProgramado}% programado
        </p>
      </div>

      {/* Tareas */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Tareas</h3>
        <ul className="space-y-2">
          {reporte.tareas.map((t, i) => (
            <li key={i} className="flex items-center gap-2">
              {t.hecha ? (
                <CheckCircle className="text-green-500" size={18} />
              ) : (
                <Circle className="text-yellow-400" size={18} />
              )}
              <span className={t.hecha ? "line-through text-gray-400" : ""}>
                {t.texto}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Secciones de texto */}
      {[
        ["Actividades de Ruta Crítica", reporte.actividadesCriticas],
        ["Actividades Relevantes", reporte.actividadesRelevantes],
        ["Hallazgos Encontrados", reporte.hallazgos],
        ["Causa de Atraso / Acciones", reporte.causas],
        ["Observaciones Finales", reporte.observaciones]
      ].map(([titulo, texto], idx) => (
        <div className="mb-5" key={idx}>
          <h3 className="text-lg font-semibold mb-1">{titulo}</h3>
          <p className="bg-slate-800 p-3 rounded">{texto}</p>
        </div>
      ))}

      {/* Responsable */}
      <div className="flex items-center gap-2 mb-6">
        <User />
        <span>
          <b>Responsable:</b> {reporte.responsable}
        </span>
      </div>

      {/* Imágenes */}
      {reporte.imagenes?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Image /> Imágenes del reporte
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reporte.imagenes.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`img-${i}`}
                className="rounded-lg object-cover w-full h-40 border border-slate-600"
              />
            ))}
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default ViewReporte;
