import React from 'react'

import logo1 from '../img/gym.png';

import './fondo.css';
import './contenido.css';


export default function Contenido() {
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
            
            
            <div>

            <button className='botones' type='submit'>Cardio</button>
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
          </header>


        </header>

        



    </div>


    

        
    
  )
}
