import React from 'react'
import CompC from './CompC'
import '../App.css'


const CompB = (props) => {
  return (
    <div className='compB'>
        <div>CompB</div>
        <CompC data={props.data}/>
    </div>
  )
}

export default CompB