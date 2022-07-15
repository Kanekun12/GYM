import React from 'react'

import logo from '../img/piernas.gif';

import './fondo.css' ;
import './general.css';


export default function pierna() {
  return (
    
    <div className='General'>

      <header className='cuadro-general'>
      <div>
      <button className="btn-close" aria-label="Close"> Atras</button>
      </div>
      <div className='title-pierna'>
            <label form='text'>Prensa de piernas</label>
      </div>

      <img className='pierna-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>
      
     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Por un lado tenemos la prensa de piernas de placas, 
    que cuenta con una serie de placas de hierro que suelen estar situadas 
    en el lateral de la máquina, por lo que el sistema de "empuje" se acciona 
    mediante unas poleas y palanca. Esta prensa suele ser horizontal, es decir, 
    que nos sentamos y empujamos la base en la que situamos nuestros pies hacia 
    delante para accionar las poleas y mover las placas.
    <br></br>
    Realizar 40 minutos con un descanso de 2 minutos cada 10 minutos.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}
