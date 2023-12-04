import React from 'react'

function DestructDemo1(props) {
    const{id,name,city}=props
  return (    
    <div>
        <p>
            Id:{id}
        </p>
        <p>
            Name:{name}
        </p>
        <p>
            City:{city}
        </p>
    </div>
  )
}

export default DestructDemo1