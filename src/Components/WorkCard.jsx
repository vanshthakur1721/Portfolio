import React from 'react'
import './WorkCardStyle.css'
import { NavLink } from 'react-router-dom'


function WorkCard() {
  return (
    <div className='Workcard'>
    <h1 className='Project-heading'>Projects</h1>
    <div className='Project-container'>
        <div className='project-card'>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vQWmQ6COumh6J7lBmYeKyviHqrApz_YpAQ&s"/>
            <h2 className='project-title'>
                Two Good Co.
            </h2>
            <div className='pro-details'>
                <p>
                This project is a replica of the Two Good Co. website, designed to highlight the mission and offerings of this impactful social enterprise. Two Good Co. is a Sydney-based organization dedicated to supporting women who have experienced homelessness, domestic violence, and complex trauma.
                </p>
                <div className='pro-btns'>
                    <NavLink to='https://vanshthakur1721.github.io/Two-good-co-project/' className="btn">View</NavLink>
                    <NavLink to='https://github.com/vanshthakur1721/Two-good-co-project' className="btn">Source</NavLink>
                </div>
                </div>
</div>            </div>

        </div>
       
        
    
  )
}

export default WorkCard
