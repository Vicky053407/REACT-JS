import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
    <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
         <Link to='#' className='navbar-brand'>My React App</Link>
         <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link to='/index' className='nav-link'>Home</Link></li>
                <li className='nav-list'><Link to='/Users' className='nav-link'>Users</Link></li>
            </ul>
         </div>
    </div>
   

   
    )
  }
}

export default Navbar