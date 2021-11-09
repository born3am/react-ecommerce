import React, { useEffect, useContext } from 'react'
import ReactStar from "react-rating-stars-component";
import { Link, Outlet } from 'react-router-dom';
import { MyContext } from "../App"
import SingleProduct from './SingleProduct';

export default function Products() {

    const { products, cart, setCart } = useContext(MyContext)

    // console.log(products);

    const AddToCart = (product) => {
        let checkItem = cart.find(elem => elem.title === product.title)
        if (checkItem) {
            checkItem.quantity++;
            setCart([...cart])
        } else {
            product.quantity = 1;
            setCart([...cart, product])
        }
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }} >

            <Outlet />

            {products.map(product => {
                return (
                    <div key={product.id} style={{ width: "300px" }}>

                        <Link to={`/products/${product.id}`} state={product}
                        // state={product}
                        >
                            <img src={product.image} width="250" height="250" alt="" />
                            <h3>{product.title}</h3>
                        </Link>

                        <h2> $ {product.price}</h2>
                        <button onClick={() => AddToCart(product)} >Add to Cart</button>
                        <ReactStar
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={product.rating.rate}
                            isHalf={true}
                            edit={false}
                        />,
                    </div>
                )
            })}
        </div >
    )
}
