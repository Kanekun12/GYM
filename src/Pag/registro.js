import React, { useState } from "react";
import Axios from "../servicio/ConexionAxios";


import Home from './Home.js';
import Login from './login.js';



import './registro.css';
import './fondo.css';
import Logo from '../img/logo.jpg';

 

function Registro() {

  const variables = {
      nombre: "",
      apellidos: "",
      email: "",
      password: "",
      sexo: "",
      edad: "",
  };
  
  const [valores, setValores] = useState (variables);
  
  const cambioEstado = (e) => {
      const { name, value } = e.target;
      setValores({ ...valores, [name]: value });
  };
  
  //Crear método para guardar información
  const Guardar=async()=>{
  Axios.post('/persona/guardar',{
    nombre:valores.nombre,
    apellidos:valores.apellidos,
    email:valores.email,
    password:valores.password,
    sexo:valores.sexo,
    edad:valores.edad
  
  }).then(()=>{
    console.log('Registro guardado con exito');
  })
  }

  
  
    const Enviar = (e) => {
      e.preventDefault();
      Guardar();
    };






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

      <form onSubmit={Enviar}>

            <form>
            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
            <div className="col-sm-10">

            <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre" 
            value={valores.nombre} 
            onChange={cambioEstado}  
            placeholder='Nombre' 
            />
            </div>
            </div>

            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Apellido</label>
            <div className="col-sm-10">

            <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos" 
            value={valores.apellidos} 
            onChange={cambioEstado}  
            placeholder='Ingrese su apellido'
            
            />
            </div>
            </div>

            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">

            <input
            type="email"
            className="form-control"
            id="email"
            name="email" 
            value={valores.email} 
            onChange={cambioEstado}  
            placeholder='Ingrese su Email'
            />
            </div>
            </div>

            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Contraseña</label>
            <div className="col-sm-10">

            <input
            type="password"
            className="form-control"
            id="password"
            name="password" 
            value={valores.password} 
            onChange={cambioEstado}  
            placeholder='Ingrese su contraseña'
            />
            </div>
            </div>

            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">  Confirmar</label>
            <div className="col-sm-10">

            <input
            type="password"
            className="form-control"
            id="password"
            name="password" 
            value={valores.password} 
            onChange={cambioEstado}  
            placeholder='Ingrese su contraseña'
            />
            </div>
            </div>

            <div className='2'>
              <label form='text'>Sexo: </label>

              <input
              type="text"
              className="fila"
              id="sexo"
              name="sexo" 
              value={valores.sexo} 
              onChange={cambioEstado}  
              placeholder='Su sexo'
              />
              
              <label for='text'>Edad: </label>

              <input
              type="text"
              className="fila"
              id="edad"
              name="edad" 
              value={valores.edad} 
              onChange={cambioEstado} 
              placeholder='su edad'
              />
            </div>

            </form>


            
            

          

            <button type="submit" className="Registro-button">
              Enviar
            </button>

          </form>  
          </div>
          

       
        

      </header>
    
        
    

    </header>
    
  

  </div>
)
}

export default Registro;