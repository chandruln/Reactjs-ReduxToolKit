import React, { useState } from 'react'
import "./posts.css"
import { postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from './usersSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState(''); 

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    userId,
                    content,
                    date: new Date().toISOString(),
                    reactions:{
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0
                    }
                })
            )
            setTitle('');
            setContent('');
            setUserId('')
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const saveEnable = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div className='addPostForm'>
        <h2>Add a New Post</h2>
        <form className='postForm'>
            <label>Post Title</label> <br/>
            <input type='text' value={title} onChange={onTitleChange} /> <br/>

            <label>Author</label> <br/>
            <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                {userOptions}
            </select>

            <label>Content</label> <br/>
            <textarea value={content} onChange={onContentChange} /> <br/>

            <button onClick={onSavePostClicked} type='button' disabled = {!saveEnable}>Save Post</button>
        </form>
    </div>
  )
}

export default AddPostForm