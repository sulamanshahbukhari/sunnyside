import React from 'react';
import logo from '../images/logo.svg'
const Navbar=()=>{
return(
<>
<nav className='navbar-nav'>
    <ul>
      <a href="#" className='navLogo '><li><img src={logo} alt="logo" /></li></a> 
      <a href="#" className='btncontact'>Contact</a> 
      <a href="#"><li>Projects</li></a>
      <a href="#"> <li>Services</li></a>
      <a href="#"> <li>About</li></a>
    </ul>
</nav>

</>

);

}
export default Navbar;