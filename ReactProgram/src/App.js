import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login1 from './userListApp/login';
import UserList from './userListApp/userList';
import Folder from './RecursiveMapFolderProgram/Folder';
import Mapprogram from './mapProgram/Mapprogram';
import Pagination from './Pagination/Pagination';
import ShoppingCart from './ShoppingCart/ShoppingCart';

import folderExplorer from './RecursiveMapFolderProgram/folderData';
import Login from './LoginRedux/login';
import { useSelector } from 'react-redux';
import { selectUser } from './LoginRedux/Redux/userSlice';
import logout from './LoginRedux/logout';
import Course from './CourseApp/Course';
import IndCourse from './CourseApp/IndCourse';
import AddCourse from './CourseApp/AddCourse';

export default function App() {
  const [explorerData, setExplorerData] = useState(folderExplorer);
  // const user = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Course}></Route>
        <Route path="/course/:id" Component={IndCourse}></Route>
        <Route path="/addcourse" Component={AddCourse}></Route>
        {/* <Route path="/login" Component={user ? UserList : Login}></Route> */}
        <Route path="/login" Component={Login}></Route>
        <Route path="/userlist" exact Component={UserList}></Route>
        <Route path="/login1" Component={Login1}></Route>
        <Route path="/folderexplorer" Component={Folder} explorer={explorerData}></Route>
        <Route path="/mapprogram" Component={Mapprogram}></Route>
        <Route path="/pagination" Component={Pagination}></Route>
        <Route path="/shoppingcart" Component={ShoppingCart}></Route>
      </Routes>
    </Router>
  )
}
