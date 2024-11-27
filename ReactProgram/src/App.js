import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login from './userListApp/login';
import UserList from './userListApp/userList';
import Folder from './RecursiveMapFolderProgram/Folder';
import Mapprogram from './mapProgram/Mapprogram';
import Pagination from './Pagination/Pagination';
import ShoppingCart from './ShoppingCart/ShoppingCart';

import folderExplorer from './RecursiveMapFolderProgram/folderData';

export default function App() {
  const [explorerData, setExplorerData] = useState(folderExplorer);
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={UserList}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/folderexplorer" Component={Folder} explorer={explorerData}></Route>
        <Route path="/mapprogram" Component={Mapprogram}></Route>
        <Route path="/pagination" Component={Pagination}></Route>
        <Route path="/shoppingcart" Component={ShoppingCart}></Route>
      </Routes>
    </Router>
  )
}
