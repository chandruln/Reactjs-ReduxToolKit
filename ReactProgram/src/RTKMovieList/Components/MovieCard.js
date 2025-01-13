import React from 'react'

import "../main.css"

const MovieCard = ({data}) => {
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.image} alt='img'/>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.name}</h4>
            <p>{data.cuisine}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard