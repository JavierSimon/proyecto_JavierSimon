import React, { useState, useEffect } from 'react'
import { data } from '../../mocks/mocksData'
import ItemList from './ItemList'


export const ItemListContainer = ({ greeting, bg, pd }) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        data       
            .then((res) => {
                setItems(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <>
            {/* <div style={{ backgroundColor: bg, padding: pd }}>
                <h2>El mensaje Greeting es: {greeting}</h2>
            </div> */}
            <div>
                {/* <h2>ItemList</h2> */}
                <h2>Loading: {loading ? 'cargando...' : '✅'}</h2>
                <h2>Error: {error ? error : 'Ninguno'}</h2>
                <ItemList items={items} />
            </div>
        </>
    )
}
