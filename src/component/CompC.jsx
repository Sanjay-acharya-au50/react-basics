
import React, {useContext} from 'react'
import {AppState} from '../App'
import '../App.css'


// const CompC = ({data}) => {
//   return (
//     <div className='compC'>
//     <div>CompC</div>
//     <div>{data}</div>
//     </div>
//   )
// }

 

const CompC = () => {
  const appData = useContext(AppState)
  return (
    <div >
    <h1>
    {appData}

    </h1>
    </div>
  )
}

export default CompC