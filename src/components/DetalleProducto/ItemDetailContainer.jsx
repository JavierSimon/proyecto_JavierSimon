
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => setProducts(json))
        }, 2000)

    }, [])

    return (
        <>
            <h2>ItemDetailContainer</h2>
            <ItemDetail key={products.id} products={products} />
        </>
    )
}

export default ItemDetailContainer