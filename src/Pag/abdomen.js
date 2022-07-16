import React from 'react'

import logo from '../img/abdomen.webp';

import './fondo.css' ;
import './general.css';


export default function abdomen() {
  return (
    
    <div className='General'>

      <header className='cuadro-general'>
      <div>
      <button className="btn-close" aria-label="Close"> Atras</button>
      </div>
      <div className='title-abdomen'>
            <label form='text'>Escalador con rotación de tronco</label>
      </div>

      <img className='abdomen-webp' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>
      
     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">-- 4 series / 10 repeticiones con cada brazo <br></br>
   1.-  Apóyate en las manos y en las puntas de los pies asegurando el control de los 
   hombros y la pelvis, mientras la columna está alineada.<br></br>
2.- A partir de esta posición, lleva una rodilla hacia el codo opuesto realizando una 
leve rotación del tronco y manteniendo la estabilidad.<br></br>
3.- Retorna a la posición inicial con mucho control para realizar la siguiente repetición.<br></br>
4.- Recuerda mantener siempre el cuerpo alineado activando abdomen, glúteos, y aductores 
escapulares (músculos de la parte alta de la espalda).
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}