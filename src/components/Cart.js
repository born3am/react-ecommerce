import React, { useContext } from 'react'
import { MyContext } from '../App'


export default function Cart() {
    const { cart } = useContext(MyContext)
    return (
        <div>
            <h1>Cart Items</h1>
            {cart.map(item => {
                return (
                    <div>
                        <div className="image" >
                            <img src={item.image} width="100" height="100" alt="" />
                        </div>
                        <div className="desc">
                            <h3>{item.title}</h3>
                            <p>{item.quantity}</p>
                        </div>
                        <div className="price">
                            <h1>$ {item.price}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
