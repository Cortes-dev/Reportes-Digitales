/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */





import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./views/Home";
import Reportes from "./components/reportes/Reportes";
import Load from "./views/Load";
import MainLayout from "./layouts/MainLayout"; // 👈 Asegúrate de tener este archivo
import Register from "./auth/Register";
import Profile from "./views/Profile"
import RegistroAdmin from "./views/RegistroAdmin"
import Dashboard from "./views/Dashboard"
import Tareas from "./views/Tareas"
import NewAdmin from "./views/NewAdmin"
import NewUser from "./views/NewUser"
import Usuarios from "./views/UsuariosAdminMayor"
import ViewReporte from "./components/reportes/ViewReporte"
import CreateRepotes from "./components/reportes/CreateRepotes"
import Grafica from "./components/dashboard/Grafica"


const App = () => {
  const isAuthenticated = true; // Aquí pondrás la lógica real luego

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/load" element={<Load />} />

      {isAuthenticated ? (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="reportes/:id" element={<ViewReporte />} />
          <Route path="reportes/nuevo" element={<CreateRepotes />} />
          <Route path="register" element={<Register />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="tareas" element={<Tareas />} />
          <Route path="nuevo_admin" element={<NewAdmin />} />
          <Route path="nuevo_user" element={<NewUser />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="grafica" element={<Grafica />} />          
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default App;
