import React from 'react';



import logo from '../img/logo.jpg';
import '../Pag/Home.css';
import './registro';
import './login';

function Home() {
  const login = '/login';
  return (

    <div className='Home'>
      <header className='Home-header'>
      

        <header className='cuadro-header'>
        


        
        
          <img className='Home-logo' src={logo} WIDTH="250" HEIGHT="250" ALT="logo"/>

          
          <div className='input-block'>
          <form method='get' action={login}>
          <button  className="Home-button" type='submit'>iniciar</button>
          </form>
          </div>
        
        </header>
        

      </header> 

      
     


    
  






    </div>
  )
}

export default Home