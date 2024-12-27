import React from 'react'
import './main.css'

const CourseList = ({data}) => {
  return (
    <div className='course'>
        <div>
            <h1 className='course__title'>{data.name}</h1>
            <p className='course__description'>{data.description}</p>
        </div>
        <div>
            <h3 className='course__price'>${data.price}</h3>
            <h3 className='course__by'>{data.description}</h3>
            <p className='course__rating'>Rating {data.rating}</p>
        </div>
    </div>
  )
}

export default CourseList