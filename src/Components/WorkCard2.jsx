import React from 'react'
import './WorkCardStyle.css'
import {Link, NavLink } from 'react-router-dom'


function WorkCard2() {
  return (
    <div className='Workcard'>
    <h1 className='Project-heading'>Projects</h1>
    <div className='Project-container'>
    <div className='project-card'>
            <img src = "https://cdn.sanity.io/images/jl67zxfh/production/85eb142711b0e0a049aecdf997d993bad0aea79a-1700x956.png"/>
            <h2 className='project-title'>
                Gemini-Clone
            </h2>
            <div className='pro-details'>
                <p>
                This project is a functional clone of the Google Gemini chatbot, developed using React.js.   The project demonstrates the implementation of API calls, state management, and dynamic response handling within a React application.  
                </p>
                <div className='pro-btns'>
                    <NavLink to='https://gemini-clone-lilac-nu.vercel.app/' className="btn">View</NavLink>
                    <NavLink to='https://github.com/vanshthakur1721/Gemini-Clone' className="btn">Source</NavLink>
                </div>
                </div>
</div>
        <div className='project-card'>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bMUJy9iTH8EK4vxDwMwq3jtq2nTNk-U2g&s"/>
            <h2 className='project-title'>
                Two Good Co.
            </h2>
            <div className='pro-details'>
                <p>
                This project is a replica of the Two Good Co. website, designed to highlight the mission and offerings of this impactful social enterprise, showcasing modern front-end design techniques .
                </p>
                <div className='pro-btns'>
                    <NavLink to='https://vanshthakur1721.github.io/Two-good-co-project/' className="btn">View</NavLink>
                    <NavLink to='https://github.com/vanshthakur1721/Two-good-co-project' className="btn">Source</NavLink>
                </div>
                </div>
</div>            
       
       <div className='next' >  
          <p>To see all my Projects click on the next button</p>
          <Link to='/project'>
          <button 
            className='btn'>Next..</button></Link>
          </div>
          
              
            
                
    </div>

        </div>
       
        
    
  )
}

export default WorkCard2