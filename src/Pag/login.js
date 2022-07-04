import React from 'react'
import logo from '../img/logo.jpg';


import './fondo.css';
import '../Pag/Loginn.css';

import Registro from '../Pag/registro';

function login() {
  return (
    <div className='Login'>
      <header className='Login-header'>
        <header className='cuadro-header'>
          <img className='Login-logo' src={logo} />


          <header className='formulario-header'>


            <div className="row-nomRegistro">
              <label>Registro</label>

              </div>
            
            <div className="row-nombre">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Correo</label>
              <div className="col-barra">
                <input type="email" class="form-control" id="email"/>
              </div>
            </div>

            <div className="row-nombre">
              <label for="gmail" class="col-sm-2 col-form-label">Contraseña</label>
              <div className="col-barra">
                <input type="password" class="form-control" id="contraseña"/>
              </div>
            </div>


            <div className='row-texto'>
              <label> ¿Aun no tienes cuenta? </label>
              
              <div className='texto-registrate'>
              <label ><a href='Registro'>Registrate</a></label>
              

              </div>
            
            </div>
            



            

         
        
      
            


          </header>


        <button  className="Login-button" type='submit'>iniciar</button>
        
        

        </header>
        

      </header> 
      

    </div>
  )
}

export default login

