import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import usersReducer from "./usersSlice";
import postsApiReducer from "./PostsApiMethod/postsApiSlice"
import userApiReducer from "./PostsApiMethod/userApiSlice"

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
        // posts: postsApiReducer,
        // users: userApiReducer
    }
})