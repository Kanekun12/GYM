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
import brazos from './Pag/brazos';
import Informe from './Pag/informe';
import Brazos from './Pag/brazos';
import Pecho from './Pag/pecho';
import Pierna from './Pag/pierna';
import Espalda from './Pag/espalda';
import Gluteos from './Pag/gluteos';
import Abdomen from './Pag/abdomen';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    

  </React.StrictMode>
);

//<App /> <Aplicacion/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
