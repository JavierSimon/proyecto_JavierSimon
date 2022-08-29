import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'


export const ItemListContainer = ({ greeting, bg, pd }) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        let itemsPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    { id: 1, title: 'Adidas', price: 20000, picureUrl: '', description: 'Hermosa zapatilla adidas' },
                    { id: 2, title: 'Nike', price: 18000, picureUrl: '', description: 'Hermosa zapatilla nike' },
                    { id: 3, title: 'Pumas', price: 17500, picureUrl: '', description: 'Hermosa zapatilla puma' }
                ]);
                rej('ERROR')
            }, 2000)
        })

        itemsPromise
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
