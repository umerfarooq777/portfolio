import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experiance from './components/experiance/experiance';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import Cursor from './components/animations/mouse/pointer';

function App() {
  return (
    <>
    
    <div className="App"> 
    <Cursor/>         
        <Header />
        <Navbar />
        <About/>
        <Contact/>
        <Experiance/>
        <Portfolio/>
        <Footer/>     <div>
          haer</div>  
        
     
    </div>
   
    </>
  );
}

export default App;
