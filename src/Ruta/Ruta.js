import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';
import Home from '../Pag/Home';

function Ruta() {
  return (
    <div>
<Router>
            <Layout>
                <Routes>
                <Route exact path="/" element ={<Home />}/>
                       
                </Routes>
                </Layout>
        </Router>

    </div>
  )
}

export default Ruta