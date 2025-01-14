import React, { useEffect } from 'react'
import MovieListing from './Components/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from './Redux/movieSlice'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies())        
    }, [dispatch])

  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home