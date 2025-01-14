import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Home'
import PageNotFound from './Components/PageNotFound'
import MovieDetail from './Components/MovieDetail'
import Footer from './Components/Footer'

export default function AppMovie() {
  return (
    <Router>
        <Header/>
        <div className='container'>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/:id" Component={MovieDetail}></Route>
            <Route path="*" Component={PageNotFound}></Route>
        </Routes>
        </div>
        <Footer/>
    </Router>
  )
}
