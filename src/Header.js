import React from 'react'

const Header = (props) => {
  return (

<>
    <h1 className='head'>this is header {props.age}</h1>
</>

  )
}



const Footer = (props) => {
  return (
    <div>
    <h3>{props.name}</h3></div>
  )
}

export {Header, Footer};




