import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', title: "Learing Redux Toolkit", content: "Learing Redux Toolkit Learing Redux Toolkit Learing Redux Toolkit", date: new Date().toISOString(),
        reactions:{
            thumbsUp: 0, wow: 0, heart: 0, rocket: 0
        }
    },
    {id:'2', title: "Redux Toolkit", content: "Redux Toolkit Redux Toolkit Learing Redux Toolkit", date: new Date().toISOString(),
        reactions:{
            thumbsUp: 0, wow: 0, heart: 0, rocket: 0
        }
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        },
        reactionAdded: (state,action) => {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id == postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
}) 

export const {postAdded, reactionAdded} = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer
