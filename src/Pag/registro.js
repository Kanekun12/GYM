import React from 'react'
import Home from './Home.js';
import Login from './login.js';

import './registro.css';
import './fondo.css';
import Logo from '../img/logo.jpg';




    

function registro() {
  const login = "/login";
  return (
    <div className='Registro'>
      <header className='cuadro-header'>
        <img className='registro-logo' src={Logo}/>



        <header className='Formulario-header'>

        <div className="row-nomRegistro">
    
          <label>Registro</label>

        </div>

        <div className='Formulario-registro'> 
              <label form='text'>Nombre: </label>
              <input className='controls' type="text"placeholder='Nombre' id='nombre' required />
              <div></div>
              <label form='text'>Apellido: </label>
              <input className='controls' type="text"placeholder='apellido' id='nombre' required />
              <div></div>
              <label form='text'>Correo: </label>
              <input className='controls' type="gmail"placeholder='Correo' id='correo' required />
              <div></div>
              <label form='text'>Contraseña:</label>
              <input className='controls' type="password"placeholder='Contraseña' id='contraseña' required />
              <div></div>
              <label form='text'>Confirma: </label>
              <input className='controls' type="password"placeholder='Contraseña' id='contraseña' required />
              <div className='fila'>
              <label form='text'>Sexo: </label>
              <input className='controls2' type="text"placeholder='Sexo' id='sexo' required />
              <label form='text'>Edad: </label>
              <input className='controls2' type="text"placeholder='Edad' id='edad' required />
              <div></div>
              </div>
              <div>
              
              
              <div className='controls3' from='text'>Rango: </div>
              <div></div>
              <select className="controls4" aria-label="peso">
                <option selected>Selecione el rango</option>
                <option value="1">40 - 55</option>
                <option value="2">55 - 65</option>
                <option value="3">65 - 85</option>
              </select>
            </div>
            </div>

           
          
         
          
          <div className='input-block'>
          <form method='get' action={login}>
          <button  className='Registro-button' type='submit'>iniciar</button>
          </form>
          </div>
          


      

        </header>
      
          
      

      </header>
      
    

    </div>
  )
}

export default registro
