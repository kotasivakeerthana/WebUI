import React, { Component } from 'react'

export class StateDemo1 extends Component {
    constructor(){
        super();
        this.state={
            username:'Guest'
        }        
    }
    changeUserId()
    {
        this.setState({username:'Admin'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button onClick={()=>this.changeUserId()}>Change UserId</button>
      </div>
    )
  }
}

export default StateDemo1