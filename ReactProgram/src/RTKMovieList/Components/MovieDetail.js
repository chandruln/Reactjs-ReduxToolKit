import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieDetail, selectMovieDetail } from '../Redux/movieSlice';
import "../main.css"

const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const data = useSelector(selectMovieDetail)
  console.log("selectMovieDetail", data);

  useEffect(() => {
    console.log(id)
    dispatch(fetchAsyncMovieDetail(id))
  },[dispatch, id])

  return (
      data ? 
      (
        <>
        <div className='movie-section'>
          <div className='section-left'>
            <p>{data.name}</p>
            <img src={data.image} alt='image'/>
          </div>
          <div className='section-mid'>
            <h3>Ingredients</h3>
            {data.ingredients ? data.ingredients.map(ing => <li>{ing}</li>) : null}
          </div>
          <div className='section-right'>
            <h3>Instructions</h3>
            {data.instructions ? data.instructions.map(ins => <li>{ins}</li>): null}
          </div>
        </div>
        </>
       ) : 
       (<h3>Loading...</h3>)
  )
}

export default MovieDetail