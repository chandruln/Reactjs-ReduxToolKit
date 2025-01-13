import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: {}
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies:(state,action) =>{
            state.movies = action.payload
        }
    }
})

export const selectAllMovies = (state) => state.movies
export const {addMovies} = movieSlice.actions
export default movieSlice.reducer