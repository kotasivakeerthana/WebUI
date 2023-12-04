import React, { Component } from 'react'

export class CR02 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    let res
    if(this.state.isLoggedIn){res='admin'}else{res='guest'}
    return (
      <div>
        <h1>Welcome {res}</h1>
      </div>
    )
  }
}

export default CR02