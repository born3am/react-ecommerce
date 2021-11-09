
import React, { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'

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

const MyContext = createContext()


function App() {


  const [user, setUser] = useState(null)
  const [products, setProducts]= useState([])
  const [cart, setCart]= useState([])


  return (
    <MyContext.Provider value ={{user, setUser, products, setProducts, cart, setCart}}>
      <HashRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productname" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div> {""}
      </HashRouter>

    </MyContext.Provider>
  );
}


export default App;