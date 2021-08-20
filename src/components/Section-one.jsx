import React from 'react';
import colimg from '../images/desktop/image-transform.jpg';
import colimg2 from '../images/desktop/image-stand-out.jpg';
import colimg3 from '../images/desktop/image-graphic-design.jpg';
import colimg4 from '../images/desktop/image-photography.jpg';


const Section_one=()=>{
return(
    <> 
            <div className="row g-0">
                <div className="col-lg-6" style={{padding:'100px'}} >
                    <h2 style={{fontFamily:'Fraunces, serif' , fontSize:' 50px'}}>Transform Your brand </h2>
                    <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sunt. Numquam dicta, neque dolorum consequatur
                        illo autem vel quam reprehenderit atque? Illum distinctio perferendis nesciunt facere quaerat. Doloribus, dolores labore?</p>
                        <a href="#"  className=' text-decoration-none text-uppercase fontFraunces text-dark learnmore1'>learn more</a>
                        <div className='borderlearnmore1'></div>
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
                <div className="col-lg-6 "style={{padding:'100px'}} >
                     <h2 style={{fontFamily:'Fraunces, serif' , fontSize:' 50px'}}>Stand out to the right audience </h2>
                     <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat omnis nostrum beatae quae placeat?
                          Iste magnam nihil a culpa aspernatur porro? Impedit accusamus delectus quam ab consequuntur reprehenderit ullam quibusdam?</p>
                          <a href="#" className=' text-decoration-none text-uppercase fontFraunces text-dark learnmore2 ' >learn more</a>
                          <div className='borderlearnmore2'></div>
                </div>
                
            </div>
          
            <div className='row g-0'>
                <div className="col-lg-6 p-5" style={{background:`url(${colimg3})` ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'600px'}} >
                <h3 className='graphic_photography_Herotext fontFraunces mb-5' style={{color:"#2f7668"}}>Graphic Design</h3>
                <p className='graphic_photography_Herotext fontbarlow ' style={{color:"#2f7668"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Commodi quae consectetur fugit fugiat, corporis tempore.</p>
                </div>
                <div className="col-lg-6 p-5" style={{background:`url(${colimg4})` ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'600px'}} >
               
                <h3 className='graphic_photography_Herotext fontFraunces mb-5' style={{color:"#1d576f"}}>Photography</h3> 
                <p className='graphic_photography_Herotext fontbarlow ' style={{color:"#1d576f"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem explicabo ducimus pariatur consequatur quis necessitatibus?</p>
                 </div>


            </div>

    
    </>
);



}
export default Section_one;