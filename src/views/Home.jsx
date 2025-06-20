/**
 * Proyecto: Reportes
 * Autor: Diego Eduardo Cortés Méndez
 * Licencia: GPL v3
 * Año: 2025
 * Este software es libre y no puede ser vendido sin compartir el código fuente.
 */




import React from 'react'
import TableResults from '../components/Home/TableResults'
import ViewsUsuarios from '../components/Home/ViewsUsuarios'

const Dashboard = () => {
  return (
    <>
     <TableResults/> 
     <ViewsUsuarios/>
    </>
  )
}

export default Dashboard