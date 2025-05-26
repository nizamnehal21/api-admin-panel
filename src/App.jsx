import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './products/Products'
import Carts from './carts/Carts'
import Users from './users/Users'
import Auth from './auth/Auth'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
      
       <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/carts" element={< Carts />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
