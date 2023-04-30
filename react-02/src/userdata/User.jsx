import React, { Component } from 'react'
import Axios from 'axios'

class User extends Component {
    constructor(props){
        super(props)
        this.state={
          users:[]
        }
        console.log("first test")
    }

    getUserHandler(){
      console.log("response")
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
          this.setState=({users:response})
        })
        .catch(()=>{})
    }


  render() {
    console.log("second test")
    return (
      <div>
            <h1>User Data</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <button onClick={this.getUserHandler}>press here for data</button>
            <div className="container">
              <div className="row">
                <div className="column-10">
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
                          return <tr>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.gender}</td>
                                  </tr>
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