
import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import Loader from '../Loader/Loader'


import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            const coleccionProductos = collection(db, 'products')
            const referenciaDoc = doc(coleccionProductos, id)

            getDoc(referenciaDoc)
                .then((result) => {
                    setProducts({
                        id: result.id,
                        ...result.data()
                    })
                })
                .catch((error) => console.log('error'))
                .finally(() => setLoading(false))
        }, 2000)
    }, [id])

    return (
        <>
            <div style={{ marginBottom: '10rem', marginTop: '2rem' }} className='d-flex justify-content-center flex-wrap align-content-around '>
                {loading ? <Loader /> : <ItemDetail key={products.id} products={products} />}
            </div>

        </>
    )
}

export default ItemDetailContainer