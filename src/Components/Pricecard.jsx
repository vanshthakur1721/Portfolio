import React from 'react'
import './Pricecardstyle.css'
import { Link } from 'react-router-dom'
function Pricecard() {
  return (
    <div className='Pricing'>
<div className='Card-container'>
    <div className='card'>
        <h3>-Basic-</h3>
        <span className='bar'></span>
        <p className='btc'>$ 100</p>
        <p>-3 days-</p>
        <p>-3 pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className='btn'>
        PURCHASE NOW</Link>
        </div>
    <div className='card'>
        <h3>-Premium-</h3>
        <span className='bar'></span>
        <p className='btc'>$ 200</p>
        <p>-3 days-</p>
        <p>-5 pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className='btn'>
        PURCHASE NOW</Link>
        </div>
    <div className='card'>
        <h3>-Buisness-</h3>
        <span className='bar'></span>
        <p className='btc'>$ 500</p>
        <p>-5 days-</p>
        <p>-8 pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className='btn'>
        PURCHASE NOW</Link>
        </div>
        </div>      
    </div>
  )
}

export default Pricecard
