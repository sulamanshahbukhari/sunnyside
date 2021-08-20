import React from 'react';
import gimg1 from '../images/desktop/image-gallery-milkbottles.jpg';
import gimg2 from '../images/desktop/image-gallery-orange.jpg';
import gimg3 from '../images/desktop/image-gallery-cone.jpg';
import gimg4 from '../images/desktop/image-gallery-sugarcubes.jpg';
const Gallery=()=>{
return(
<>
    <div className='row g-0'>
        <div className='col-md-3 col-6  '>
        <img src={gimg1} alt="" width='100%' height="auto"/>    
        </div>
        <div className='col-md-3 col-6 '>
        <img src={gimg2} alt="" width='100%' height="auto"/>    
        </div>
        <div className='col-md-3 col-6 '>
        <img src={gimg3} alt="" width='100%' height="auto"/>    
        </div>
        <div className='col-md-3 col-6 '>
        <img src={gimg4} alt="" width='100%' height="auto"/>    
        </div>
    </div>
</>

);

}
export default Gallery;