/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  User,
  Moon,
  Sun,
  LogOut,
  LayoutDashboard,
  UserRoundPlus,
  Users,
  ChartBar,
} from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Navbar = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const rol = "admin_mayor";

  const navItems = [
    (rol === "admin" || rol === "user") && { to: "/", icon: <Home size={20} />, label: "Home" },
    ,
    rol === "admin_mayor" && {
      to: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    rol === "admin_mayor" && {
      to: "/grafica",
      icon: <ChartBar size={20} />,
      label: "Grafica",
    },
    { to: "/reportes", icon: <FileText size={20} />, label: "Reportes" },
    // { to: "/tareas", icon: <ClipboardList size={20} />, label: "Tareas" },
    rol === "admin_mayor" && {
      to: "/nuevo_admin",
      icon: <UserRoundPlus size={20} />,
      label: "Nuevo Admin",
    },    
    (rol === "admin" || rol === "admin_mayor") && {
      to: "/nuevo_user",
      icon: <UserRoundPlus size={20} />,
      label: "Nuevo Usuario",
    },
    (rol === "admin" || rol === "admin_mayor") && {
      to: "/usuarios",
      icon: <Users size={20} />,
      label: "Usuarios",
    },
    { to: "/perfil", icon: <User size={20} />, label: "Perfil" },
  ].filter(Boolean);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col min-h-screen fixed top-0 left-0 z-50"
      >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400"
      >
        CODEGO
      </motion.div>

      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item, i) => (
          <motion.div key={item.to} custom={i} variants={navItemVariant} initial="hidden" animate="visible">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-blue-100 dark:hover:bg-blue-900",
                  isActive && "bg-blue-100 dark:bg-blue-900 font-semibold"
                )
              }
            >
              {item.icon} {item.label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex flex-col gap-4"
      >
        <button
          onClick={() => setDark(!dark)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          onClick={() => console.log("Cerrar sesión")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      </motion.div>
    </motion.aside>
  );
};

export default Navbar;
