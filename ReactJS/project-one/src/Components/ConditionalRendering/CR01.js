import React, { Component } from 'react'

export class CR01 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
   if(this.state.isLoggedIn)
   {
    return(
        <div>Welcome Admin</div>
    )
   }
   else{
    return(
        <div>Welcome Guest</div>
    )
   }
  }
}

export default CR01