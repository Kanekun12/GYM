import React from 'react'

import logo1 from '../img/gym.png';

import './informe';

import './fondo.css';
import './contenido.css';


export default function Contenido() {
  const informe = "/informe";
  return (
    <div className='Contenido'>

        <header className='cuadro-contenido'>
        <div>
        
      <button className="btn-close" aria-label="Close"> Atras</button>
      </div>

      <div className="title">GYM ANYTIME</div>

        <img className='contenido-logo' src={logo1} WIDTH="250" HEIGHT="250" ALT="logo"/>


        <header className='botones'>
          <div className='title-ejercicios'>
            <label form='text'>EJERCICIOS </label>
            
          </div>
            
            
            
            <div className='input-block'>
            <div>
            <form method='get' action={informe}>
            <button className='botones' type='submit'>Cardio</button>
            </form>
            </div>
            <button className='botones' type='submit'>Pecho</button>
            <div>
            <button className='botones' type='submit'>Brazos</button>
            </div>
            <div>
            <button className='botones' type='submit'>Piernas</button>
            </div>
            <div>
            <button className='botones' type='submit'>Espalda</button>
            </div>
            <div>
            <button className='botones' type='submit'>Gluteos</button>
            </div>
            <div>
            <button className='botones' type='submit'>Abdomen</button>
            </div>
            </div>
          </header>


        </header>

        



    </div>


    

        
    
  )
}
