import React from 'react';
import fb from '../images/icon-facebook.svg';
import Ig from '../images/icon-instagram.svg';
import pi from '../images/icon-pinterest.svg';
import twt from '../images/icon-twitter.svg';
import logo from '../images/logo.svg'
const Footer=()=>{
    return(
        <>
    
        <div className='row g-0 p-lg-5 text-center' style={{backgroundColor:'#90d4c5'}}>
        <a href="#">
          <div className='d-flex justify-content-center mt-3' >
            
            <img src={logo} alt="logo" width='13%' height="auto" style={{filter: 'invert(42%) sepia(8%) saturate(3184%) hue-rotate(118deg) brightness(66%) contrast(75%)'}}/>
            </div></a>
          
        
          <div className='d-flex  justify-content-evenly justify-content-lg-center mt-4 mb-4'>
           <a href="" className='m-sm-2 text-decoration-none fontbarlow' style={{color:'#2f7668'}}>Home</a>
           <a href="" className='m-sm-2 text-decoration-none fontbarlow' style={{color:'#2f7668'}}>About </a>
           <a href="" className='m-sm-2 text-decoration-none fontbarlow' style={{color:'#2f7668'}}>Services</a>
          </div>
          
          <div className='d-flex  justify-content-evenly justify-content-lg-center '>
            <a href="#"><img src={fb} alt="" width='20px' height="20px" className='m-sm-3'/> </a>
            <a href="#"> <img src={Ig} alt="" width='20px' height="20px" className='m-sm-3'/> </a>
            <a href="#"><img src={twt} alt="" width='20px' height="20px"className='m-sm-3'/>  </a>
            <a href="#">  <img src={pi} alt="" width='20px' height="20px"className='m-sm-3'/>  </a>
          
        
          </div>

        </div>
        </>
    );
}
export default Footer;