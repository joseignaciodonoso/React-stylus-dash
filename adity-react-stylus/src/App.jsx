import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './stylus/general/style.styl'
import Navbar from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import Inicio from '../src/pages/Inicio'
import Bolsatrabajos from '../src/pages/Bolsatrabajos'
import Foro from '../src/pages/Foro'
import Cursos from '../src/pages/Cursos'
import Beneficios from '../src/pages/Beneficios'
import Eventos from '../src/pages/Eventos'


export const App = () => {
  return (
    <Router>
      <Navbar />
    
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" exact element ={<Inicio />} />
            <Route path="/cursos" exact element ={<Cursos />} />
            <Route path="/bolsa" exact element ={<Bolsatrabajos />} />
            <Route path="/eventos" exact element ={<Eventos />} />
            <Route path="/beneficios" exact element ={<Beneficios />} />
            <Route path="/foro" exact element ={<Foro />} />
            </Routes>
 
        </div>
      </div>

    </Router>
    
  )
}
