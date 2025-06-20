/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */





import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FilePlus, ImagePlus, Trash2, Calendar, Plus } from "lucide-react";
import { toast } from "sonner";

const usuarios = [
  { id: 10, nombre: "Paulina Vázquez" },
  { id: 11, nombre: "Adriana Méndez" },
  { id: 12, nombre: "Nancy Pérez" },
];

const CreateReportes = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    fechaInicio: "",
    fechaFin: "",
    actividadesCriticas: "",
    actividadesRelevantes: "",
    hallazgos: "",
    causas: "",
    responsable: "",
    observaciones: "",
  });

  const [tareas, setTareas] = useState([{ id: 1, texto: "", hecha: false }]);
  const [imagenes, setImagenes] = useState([]);
  const inputFileRef = useRef(null);

  const calcularAvance = () => {
    const hechas = tareas.filter((t) => t.hecha).length;
    const total = tareas.length || 1;
    return Math.round((hechas / total) * 100);
  };

  const agregarTarea = () => {
    setTareas([...tareas, { id: Date.now(), texto: "", hecha: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
    setTimeout(() => {
      setFormData({ ...formData, avanceReal: calcularAvance() });
    }, 0);
  };

  const handleImagenes = (files) => {
    const archivos = [...files].map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImagenes((prev) => [...prev, ...archivos]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImagenes(e.dataTransfer.files);
  };

  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    const archivos = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        archivos.push(items[i].getAsFile());
      }
    }
    handleImagenes(archivos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      tareas,
      imagenes: imagenes.map((i) => i.file),
    });
  };

  // eliminar imagen
  const eliminarImagen = (index) => {
    setImagenes(imagenes.filter((_, i) => i !== index));
    toast.success("Imagen eliminada correctamente");
  };

  return (
    <motion.main
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onPaste={handlePaste}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FilePlus /> Crear Reporte de Avance
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-6 rounded-xl shadow space-y-5"
      >
        {/* TÍTULO */}
        <div>
          <label className="text-sm">Título del Proyecto</label>
          <input
            name="titulo"
            value={formData.titulo}
            onChange={(e) =>
              setFormData({ ...formData, titulo: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
            required
          />
        </div>

        {/* FECHAS */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Fecha Inicio */}
          <div className="relative">
            <label className="text-sm block mb-1">Fecha de Inicio</label>
            <div className="relative">
              <DatePicker
                selected={
                  formData.fechaInicio ? new Date(formData.fechaInicio) : null
                }
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    fechaInicio: date.toISOString().split("T")[0],
                  })
                }
                dateFormat="yyyy-MM-dd"
                className="w-full px-10 py-2 rounded bg-slate-800 border border-slate-600 text-white"
              />
              <Calendar
                className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Fecha Fin */}
          <div className="relative">
            <label className="text-sm block mb-1">Fecha Final</label>
            <div className="relative">
              <DatePicker
                selected={
                  formData.fechaFin ? new Date(formData.fechaFin) : null
                }
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    fechaFin: date.toISOString().split("T")[0],
                  })
                }
                dateFormat="yyyy-MM-dd"
                className="w-full px-10 py-2 rounded bg-slate-800 border border-slate-600 text-white"
              />
              <Calendar
                className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>
        </div>

        {/* TAREAS */}
        <div>
          <label className="text-sm">Tareas del Proyecto</label>
          <div className="space-y-2 mt-2">
            {tareas.map((t, index) => (
              <div key={t.id} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={t.texto}
                  onChange={(e) =>
                    handleTareaChange(index, "texto", e.target.value)
                  }
                  placeholder={`Tarea #${index + 1}`}
                  className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-600"
                />
                <button
                  type="button"
                  onClick={() => eliminarTarea(t.id)}
                  className="text-red-500 hover:text-red-600 transition-all duration-300 cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={agregarTarea}
              className="text-sm flex items-center gap-2 border border-blue-400 p-2 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Plus size={16} /> Agregar otra tarea
            </button>
          </div>
        </div>

        {/* CAMPOS DE TEXTO */}
        {[
          { name: "actividadesCriticas", label: "Actividades de Ruta Crítica" },
          { name: "actividadesRelevantes", label: "Actividades Relevantes" },
          { name: "hallazgos", label: "Hallazgos Encontrados" },
          { name: "causas", label: "Causa de Atraso / Acciones" },
        ].map((campo) => (
          <div key={campo.name}>
            <label className="text-sm">{campo.label}</label>
            <textarea
              name={campo.name}
              value={formData[campo.name]}
              onChange={(e) =>
                setFormData({ ...formData, [campo.name]: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
              rows={3}
            />
          </div>
        ))}

        {/* RESPONSABLE */}
        <div>
          <label className="text-sm">Responsable</label>
          <select
            name="responsable"
            value={formData.responsable}
            onChange={(e) =>
              setFormData({ ...formData, responsable: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
          >
            <option value="">Selecciona un usuario</option>
            {usuarios.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* OBSERVACIONES + IMÁGENES */}
        <div>
          <label className="text-sm">Observaciones Finales</label>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={(e) =>
              setFormData({ ...formData, observaciones: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 rounded bg-slate-800 border border-slate-600"
            rows={3}
          />
        </div>

        <div className="border border-dashed border-blue-400 p-4 rounded-xl bg-slate-800 relative">
          <input
            ref={inputFileRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImagenes(e.target.files)}
          />
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-blue-300">
              Arrastra, pega o{" "}
              <button
                type="button"
                className="underline"
                onClick={() => inputFileRef.current.click()}
              >
                sube imágenes
              </button>
            </p>
            <ImagePlus size={20} />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            {imagenes.map((img, i) => (
              <div key={i} className="relative">
                {/* tachita para eliminar imagen */}
                <button
                  type="button"
                  className="absolute top-1 right-1 text-red-500"
                  onClick={() => eliminarImagen(i)}
                >
                  <Trash2 size={16} />
                </button>
                <img
                  src={img.url}
                  alt={`img-${i}`}
                  className="rounded object-cover w-full h-24"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white font-semibold"
        >
          Guardar Reporte
        </button>
      </form>
    </motion.main>
  );
};

export default CreateReportes;
