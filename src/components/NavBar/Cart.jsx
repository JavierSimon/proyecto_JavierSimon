import React from 'react'
import { useNavigate } from 'react-router-dom'
//*version larga
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

//version corta
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  //*forma larga de agregar context
  // const {cart} = useContext(CartContext)

  //* forma corta
  const {cart, cartTotal, clear} = useCart()
  console.log('carrito', cart)
  
  const navegar = useNavigate()

  return (
    <div className='border'>
      {
        !cart.length
        ? <div className='text-center p-2 d-flex flex-column align-items-center'>
          <h2>Tu carrito esta vacio!</h2>
          <p>Te invitamos a ver nuestros productos!</p>
          <button className='btn btn-warning' onClick={()=>navegar('/')}>Ir a comprar</button>
        </div>
        : <div>
          <h2>Tu carrito:</h2>
          {cart.map((compra)=>
            <CartItem compra={compra} key={compra.id}/>
          )}
          <div className='d-flex justify-content-center'>
          <span className='m-1'>Total a pagar: $ {cartTotal()} </span>
          <button className='btn btn-danger m-1' onClick={clear}>Vaciar carrito</button>
          <button className='btn btn-success m-1'> Terminar compra!</button>
          </div>
          
        </div>
      }
    </div>
  )
}
