import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Users from './Navbar/Users'
import Home from './Navbar/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/index' Component={Home}></Route>
          <Route path='/Users' Component={Users}></Route>
        </Routes>
        </Router>
        
      
    )
  }
}

export default App