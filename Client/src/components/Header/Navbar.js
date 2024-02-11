import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className='menu-links'>Home</li>
        <li className='menu-links'>Blog</li>
        <li className='menu-links'>Services</li>
        <li className='menu-links' >About Us</li>
      </ul>
      <div className="profile">
<img src='' alt=""/>
      <button>
        contact us  
      </button>
      </div>
    </nav>
  )
}
