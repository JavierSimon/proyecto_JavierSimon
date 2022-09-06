
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.find((item)=> item.id === 1)))
            .catch(error => console.log('hay un error'))
            .finally(()=>setLoading(false))
        }, 2000)

    }, [])


    return (
        <>
            <h2>ItemDetailContainer</h2>
            {loading? 'Cargando...':<ItemDetail key={products.id} products={products} />}
        </>
    )
}

export default ItemDetailContainer