import React from 'react'

function PropsDemo1(props) {
  return (
    <div>
        <h1>{props.userid},{props.msg}</h1>
    </div>
  )
}

export default PropsDemo1