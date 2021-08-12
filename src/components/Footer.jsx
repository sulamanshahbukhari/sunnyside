import React from 'react';
import fb from '../images/icon-facebook.svg';
import Ig from '../images/icon-instagram.svg';
import pi from '../images/icon-pinterest.svg';
import twt from '../images/icon-twitter.svg';
const Footer=()=>{
    return(
        <>
        <div className='row g-0 p-lg-5 text-center' style={{backgroundColor:'#90d4c5'}}>
          
          <div className='d-flex justify-content-center '>
          <img src={fb} alt="" width='20px' height="20px" className='m-lg-2'/> 
          <img src={Ig} alt="" width='20px' height="20px" className='m-lg-2'/> 
          <img src={twt} alt="" width='20px' height="20px"className='m-lg-2'/>  
          <img src={pi} alt="" width='20px' height="20px"className='m-lg-2'/>    
          </div>

        </div>
        </>
    );
}
export default Footer;