
import React, { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import NotFound from './components/NotFound'
import Cart from './components/Cart'

//Context API

export const MyContext = createContext()


function App() {


  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const fetchProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    setProducts(data)

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <MyContext.Provider value={{ user, setUser, products, setProducts, cart, setCart }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/" || "/home"} element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/products" element={<Products />} >

          <Route path="/products/:id" element={<SingleProduct />} />

          </Route>


          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div> {""}

    </MyContext.Provider>
  );
}


export default App;