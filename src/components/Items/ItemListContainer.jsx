import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../mocks/mocksData'

import ItemList from './ItemList'


export const ItemListContainer = ({ greeting, bg, pd }) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    const {categoriaId} = useParams()

    useEffect(() => {
        data     
            .then((res) => {
                if(categoriaId){
                    setItems(res.filter((item)=>item.category === categoriaId))
                } else {
                    setItems(res)
                }
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoriaId])


    return (
        <>
            {/* <div style={{ backgroundColor: bg, padding: pd }}>
                <h2>El mensaje Greeting es: {greeting}</h2>
            </div> */}
            <div>
                {/* <h2>ItemList</h2> */}
                <div>{loading ? 'cargando...' : <ItemList items={items} />}</div>
                <h2> {error ? error : false}</h2>
                
            </div>
        </>
    )
}
