import React from 'react'
import './WorkCardStyle.css'
import { NavLink } from 'react-router-dom'


function WorkCard() {
  return (
    <div className='Workcard'>
    <h1 className='Project-heading'>Projects</h1>
    <div className='Project-container'>
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
        <div className='project-card'>
            <img src = "https://i.pinimg.com/736x/27/2e/ba/272ebab4071d9d6ef98858fc58dc4776.jpg"/>
            <h2 className='project-title'>
                SunDown Studio
            </h2>
            <div className='pro-details'>
                <p>
                I developed a replica of Sundown Studio using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll. This project focuses on creating a dynamic and visually engaging user experience by implementing smooth scrolling effects and  animations, . 
                </p>
                <div className='pro-btns'>
                    <NavLink to='https://sundown-replica-ten.vercel.app/' className="btn">View</NavLink>
                    <NavLink to='https://github.com/vanshthakur1721/Sundown-Replica' className="btn">Source</NavLink>
                </div>
                </div>
</div>        
        <div className='project-card'>
            <img src = "https://repository-images.githubusercontent.com/698360057/0f347832-366f-41a4-91d2-c15f3c32485e"/>
            <h2 className='project-title'>
                Buble Game
            </h2>
            <div className='pro-details'>
                <p>
                I built a JavaScript-based bubble game where players match a changing number within 60 seconds to score. It tests quick reflexes and number recognition. The game features a dynamic displayer that updates every second, adding a challenge to maintain focus.  
                </p>
                <div className='pro-btns'>
                    <NavLink to='https://buble-game-rho.vercel.app/' className="btn">View</NavLink>
                    <NavLink to='https://github.com/vanshthakur1721/BubleGame' className="btn">Source</NavLink>
                </div>
                </div>
</div>        
    </div>

        </div>
       
        
    
  )
}

export default WorkCard
