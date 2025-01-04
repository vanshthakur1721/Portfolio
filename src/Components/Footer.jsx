import React from 'react'
import './Footerstyle.css'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
<div className='footer-container'>
    <div className='left'>
        <div className='location'>
            <FaHome size={20} style={{color :"#fff",marginRight:"2rem"}}/>
            <div>
                <p> Hostel 07,Jablpur<br />India</p>
                
            </div>
            
        </div>
<div className='phone'>
    <h4>
    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    7974471259
    </h4>    
</div>
<div className='email'>
    <h4>
    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    info@gmail.com
    </h4>
    
</div>
    </div>
    <div className='right'>
<h4>About Me</h4>
<p>This is me Vansh Thakur. A React devloper 
I enjoy desinging new projects and taking challenges

</p>
<div className='social'>
    <Link to={"https://www.instagram.com/vansh_thakur_17/"} >
<FaInstagram size={25} style={{color:"#fff",marginRight:"1rem"}}/>
</Link>
<Link to={"https://www.linkedin.com/in/vansh-thakur-1251bb23b/"}>
<FaLinkedin size={25} style={{color:"#fff",marginRight:"1rem"}}/>
</Link>
<Link>
<FaTwitter size={25} style={{color:"#fff",marginRight:"1rem"}}/>
</Link>

</div>
    </div>
    </div>      
    </div>
  )
}

export default Footer
