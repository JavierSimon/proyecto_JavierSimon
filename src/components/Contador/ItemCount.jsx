import React from 'react'

function ItemCount({ count, handleAumentar, handleRestar, onAdd, setCount }) {

    return (
        <div className='bg-light' style={{ textAlign: 'center', margin: '0 auto', padding: '5px' }}>

            <button className='btn btn-danger' onClick={() => {
                handleRestar()
            }}> - </button>

            <span style={{ padding: '5px' }}>Cantidad: {count}</span>

            <button className='btn btn-success' onClick={() => {
                handleAumentar()
            }}> + </button>

            <div style={{ padding: '5px', margin: '2px' }}>
                <button className='btn btn-primary' onClick={() => {
                    onAdd()
                }}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount


