import React from 'react'
import logo from '../img/logo.jpg';
import './registro';
import './contenido';


import './fondo.css';
import '../Pag/Loginn.css';

import Registro from '../Pag/registro';
import Contenido from './contenido';

function login() {
  const contenido = '/contenido';
  return (
    <div className='Login'>
      <header className='Login-header'>
        <header className='cuadro-header'>
          <img className='Login-logo' src={logo} />


          <header className='formulario-header'>


            <div className="row-nomRegistro">
              <label>Iniciar Sesion</label>

            </div>


            <div>
            <div className='nombre'>
              <label for="email">Correo</label>
            </div>  
            <div className='barra'>
            <input type="email" className="form-control" id="email"/>
            </div>          
            
            <div className='nombre'>
              <label for="email">Contraseña</label>
            </div>  
            <div className='barra'>
            <input type="password" className="form-control" id="email"/>
            </div>  
            </div>
            


            <div className='row-texto'>
              <label> ¿Aun no tienes cuenta? </label>
              
              <div className='texto-registrate'>
              <label ><a href='/Registro'>Registrate</a></label>
              

              </div>
            
            </div>
            



            

         
        
      
            


          </header>


          <div className='input-block'>
            <form method='get' action={contenido}>
            <button  className="login-button" type='submit'>iniciar</button>
            </form>
          </div>
        
        

        </header>
        

      </header> 
      

    </div>
  )
}

export default login

