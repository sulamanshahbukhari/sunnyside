import React from 'react';
import emily from '../images/image-emily.jpg';
import thomas from '../images/image-thomas.jpg';
import jennie from '../images/image-jennie.jpg';


const Testimonials =()=>{
return(
    <>
    <div className='row pl-lg-5 g-5 justify-content-center text-center' style={{minHeight:'100vh', paddingTop:'150px'}}>
       
            <h3 className='fontFraunces opacity-50 text-uppercase' style={{letterSpacing:'3px'}}>Client Testimonials</h3>
        
        <div className='col-lg-3 text-center mt-0'>
            <img src={emily} alt="emily"  className=' rounded-circle mb-5 ' width='23%'/>
            <p className='fontbarlow opacity-75 text-justify mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Repudiandae doloribus facilis consequatur  </p>
            <h4 className='fontFraunces opacity-75 '>Emily R.</h4>
            <p className='fontbarlow opacity-50'>Marketing Director</p>
        </div>
        <div className='col-lg-3 text-center mt-0'>
        <img src={thomas} alt="thomas"  className=' rounded-circle  mb-5'  width='23%'/>
        <p className='fontbarlow opacity-75 text-justify mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Repudiandae doloribus facilis consequatur 
              </p>
              <h4 className='fontFraunces opacity-75 '>Thomas S.</h4>
              <p className='fontbarlow opacity-50'>Chief Operating Officer</p>
        </div>
        <div className='col-lg-3 text-center mt-0'>
        <img src={jennie} alt="jenni"  className=' rounded-circle  mb-5'  width='23%'/>
        <p className='fontbarlow opacity-75 text-justify mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repudiandae doloribus facilis consequatur </p>
                <h4 className='fontFraunces opacity-75 '>Jennie F.</h4>
                <p className='fontbarlow opacity-50'>Buisness owner</p>
        </div>


    </div>
    </>
);

}
export default Testimonials;