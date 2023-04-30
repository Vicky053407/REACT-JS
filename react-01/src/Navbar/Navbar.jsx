import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/index" className="navbar-brand">React Rounting Examples</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><Link to="/index" className="nav-link">Home</Link></li>
                        <li className='nav-list'><Link to="/about" className="nav-link">About</Link></li>
                        <li className='nav-list'><Link to="/services" className="nav-link">Services</Link></li>
                        <li className='nav-list'><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className='nav-list'><Link to="/users" className="nav-link">Users</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar