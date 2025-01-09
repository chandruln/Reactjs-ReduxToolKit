import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reactionAdded, selectAllPosts } from './postsSlice'

import './posts.css'
import AddPostForm from './AddPostForm'
import { selectUsers } from './usersSlice'

const Posts = () => {
    const posts = useSelector(selectAllPosts);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😍',
        heart: '❤',
        rocket: '🚀'
    }

    const user = (userid) => {
        console.log(userid, users);
        const author = users.find(user => user.id == userid);
        console.log(author);
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

    const orderPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderPosts = orderPosts.map(post => (
        <article key={post.id} className='post'>
            <h2 className='title'>{post.title}</h2>
            <p className='content'>{post.content}</p>
            <span>by {user(post.userId)}</span>
            <div>{ReactionButtons(post)}</div>
        </article>
    ))
  return (
    <div className='main'>
        <section>
            <AddPostForm/>
        </section>
        <section className='posts'>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    </div>
  )
}

export default Posts;