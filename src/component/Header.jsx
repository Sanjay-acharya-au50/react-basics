import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='div'>

    <Link to={'/home'}  ><div>Hone</div></Link>
    <Link to={'/contact'}  ><div>contact</div></Link>
    <Link to={'/about'}  ><div>about</div></Link> 
    </div>

  )
}

export default Header