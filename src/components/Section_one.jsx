import React from 'react';
import colimg from '../images/desktop/image-transform.jpg';
import colimg2 from '../images/desktop/image-stand-out.jpg';
import colimg3 from '../images/desktop/image-graphic-design.jpg';
import colimg4 from '../images/desktop/image-photography.jpg';


const Section_one=()=>{
return(
    <>
    
            <div className="row g-0">
                <div className="col-lg-6 p-lg-5 p-sm-3" >
                    <h2 style={{fontFamily:'Fraunces, serif' , fontSize:' 50px'}}>Transform Your brand </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sunt. Numquam dicta, neque dolorum consequatur
                        illo autem vel quam reprehenderit atque? Illum distinctio perferendis nesciunt facere quaerat. Doloribus, dolores labore?</p>
                        <a href="#">learn more</a>
                </div>
                <div className="col-lg-6"  >
                    <img src={colimg} alt="" width='100%' height="auto"/>    
                </div>


            </div>
            {/* part 2 */}
            <div className="row g-0">
                <div className="col-lg-6">
                <img src={colimg2} alt="" width='100%' height="auto"/>    
                </div>
                <div className="col-lg-6 p-lg-5 p-sm-3" >
                     <h2 style={{fontFamily:'Fraunces, serif' , fontSize:' 50px'}}>Stand out to the right audience </h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat omnis nostrum beatae quae placeat?
                          Iste magnam nihil a culpa aspernatur porro? Impedit accusamus delectus quam ab consequuntur reprehenderit ullam quibusdam?</p>
                          <a href="#">learn more</a>

                </div>
                
            </div>
          
            <div className='row g-0'>
                <div className="col-lg-6" >
                <img src={colimg3} alt="" width='100%' height="auto"/>    
                </div>
                <div className="col-lg-6">
                <img src={colimg4} alt="" width='100%' height="auto"/>    
                 </div>


            </div>

    
    </>
);



}
export default Section_one;