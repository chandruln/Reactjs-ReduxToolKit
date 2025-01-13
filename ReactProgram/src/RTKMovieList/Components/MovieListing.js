import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllMovies } from '../Redux/movieSlice'
import MovieCard from './MovieCard';

import "../main.css"

const MovieListing = () => {
  
  const moviesList = useSelector(selectAllMovies);
  console.log(moviesList);

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Recipes</h2>
        <div className='movie-container'>
        { 
          moviesList.movies && moviesList.movies.map((item, index) => (
            <MovieCard key = {index} data = {item} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default MovieListing