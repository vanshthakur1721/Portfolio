import React, { Component } from 'react'
import './Herostyle2.css'

class Heroimg2 extends Component {
  render(){
  return (
    <div className='hero-img1'>
     
        <div className='heading'>
            <h1>{this.props.heading} </h1>
            <p>{this.props.text}</p>
        </div>
      
    </div>
  )
}}

export default Heroimg2
