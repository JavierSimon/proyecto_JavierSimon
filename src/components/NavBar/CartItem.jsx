import React from 'react'
import { useCart } from '../../context/CartContext'

export default function CartItem({compra}) {
    const {removeItem} = useCart()
    return (
        <div className='border' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2rem' }}>
            <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
            <span>Producto: {compra.name}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Precio: $ {compra.price}</span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
        </div>
    )
}
