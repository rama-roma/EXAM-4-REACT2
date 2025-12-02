import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Check from './pages/Check'
import Contact from './pages/Contact'
import Error from './pages/Error'
import InfoProduct from './pages/InfoProduct'
import LogIn from './pages/LogIn'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import Wishlist from './pages/Wishlist'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/check' element={<Check/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/error' element={<Error/>} />
            <Route path="/infoproduct/:id" element={<InfoProduct />} />
            <Route path='/login' element={<LogIn/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/wishlist' element={<Wishlist/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App