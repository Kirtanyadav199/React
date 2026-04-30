import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Randompage from './pages/Randompage'
import Course from './pages/Course'
import Anycourse from './pages/Anycourse'
import CourseDetail from './pages/CourseDetail'
import NotFoundpage from './pages/NotFoundpage'

const App = () => {
  return (
    <div>
     <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />

        {/* nested Routes */}
        <Route path='/product/men' element={<Men/>} />
        <Route path='/product/women' element={<Women/>} />

        {/* dynamic Routes */}
        <Route path='/about/:id' element={<Randompage/>} />
        <Route path='/courses' element={<Course/>} />

         {/* nested dynamic routes */}
        <Route path='/courses/:courseid' element={<Anycourse/>} />
        <Route path='/courses/:courseid/detail' element={<CourseDetail/>}/>

        {/* Not found page */}
        <Route path='/*' element={<NotFoundpage/>} />

      </Routes>
    </div>
  )
}

export default App


