import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
              <Link to="/">Inicio</Link> 
            </li>
            <li>
              <Link to="/cursos">Cursos</Link> 
            </li>
            <li>
              <Link to="/bolsa">Bolsa de trabajos</Link> 
            </li>
            <li>
              <Link to="/foro">Foro</Link> 
            </li>
            <li>
              <Link to="/beneficios">Beneficios</Link> 
            </li>
            <li>
              <Link to="/eventos">Eventos</Link> 
            </li>
        </ul>
    </div>
  )
}
