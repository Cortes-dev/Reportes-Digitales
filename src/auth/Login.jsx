/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { ...formData, rememberMe });
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gray-950/90 shadow-2xl rounded-3xl p-8 w-full max-w-md backdrop-blur-md border border-gray-800"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo opcional */}
        {/* <img src="/logo-codego.svg" alt="Codego" className="w-12 h-12 mx-auto mb-4" /> */}
        <h1 className="text-4xl font-extrabold text-center mb-8">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full pl-12 pr-4 pt-5 pb-2 bg-gray-800 text-white rounded-xl border border-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Correo electrónico"
            />
            <label
              htmlFor="email"
              className="absolute left-12 top-3 text-gray-400 text-sm transition-all duration-200 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-500 
                peer-focus:top-1 
                peer-focus:text-sm 
                peer-focus:text-blue-400"
            >
              Correo electrónico
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="peer w-full pl-12 pr-10 pt-5 pb-2 bg-gray-800 text-white rounded-xl border border-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
            <label
              htmlFor="password"
              className="absolute left-12 top-3 text-gray-400 text-sm transition-all duration-200 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-500 
                peer-focus:top-1 
                peer-focus:text-sm 
                peer-focus:text-blue-400"
            >
              Contraseña
            </label>

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-blue-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Recordarme + enlace */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="form-checkbox text-blue-600 rounded"
              />
              Recuérdame
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold shadow-md"
          >
            <LogIn size={20} />
            Entrar
          </motion.button>
        </form>
      </motion.div>
    </motion.main>
  );
};

export default Login;
