import React from 'react';
import '../App.css';
import Header from '../Header/index'
import Footer from '../Footer';
import Section from './projects';
import Section2 from './projects2';

function Projects() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Section2 />
      <Footer/>
    </div>
  );
}

export default Projects