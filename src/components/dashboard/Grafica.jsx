/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */



import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafica = () => {
  // Datos simulados de suscripciones por mes
  const labels = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Suscripciones",
        data: [4, 7, 5, 10, 15, 20, 12, 18, 16, 22, 25, 30],
        backgroundColor: "rgba(59, 130, 246, 0.7)", // azul-500
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // texto blanco
        },
      },
      title: {
        display: true,
        text: "Suscripciones por Mes",
        color: "#ffffff",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#cbd5e1" }, // slate-300
        grid: { color: "#334155" }, // slate-700
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#cbd5e1" },
        grid: { color: "#334155" },
      },
    },
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafica;
