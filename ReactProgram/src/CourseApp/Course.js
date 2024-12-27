import React from 'react'
import { useSelector } from 'react-redux'
import { selectCourses } from './Redux/coursesSlice'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CourseList from './CourseList'
import './main.css'

const Course = () => {
  const courses = useSelector(selectCourses);
  console.log(courses);
  return (
    <>
        <div className='app'>
            <div className='header'>
                <h1>Sell Courses</h1>
                <Link to="/addcourse" className='header__button'>
                    Sell a course
                </Link>
            </div>
        </div>
        <div className='courses'>
          {courses && courses.map(course => (
            <Link className='link' to={`/course/${course.id}`}>
              <CourseList data={course}/>
            </Link>
          ))
          }
        </div>  
      </>


    
    
  )
}

export default Course