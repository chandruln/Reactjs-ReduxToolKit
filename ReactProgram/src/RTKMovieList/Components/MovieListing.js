import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllMovies } from '../Redux/movieSlice'
import MovieCard from './MovieCard';

import "../main.css"

const MovieListing = () => {

  const moviesList = useSelector(selectAllMovies);
  console.log("renderData", moviesList);
      
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Recipes</h2>
        <div className='movie-container'>
        {moviesList.movies.total > 0 ? 
          (
            <>
            {
              moviesList.movies.recipes.map((item, index) => (
                <MovieCard key = {index} data = {item} />
              ))
            }
            </>
          ) 
          : (<h3> Loading .... </h3>)
        }
        </div>
      </div>
    </div>
  )
}

export default MovieListing