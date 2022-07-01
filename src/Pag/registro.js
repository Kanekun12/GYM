import React from 'react'
import Home from './Home.js';

function registro() {
  return (
    <div className='Registro'>
      <header className='cuadro-header'>
        <header className='Formulario-header'>
       

          <div className="Formulario-registro">
            <label form="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
            <div className="col-sm-10">
              <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </div>
          </div>

          <form>
            <label>
              Nombre:
              <input type="nombre" name="name" />
            </label>
        
          </form>

          
          

          <button  className="Home-button"  type='submit' href={Home} >iniciar</button>


      

        </header>
      
          
      

      </header>
      
    

    </div>
  )
}

export default registro