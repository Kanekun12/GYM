import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';

import Home from '../Pag/Home';
import Login from '../Pag/login';
import Registro from '../Pag/registro';
import Contenido from '../Pag/contenido';

function Ruta() {
  return(
      <div>
        
        <Router>
          
          
                <Routes>
                  
                <Route exact path="/" element ={<Home />}/>
                <Route exact path="/login" element ={<Login />}/>
                <Route exact path="/registro" element ={<Registro/>}/>
                <Route exact path="/Contenido" element ={<Contenido/>}/>
                      
                </Routes>
                
        </Router>

    </div>
  )
}

export default Ruta