import React, { useEffect } from 'react'
import MovieListing from './Components/MovieListing'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addMovies } from './Redux/movieSlice'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get("https://dummyjson.com/recipes?limit=6")
            const recipes = response.data.recipes
            console.log("Response", recipes);
            localStorage.setItem("recipesList", JSON.stringify(recipes))
            dispatch(addMovies(recipes))
        }

        const checkRecipeList = JSON.parse(localStorage.getItem("recipesList"))
        if(!checkRecipeList){
            fetchMovies();
        }else{
            console.log("Response checkRecipeList", checkRecipeList);
            dispatch(addMovies(checkRecipeList))
        }
    }, [])

  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home