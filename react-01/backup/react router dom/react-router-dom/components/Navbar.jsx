import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link className='navbar-brand' href="/">Vasanth & Co</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link to="/Home" className='nav-link'>Home</Link></li>
                <li className='nav-list'><Link to="/Service" className='nav-link'>Service</Link></li>
                <li className='nav-list'><Link to="/Employee" className='nav-link'>Employee</Link></li>
                <li className='nav-list'><Link to="/About" className='nav-link'>About</Link></li>
            </ul>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar