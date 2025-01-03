import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Pricecard from '../Components/Pricecard'
import WorkCard from '../Components/WorkCard'
function Project() {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading ="PROJECTS" text="Some of My most recent Work"/>
      <WorkCard/>
      <Pricecard/>
      <Footer/>
    </div>
  )
}

export default Project

