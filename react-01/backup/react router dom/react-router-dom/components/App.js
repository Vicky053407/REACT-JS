import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'
import Employee from './components/Employee'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Home' Component={Home}/>
          <Route path='/Service' Component={Service}/>
          <Route path='/Employee' Component={Employee}/>
          <Route path='/About' Component={About}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App