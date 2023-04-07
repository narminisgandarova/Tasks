import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFoundPage from '../pages/NotFoundPage'
import Header from '../components/Header'
import Login from '../pages/Login'
import Dashboard from '../admin/Dashboard'
import BlogForm from '../admin/BlogForm'
import AddBlog from '../admin/update/AddBlog'

const App = () => {
  return (
    <>
    <BrowserRouter>
   <Header/>
   <div className="container">
   <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/blog/:id" element={<BlogDetails/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/login/dashboard' element={<Dashboard/>} ></Route>
        <Route path='/add' element={<AddBlog/>} ></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
   </div>
    </BrowserRouter>
    </>
  )
}

export default App