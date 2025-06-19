import './App.css';
import HeaderLinks from './HeaderLinks';
import HeaderHero from './HeaderHero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import ScrollLinked from './ScrollLinked';
import React from "react";

function App() {
  
  return (
    <>
      <ScrollLinked/>
      
      <HeaderLinks />
      <HeaderHero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

export default App