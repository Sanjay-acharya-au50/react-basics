import React from 'react'
import propsTypes from 'prop-types'
import { Header } from '../Header'

const Student = (props) => {
  return (
    <div>
        <h1>
        {props.name}
        </h1>
        <h1>{props.age}</h1>
        <Header />
    </div>
  )
}

Student.prototypes = {
    name : propsTypes.string,
    age : propsTypes.string
}

Student.defaultProps = {
    name : "name",
    age : 0
}

export default Student