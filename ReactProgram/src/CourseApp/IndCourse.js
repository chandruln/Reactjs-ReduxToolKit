import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectCourses } from './Redux/coursesSlice';
import './main.css'

const IndCourse = () => {
  const {id} = useParams();
  const courses = useSelector(selectCourses);
  return (
    <div>
        {courses && courses.map(course => 
            id == course.id ? 
            (<div className='ind__course'>
                <h1>{course.name}</h1>
                <span>{course.by}</span>
                <div>
                    <p>Description: {course.description}</p>
                    <h1>${course.price}</h1>
                </div>
                <h4>{course.rating}/5</h4>
                <button>Buy Now !</button>
            </div>)
            : ("")
        )}
    </div>
  )
}

export default IndCourse