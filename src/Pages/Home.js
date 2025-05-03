import React from 'react'
import App from'../App.js'
import { Route, Routes } from 'react-router-dom'
import MovieDescription from '../Component/MovieDescription/MovieDescription.js'
import NavBar from '../Component/NevBar.js'
import Footer from '../Component/Footer/Footer.js'
const Home = () => {
  return (
    <div>
      <NavBar/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/movie/:id' element={<MovieDescription/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default Home