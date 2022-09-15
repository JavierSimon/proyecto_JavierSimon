import React from 'react'
//*version larga
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

//version corta
import { useCart } from '../../context/CartContext'

export default function Cart() {
  //*forma larga de agregar context
  // const {cart} = useContext(CartContext)

  //* forma corta
  const {cart} = useCart()
  console.log('carrito', cart)
    
  return (
    <div>{JSON.stringify(cart)}</div>
  )
}
