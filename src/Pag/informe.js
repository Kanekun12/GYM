import React from 'react';

import logo2 from '../img/Cardio.avif';


import './fondo.css' ;
import './informe.css';




export default function informe() {
  return (
    <div className='Informe'>

      <header className='cuadro-informe'>
      <div>

      <button className="btn-close" aria-label="Close"> Atras</button>
      </div>
      <div className='title-info'>
            <label form='text'>Caminata </label>
      </div>

      <img className='informe-logo' src={logo2} WIDTH="250" HEIGHT="190" ALT="logo"/>

     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Es la principal, la número uno por excelencia, ya que puedes 
    hacerla en cualquier lugar, a cualquier hora, con un grupo de entrenamiento, solo… 
    Además, en lugares fríos o cuando vamos escasos de tiempo, podemos hacerla dentro 
    del gimnasio gracias a las cinta de correr. Se dice que se gasta aproximadamente 
    tu peso corporal en calorías por cada kilómetro que corres.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}
