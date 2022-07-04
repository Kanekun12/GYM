import React, { Children } from 'react'
import Menu from '../Menu/menu';
import Footer from '../Menu/footer';


function Layout(Children) {
  return (
    <div>
      <Menu/>
      {Children}
      <Footer/>
        
        </div>
  )
}

export default Layout