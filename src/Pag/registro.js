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
      <header className='blanco-header'>
        <img className='registro-logo' src={Logo}/>



        <header className='Formulario-header'>

              

        <div className="row-nomRegistro">
    
          <label>Registro</label>

        </div>

        <div className='Formulario-registro'> 

              <form>
              <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
              <div className="col-sm-10">
              <input type="text" placeholder='Nombre' className="form-control" id="nombre"/>
              </div>
              </div>

              <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Apellido</label>
              <div className="col-sm-10">
              <input type="text" placeholder='Apellido' className="form-control" id="apellido"/>
              </div>
              </div>

              <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
              <input type="email" placeholder='Email' className="form-control" id="email"/>
              </div>
              </div>

              <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Contraseña</label>
              <div className="col-sm-10">
              <input type="password" placeholder='Contraseña' className="form-control" id="contraseña"/>
              </div>
              </div>

              <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">  Confirmar</label>
              <div className="col-sm-10">
              <input type="password" placeholder='Confirma Contraseña' className="form-control" id="contraseña"/>
              </div>
              </div>

              <div className='2'>
                <label form='text'>Sexo: </label>
                <input className='fila' type="text" placeholder='Sexo' id='sexo'/>
                <label for='text'>Edad: </label>
                <input className='fila' type="text" placeholder='Edad' id='sexo'/>
              </div>



             

              </form>


              
              
              
              <div className='controls3' from='text'>Rango: </div>
              <div></div>
              <select className="controls4" aria-label="peso">
                <option selected>Selecione el rango</option>
                <option value="1">40 - 55</option>
                <option value="2">55 - 65</option>
                <option value="3">65 - 85</option>
              </select>
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
