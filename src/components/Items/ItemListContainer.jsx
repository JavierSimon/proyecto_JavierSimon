import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'
import { db } from '../../firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = ({ greeting, bg, pd }) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    const {categoriaId} = useParams()

    //firabase
    useEffect(()=>{
        setLoading(true)
        const productos = categoriaId? query(collection(db, 'products'),where('category', '==', categoriaId) ) :collection(db, 'products');
        getDocs(productos)
            .then((result)=>{
                const lista = result.docs.map((product)=>{
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })

                setItems(lista)
            })
            .catch((error)=>setError('Error'))
            .finally(()=>setLoading(false))
    }, [categoriaId])

    //mock
    // useEffect(() => {
    //     data     
    //         .then((res) => {
    //             if(categoriaId){
    //                 setItems(res.filter((item)=>item.category === categoriaId))
    //             } else {
    //                 setItems(res)
    //             }
    //         })
    //         .catch((err) => {
    //             setError(err)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [categoriaId])


    return (
        <>
            {/* <div style={{ backgroundColor: bg, padding: pd }}>
                <h2>El mensaje Greeting es: {greeting}</h2>
            </div> */}
            <div >
                {/* <h2>ItemList</h2> */}
                <div>{loading ? 'cargando...' : <ItemList items={items} />}</div>
                <h2> {error ? error : false}</h2>
                
            </div>
        </>
    )
}
