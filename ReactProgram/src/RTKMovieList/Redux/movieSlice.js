import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    movies: [],
    selectedMovieDetail:[],
}

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const response = await axios.get("https://dummyjson.com/recipes?limit=6")
    const recipesData = response.data
    return recipesData;
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) => {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
    const recipesData = response.data
    console.log("recipesData", recipesData);
    return recipesData;
})

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies:(state,action) =>{
            state.movies = action.payload
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchAsyncMovies.pending, (state, action) => {
                console.log("fetchAsyncMovies pending");   
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log("fetchAsyncMovies fulfilled"); 
                state.movies = action.payload  
            })
            .addCase(fetchAsyncMovies.rejected, (state, action) => {
                console.log("fetchAsyncMovies rejected");   
            })
            .addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
                console.log("fetchAsyncMovieDetail fulfilled", action.payload); 
                state.selectedMovieDetail = action.payload  
            })
            
    }
})

export const selectAllMovies = (state) => state.movies
export const selectMovieDetail = (state) => state.movies.selectedMovieDetail
export const {addMovies} = movieSlice.actions
export default movieSlice.reducer