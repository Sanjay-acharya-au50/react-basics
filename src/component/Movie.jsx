import React from 'react'
import '../movieStyle/movie.css'


const Movie = (props) => {
  return (

    <div className='movie'>
    <img src={props.img} alt=''/>
    
    <div className="marg">

    <p><b>Name : </b>{props.title}</p>
    <p> <b>Year : </b> {props.year}</p>
    </div>
    </div>


    )
}

export default Movie