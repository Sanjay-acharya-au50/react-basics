import React from 'react'
import { Link , Outlet} from 'react-router-dom'



const About = () => {
  return (
    <div>
    
    <h1>This is about</h1>
    
        <Link to={'aboutEx'} > <div>this is about 1</div> </Link>
        <Link to={'aboutEx2'} > <div>this is about 2</div> </Link>

            {/* most importnat just wstsed my 1 hour     */}
        <Outlet/>
    
    </div>

    

  )
}

export default About