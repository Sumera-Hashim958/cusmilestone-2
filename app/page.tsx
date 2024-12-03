import React from 'react'
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Skills from './components/Skills';
import Contact from './components/Contact';

const page = () => {
  return (
    <div>
      <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      
    </div>
  )
}

export default page
