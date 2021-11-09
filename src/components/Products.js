import React, { useEffect } from 'react'

export default function Products() {

    const fetchProducts = async() => {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        console.log(data)
    
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}
