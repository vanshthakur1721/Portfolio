import React from 'react'
import "./AboutStyle.css"
import { Link } from 'react-router-dom'
function AboutContent() {
  return (
    <div className='about'>
    <div className='left'>
  <h1>Who Am I ?</h1>
  <p>I am a react front-end devloper .I create responsive secure website for my clients</p>
  <Link to="/contact" >
  <button className='btn'>Contact</button>
  </Link>
      </div>
     <div className='right'>
<div className='img-container'>
  <div className='top'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbqtwrZ_TKwBm58F3xGI8zWNWfAqIHPGcIQ&s" alt="error" />
  </div>
  {/* <div className='bottom'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbqtwrZ_TKwBm58F3xGI8zWNWfAqIHPGcIQ&s" alt="error" />
  </div> */}
</div>
     </div>
    
      
  </div>
  )
}

export default AboutContent
