import React, { Component } from 'react'

export class PropsDemo2 extends Component {
  render() {
    return (
      <div>
         <h1>Hello {this.props.userid},{this.props.msg}</h1>
      </div>
    )
  }
}

export default PropsDemo2