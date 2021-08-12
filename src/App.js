import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section_one from './components/Section_one';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
const App =()=>{
return(
    <>
    <div className='container '>
    <Header/>
    <Section_one/>
    <Testimonials/>
    <Gallery/>
    <Footer/>
    
    </div>
  

    </>

);


}
export default App;