import React from 'react';
import logo from '../images/logo.svg'

const Navbar=()=>{
  window.onload=function(){
    const navSlide=()=>{
      const burger=document.querySelector('.burger');
      const nav= document.querySelector('.nav-links');
      const navLinks=document.querySelector('.nav-links li');
     
      burger.addEventListener('click',function(){
          nav.classList.toggle('nav-active');
          burger.classList.toggle('toggle');
          nav.classList.toggle('navlinkmargin');
           
      });
    }
    
    navSlide();
  }
return(
<>
<nav className='basenav'>
  <div className='logo'>
    <img src={logo} alt="logo" />
    </div>
    <ul className='nav-links'>
      <li><a href="#">About </a></li>
      <li><a href="#">Project</a></li>
      <li><a href="#">Services</a></li>
      <li> <a href="#" className='btncontact'>Contact</a> </li>
    </ul>
    <div className="burger">
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>

    </div>
</nav>


</>


);

}



export default Navbar;