import React, { Component } from 'react'
import CompB from './CompB'

class CompA extends Component {
  render() {

    let Name = "vicky"
    let Age = 25
    let Job = "web-developer"



    return (
      <div>
         <CompB userName={this.Name}/>
      </div>
     
    )  
  }
}

export default CompA