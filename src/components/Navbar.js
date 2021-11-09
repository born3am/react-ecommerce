import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MyContext } from '../App'
import './Navbar.css'

export default function Navbar() {
    const {user} = useContext(MyContext)
    return (
        <div>
            <div className="logo">
                <img width="50px" src="https://i.pinimg.com/originals/25/4d/86/254d865a465f88b330e6b45d82ef29e1.png" alt="" />
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
