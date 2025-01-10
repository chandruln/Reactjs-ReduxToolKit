import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

import "./main.css"

export default function ShoppingApp() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </Router>
  )
}
