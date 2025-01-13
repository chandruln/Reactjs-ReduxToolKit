import React from 'react'
import { Link } from 'react-router-dom'

import user from "../user.png"
import "../main.css"

const Header = () => {
  return (
    <div className='header'>
        <Link to = "/">
            <div className='logo'>Recipe App</div>
        </Link>
        <div className='user-image'>
            <img src={user} alt="user" />
        </div>
    </div>
  )
}

export default Header