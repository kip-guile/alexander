import React from 'react';
import './App.css';
import About from './About';
import ContactHalf from './Contact/contactForm';
import Footer from './Footer';
import Header from './Header/index'

function Main() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ContactHalf/>
      <Footer/>
    </div>
  );
}

export default Main
