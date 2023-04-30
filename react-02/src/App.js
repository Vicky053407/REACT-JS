import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import User from './userdata/User'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
import {Route,Switch} from 'react-router-dom/cjs/react-router-dom.min'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/index" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Services" component={Services}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/User" component={User}></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App