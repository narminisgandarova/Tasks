import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { CartProvider } from 'react-use-cart'
import Footer from './components/Footer'
import Header from './components/Header'
// import { ProductProvider } from './context/ProductContext'
import CardDetails from './pages/CardDetails'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Search from './pages/Search'
import User from './pages/User'

const AppRouter = () => {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/:id' element={<CardDetails/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/search' element={<Search/>}></Route>
  <Route path='/user' element={<User/>}></Route>
 </Routes>
 <Footer/>

 </BrowserRouter>
  )
}

export default AppRouter