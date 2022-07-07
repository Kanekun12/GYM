import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Pag/Home';
import Resgistro from './Pag/registro';
import Login from './Pag/login';
import Contenido from './Pag/contenido';
import Informe from './Pag/informe';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    
    
    
    

    
=======
    <App/>
>>>>>>> 4204c68d46b55d81a74f0a910d93815c2ce8e7a5

  </React.StrictMode>
);

//<App /> <Aplicacion/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
