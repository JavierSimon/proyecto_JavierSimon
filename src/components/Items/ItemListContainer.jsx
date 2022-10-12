import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'
import { db } from '../../firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'

export const ItemListContainer = ({ greeting, bg, pd }) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    const { categoriaId } = useParams()

    
    useEffect(() => {
        setLoading(true)
        const productos = categoriaId ? query(collection(db, 'products'), where('category', '==', categoriaId)) : collection(db, 'products');
        getDocs(productos)
            .then((result) => {
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })

                setItems(lista)
            })
            .catch((error) => setError('Error'))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <>
            <div style={{ marginBottom: '15rem' }}>
               
                <div>{loading ? <Loader /> : <ItemList items={items} />}</div>
                <h2> {error ? error : false}</h2>
            </div>
        </>
    )
}
