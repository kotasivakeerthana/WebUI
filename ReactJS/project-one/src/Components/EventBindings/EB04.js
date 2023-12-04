import React, { Component } from 'react'

export class EB04 extends Component {
    constructor() {
      super()   
      this.state={msg:'Good Morning'} 
      
    }
    show()
    {
        alert('Event Triggered')
        this.setState({msg:'Good Evening'})
    }
  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default EB04