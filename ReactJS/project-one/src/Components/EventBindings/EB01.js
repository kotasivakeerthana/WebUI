import React, { Component } from 'react'

export class EB01 extends Component {
    show=()=>
    {
        alert('Event Triggered!')
    }
    
  render() {   
    return (
      <div>
        <button onClick={this.show}>Click Me</button>
      </div>
    )
  }
}

export default EB01