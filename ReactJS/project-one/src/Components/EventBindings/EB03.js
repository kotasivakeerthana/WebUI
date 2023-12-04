import React, { Component } from 'react'

export class EB03 extends Component {
    constructor() {
      super()   
      this.state={msg:'Good Morning'} 
       this.show=this.show.bind(this) 
    }
    show()
    {
        alert('Event Triggered')
        this.setState({msg:'Good Evening'})
    }
  render() {
    return (
      <div>
        <button onClick={this.show}>Click Me</button>
      </div>
    )
  }
}

export default EB03