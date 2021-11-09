import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MyContext } from '../App'
import './Navbar.css'
import logo from '../img/logo-ecommerce.png'

export default function Navbar() {
    const {user} = useContext(MyContext)
    return (
        <div className="nav-header" >
            <div className="logo">
                <img width="70px" src={logo} alt="" />
            </div>

            <nav>
                <ul>
                    {user ? <li> <Link to="/profile" >Profile</Link> </li> : <li> <Link to="/login" >Login</Link> </li>}

                    <li> <Link to="/" >Home</Link> </li>
                    <li> <Link to="/products" >Products</Link> </li>
                    <li> <Link to="/cart" >Cart</Link> </li>

                    <li> <Link to="/contact" >Contact</Link> </li>





                </ul>
            </nav>

        </div>
    )
}
