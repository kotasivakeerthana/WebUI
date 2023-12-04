import React, { Component } from 'react'

export class DestructDemo2 extends Component {
  render() {
    const{id,name,city}=this.props
    return (
      <div>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>City:{city}</p>
      </div>
    )
  }
}

export default DestructDemo2