import React from 'react';
import aboutimage from './images/aboutimage.png';
import { Link } from 'react-router-dom';
import About from '../Pages/About';
import Footer from '../Footer';

import './DesignHome.css';

export default function DesignHome() {
  return(
     <>
         <br></br><br></br>
         <iframe  class="designframe" src="https://www.youtube.com/embed/KRtLZF-xlAs"/>

            <div className='intro'><h1>
                Oghenemano
            </h1>
            <p>
                My Work showcase

            </p>
            <br></br>
            <Link className='designLink' to = './About' >Learn More</Link>
            
                </div>         <br></br>        <br></br>        <br></br>  
                <div>
                    <img src={aboutimage} className='aboutimage'></img>
                </div>
                <div className='getintouch'>   
                    <h1>Get in Touch</h1>
                    <br></br>
                    <p>manoomogha@yahoo.com</p>
                    <p>+905488456553</p>
                </div>
                <Footer/>
            
     </>
   
   
  
   
  
  )
}
