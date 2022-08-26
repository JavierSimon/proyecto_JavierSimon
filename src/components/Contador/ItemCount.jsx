import React from 'react'

function ItemCount({ count, handleAumentar, handleRestar, onAdd }) {

    return (
        <div style={{ backgroundColor: 'lightcoral', textAlign: 'center', margin: '0 auto', padding: '5px' }}>

            <button onClick={() => {
                handleRestar()
            }}> - </button>

            <span style={{ padding: '5px' }}>Cantidad: {count}</span>

            <button onClick={() => {
                handleAumentar()
            }}> + </button>

            <div style={{ padding: '5px', margin: '2px' }}>
                <button onClick={()=>{
                    onAdd()
                }}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount


