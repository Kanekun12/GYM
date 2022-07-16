import React from 'react'

import logo from '../img/sentadillas.gif';

import './fondo.css' ;
import './general.css';


export default function gluteos() {
  return (
    
    <div className='General'>

      <header className='cuadro-general'>
      <div>
      <button className="btn-close" aria-label="Close"> Atras</button>
      </div>
      <div className='title-sentadillas'>
            <label form='text'>Sentadillas</label>
      </div>

      <img className='sentadillas-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>
      
     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Posición inicial: <br></br>
    Desde la posición de pie, mirada al frente con pies abiertos a la anchura de los hombros 
    y puntas ligeramente hacia afuera. Baja con la espalda recta y sacando ligeramente el culo 
    hacia afuera, flexionando la cadera y rodillas unos 90 grados, aproximadamente. Después, vuelve 
    a la posición inicial. Los brazos pueden extenderse hacia adelante para ayudarte en la ejecución.<br></br>
Recomendaciones: <br></br>
*Mantén la espalda siempre recta.<br></br>
*Durante la flexión de cadera las rodillas no deben rebasar la altura de las puntas de los pies.<br></br>
*Para aumentar la dificultad puedes incluir peso en su realización, ya sea con una barra, mancuerna o banda 
de resistencia elástica.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}