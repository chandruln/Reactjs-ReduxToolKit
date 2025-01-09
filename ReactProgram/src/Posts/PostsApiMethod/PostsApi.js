import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reactionAdded, selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postsApiSlice'

import '../posts.css'
import AddApiPostForm from './AddApiPostForm'
import { selectUsers } from './userApiSlice'

const PostsApi = () => {
    const posts = useSelector(selectAllPosts);
    const users = useSelector(selectUsers);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const dispatch = useDispatch();

    useEffect(() => {
        if(postStatus === "idle"){
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😍',
        heart: '❤',
        rocket: '🚀'
    }

    const user = (userid) => {
        const author = users.find(user => user.id == userid);
        return author ? author.name : 'unknown author';
    }

    const ReactionButtons = (post) => {
        const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
            return (
                <button type='button'
                  onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
                >
                    {emoji}{post.reactions[name]}
                </button>
            )
        })
        return reactionButtons
    }

    let content;
    if(postStatus === "loading"){
        content = <p>"Loading ..."</p>
    } else if (postStatus === "succeeded"){
        const orderPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderPosts.map(post => (
            <article key={post.id} className='post'>
                <h2 className='title'>{post.title}</h2>
                <p className='content'>{post.body}</p>
                <span>by {user(post.userId)}</span>
                <div>{ReactionButtons(post)}</div>
            </article>
        ))
    } else if (postStatus === "failed"){
        content = <p>{error}</p>
    }
  return (
    <div className='main'>
        <section>
            <AddApiPostForm/>
        </section>
        <section className='posts'>
            <h2>Posts</h2>
            {content}
        </section>
    </div>
  )
}

export default PostsApi;