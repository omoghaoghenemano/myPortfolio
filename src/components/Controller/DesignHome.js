import React from 'react';
import aboutimage from './images/aboutimage.png';
import { Link } from 'react-router-dom';
import About from '../Pages/Portfolio';
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
            <Link className='designLink' to = './Portfolio' >Learn More</Link>
            
                </div>         <br></br>        <br></br>        <br></br>  
                <div>
                    <img src={aboutimage} className='aboutimage'></img>
                </div>
                <div className='getintouch'>   
                    <h1>Get in Touch</h1>
                    <br></br>
                    <p>manoomogha@yahoo.com</p>
                    <p>+905488456553</p>
                    <a href="">
                        <i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/oghenemano-o-179aba206" ><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/omoghaoghenemano" ><i className="fab fa-github"></i></a>
                </div>
                <Footer/>
            
     </>
   
   
  
   
  
  )
}
