import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import AboutContent from '../Components/AboutContent'
function About() {
  return (
    <div>
     <NavBar/>
     <Heroimg2 heading= "ABOUT" text =" I am a friendly frontend devloper "/>
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About
