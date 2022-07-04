import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';


import Home from '../Pag/Home';
import Login from '../Pag/login';
import Registro from '../Pag/registro';

function Ruta() {
  return(
      <div>
        <Router>
            <Layout>
                <Routes>
                <Route exact path="/" element ={<Home />}/>
                <Route exact path="/login" element ={<Login />}/>
                <Route exact path="/registro" element ={<Registro/>}/>
                       
                </Routes>
                </Layout>
        </Router>

    </div>
  )
}

export default Ruta