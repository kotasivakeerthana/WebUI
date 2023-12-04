import React from 'react'

function ChildPropsDemo(props) {
  return (
    <div>
        <h1>Id:{props.id}-Name:{props.name}</h1>
        <h2>{props.children}</h2>
    </div>
  )
}

export default ChildPropsDemo