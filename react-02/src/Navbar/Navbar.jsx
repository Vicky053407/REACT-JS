import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class Navbar extends Component {
  render() {
    return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className='navbar-brand' >React Router Components Example</Link>
            <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link to="/index" className='nav-link'>Home</Link></li>
                <li className='nav-list'><Link to="/About" className='nav-link' >About</Link></li>
                <li className='nav-list'><Link to="/Contact" className='nav-link' >Contact</Link></li>
                <li className='nav-list'><Link to="/Services" className='nav-link' >Services</Link></li>
                <li className='nav-list'><Link to="/User" className='nav-link' >User</Link></li>
            </ul>
            </div>
    </nav>
    </>
    )
  }
}

export default Navbar