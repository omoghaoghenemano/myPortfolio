import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);

const [changecolor, setColor] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
const showchangeColorr= () => {
  if (window.innerWidth<960) {
    setColor(true);
  } else {
    setColor(false);
  }
}
useEffect(()=>{
  showchangeColorr();
},[])
window.addEventListener('resize', showchangeColorr);

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
              <Link className='nav-item' style={{color:changecolor?'white':'green' } }to='/'onClick={closeMobileMenu}>Home</Link>
              </li> 
               <li>
          <Link to='/Portfolio' className='nav-item'style={{color:changecolor?'white':'green'} } onClick={closeMobileMenu}>Portfolio</Link>
                   </li>  <li> <Link  to='/Contact' style={{color:changecolor?'white':'green'} } className='nav-item' onClick={closeMobileMenu}>Contact</Link> </li>  

          </ul>
        


         
  
          
    </>
  );
}

export default Navbar;