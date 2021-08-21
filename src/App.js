import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section_one from './components/Section-one';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App =()=>{
    
return(
    <>
  
    <Header/>
    <Section_one/>
    <Testimonials/>
    <Gallery/>
    <Footer/> 
  

    </>

);


}
export default App;