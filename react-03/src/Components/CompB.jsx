import React, { Component } from 'react'

class CompB extends Component {
  render(props) {
    return (
      <div>Hiiii Siva bro
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default  CompB