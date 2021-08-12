import React from 'react';
import Navbar from './Navbar';
import headerimg from '../images/desktop/image-header.jpg';
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
            <h3>We are Creatives</h3>
        </div>
        </div>
        {/* <img src={headerimg} alt="headerimg" style={{width:'100%',minHeight:'100vh'}} /> */}

        </>
    );
}
export default Header;