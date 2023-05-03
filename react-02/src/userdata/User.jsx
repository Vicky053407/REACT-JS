import React, { Component } from 'react'
import Axios from 'axios'

class User extends Component {
    constructor(props){
        super(props)
        this.state={
          users:{}
        }
    }
    componentDidMount() {

      Axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
              console.log(response)
              this.setState({ users: response.data })
          })
          .catch(() => { })
        }

  render(){
    return (
      <div>
            <h1>User Data</h1>
            <pre>
              {JSON.stringify(this.state)}
            </pre>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.users.map((user)=>{
                          return (
                          <tr>
                          <td>{}</td>
                          <td>{}</td>
                          <td>{}</td>
                          <td>{}</td>
                        </tr>
                        )
                        })
                        
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

export default User

