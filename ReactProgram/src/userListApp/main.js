import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import login from './userListApp/login';
import userList from './userListApp/userList';

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={userList}></Route>
        <Route path="/login" Component={login}></Route>
      </Routes>
    </Router>
  )
}
