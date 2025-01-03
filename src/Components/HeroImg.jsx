import React from 'react'
import "./HeroStyle.css"
import Introimg from "../assets/Background.jpg"
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
<img className ='Intro-img'src={Introimg} alt="" />
      </div>
      <div className='content'>
        <p>Hi,I am Vansh</p>
        <h1>React Devloper</h1>
        <div>
          <Link to ="/project" className ="btn">
          Project
          </Link>
          <Link to ="/Contact" className='btn btn-light'>
          Contact
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroImg
