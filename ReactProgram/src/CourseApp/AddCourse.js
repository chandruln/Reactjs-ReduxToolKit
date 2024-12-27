import React , { useState }from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCourses } from './Redux/coursesSlice';
import { v4 as uuidv4 } from "uuid";
import './main.css'

const AddCourse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [by, setBy] = useState("");
    const [rating, setRating] = useState("");

    const addCourse = (e) => {
        e.preventDefault();
        if ( name !== "" && desc !== "" && price !== 0 && by !== "" && rating !== "") {
            dispatch(setCourses({
                id: uuidv4(),
                name: name,
                description: desc,
                price: price,
                by: by,
                rating: rating,
            }));
            navigate("/")
          }else {
            alert("Enter values");
          }
    }

  return (
    <div>
        <h1 className='title'>  A place to sell your courses online !</h1>
    <div className='add__course'>
    <input
        placeholder="Name of the course"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Course Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        placeholder="$ Price of the course"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Course creator"
        value={by}
        onChange={(e) => setBy(e.target.value)}
      />
      <input
        placeholder="Course rating (out of 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={(e) => addCourse(e)}>Add course</button>
    </div>
    </div>
  )
}

export default AddCourse