import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  

 

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Oghenemano
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          </div>
          </nav>
          <hr className='hrcomp'></hr>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
              <Link className='nav-item' to='/'onClick={closeMobileMenu}>Home</Link>
              </li> 
               <li>
          <Link to='/About' className='nav-item' onClick={closeMobileMenu}>About</Link>
                   </li>  <li> <Link  to='/Contact' className='nav-item' onClick={closeMobileMenu}>Contact</Link> </li>  

          </ul>
        


         
  
          
    </>
  );
}

export default Navbar;