import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: 'idle', //idle, loading, succeeded, failed
    error: null
}

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () =>{
    try{
        const response = await axios.get(POSTS_URL)
        return response.data;
    } catch(err) {
        return err.message;
    }
})

export const addNewPost = createAsyncThunk('/posts/addNewPost', async (initialPost) =>{
    try{
        const response = await axios.post(POSTS_URL, initialPost)
        return response.data;
    } catch(err) {
        return err.message;
    }
})

export const postsApiSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload)
        },
        reactionAdded: (state,action) => {
            const {postId, reaction} = action.payload;
            console.log("postId", postId);
            const existingPost = state.posts.find(post => post.id == postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                const loadedPosts = action.payload.map(post => {
                    post.date = new Date().toISOString();
                    post.reactions = {
                        thumbsUp: 0, wow: 0, heart: 0, rocket: 0
                    }
                    return post;
                })
                state.posts = state.posts.concat(loadedPosts);
            })

            .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
    }
}) 

export const {postAdded, reactionAdded} = postsApiSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsApiSlice.reducer
