
import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
// import { data } from '../../mocks/mocksData'

import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    // firabase
    useEffect(()=>{
        const coleccionProductos = collection(db, 'products')
        const referenciaDoc = doc(coleccionProductos, id)

        getDoc(referenciaDoc)
            .then((result)=> {
                setProducts({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch((error)=> console.log('error'))
            .finally(()=>setLoading(false))
    },[id])

    // mock
    // useEffect(()=>{
        
    //     setTimeout(()=>{
    //         data
    //         .then(res => {
    //             setProducts(res.find(item=> item.id === id))})
    //         .catch(error => console.log('hay un error'))
    //         .finally(()=>setLoading(false))
    //     }, 2000)
        
    // }, [id])


    return (
        <>
        <div style={{height: '90vh'}} className='d-flex justify-content-center flex-wrap align-content-around m-1'>
        {loading ? 'Cargando...':<ItemDetail key={products.id} products={products} />}
        </div>
            
        </>
    )
}

export default ItemDetailContainer