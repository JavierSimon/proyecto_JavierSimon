
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../mocks/mocksData'

import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(()=>{
        
        setTimeout(()=>{
            data
            .then(res => {
                setProducts(res.find(item=> item.id === id))})
            .catch(error => console.log('hay un error'))
            .finally(()=>setLoading(false))
        }, 2000)
        
    }, [id])


    return (
        <>
        <div className='d-flex justify-content-center flex-wrap align-content-around m-1'>
        {loading ? 'Cargando...':<ItemDetail key={products.id} products={products} />}
        </div>
            
        </>
    )
}

export default ItemDetailContainer