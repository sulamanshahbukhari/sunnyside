import React from 'react';
import Navbar from './Navbar';
import headerimg from '../images/desktop/image-header.jpg';
import arrow from '../images/icon-arrow-down.svg';

let stylesec={
    background:`url(${headerimg})`,
    width:'100%',
    minHeight:'100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

}
const Header =()=>{
    return(
        <>
        <div style={stylesec}>
        <Navbar></Navbar>
        <div className='heroText'>
            <h1  className='mb-5'>We are Creatives</h1>
            <img src={arrow} alt="arrowdown" />

        </div>
        </div>
        {/* <img src={headerimg} alt="headerimg" style={{width:'100%',minHeight:'100vh'}} /> */}

        </>
    );
}
export default Header;