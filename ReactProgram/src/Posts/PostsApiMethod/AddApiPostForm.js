import React, { useState } from 'react'
import "../posts.css"
import { addNewPost } from './postsApiSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from './userApiSlice';

const AddApiPostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setBody(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    // const saveEnable = Boolean(title) && Boolean(body) && Boolean(userId);
    const saveEnable = [title, body, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if(saveEnable){
            try{
                setAddRequestStatus('pending')
                dispatch(addNewPost({
                    id: nanoid(),
                    title,
                    userId,
                    body,
                    date: new Date().toISOString(),
                    reactions:{
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0
                    }
                }));
                setTitle('');
                setBody('');
                setUserId('');
            } catch (err) {
                console.error('Failed to save post', err);
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

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
            <textarea value={body} onChange={onContentChange} /> <br/>

            <button onClick={onSavePostClicked} type='button' disabled = {!saveEnable}>Save Post</button>
        </form>
    </div>
  )
}

export default AddApiPostForm