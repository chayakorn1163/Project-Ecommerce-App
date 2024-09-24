/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import Collection from './page/Collection'
import About from './page/About'
import Contact from './page/Contact'
import Product from './page/Product'
import Cart from './page/Cart'
import Login from './page/Login'
import PlaceOder from './page/PlaceOder'
import Order from './page/Order'
import Navbar from './components/Navbar'
import Hero from './components/็Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5sv] md:px[7vw] lg:px-[9vw]'>
      <Navbar/>
      
  <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/collection' element ={<Collection/>} />
      <Route path='/about' element ={<About/>} />
      <Route path= '/contacts' element ={<Contact/>} />
      <Route path = '/product' element ={<Product/>} />
      <Route path = '/cart ' element ={<Cart/>} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/place-order' element = {<PlaceOder/>}/>
      <Route path='/order' element = {<Order/>} />

  </Routes>
  <Footer/>
      
    </div>
  )
}

export default App
