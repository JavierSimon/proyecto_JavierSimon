import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCart } from '../../context/CartContext'

export default function Form() {
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    
    const [cartelito, setCartelito] = useState('')
    const [idCompra, setIdCompra] = useState('')
    const [apagarBtn, setApagarBtn] = useState(false)

    const {cart, cartTotal, clear} = useCart()

    function terminarCompra() {
        //estoy diciendo que si falta un dato no se ejecuta la funcion terminarCompra con el return
        if(!nombre || !tel || !email) {
            setCartelito('Te has olvidado de ingresar un dato');
            return
        };
     // si sale todo bien el boton pasa a true, osea que no pueda darle click al boton, para no generar mas compras 
        setApagarBtn(true)
     
        let order = {
            buyer: { name: nombre, phone: tel, email: email },
            carrito: cart.map((compra)=> {
                let datos = {
                    id: compra.id,
                    title: compra.name,
                    price: compra.price,
                }
                
                return datos
            }),
            date: Date(),
            total: cartTotal(),
        };
        
        // ingresar a firebase
        const db = getFirestore();
        const miColeccion = collection(db, 'orders')
        addDoc(miColeccion, order)
            .then(({id})=> {
                setIdCompra(id)
            })
            .catch((error)=> setApagarBtn(false))

    }

    return (
        <div style={{ height: '90vh' }} className='d-flex flex-column justify-content-center align-items-center'> 
        {/* aca esta diciendo que si hay un cartelito que lo muestre */}
        {cartelito && 'ERROR: ' + cartelito}
        <form style={{ margin: '5px auto'}} className='border p-3 text-center'>
            <h2>Confirmar Compra:</h2>
            <div className="m-2">
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type={"text"} placeholder='Ingrese su nombre' required />
            </div>
            
            <div className="m-2">
                <input value={tel} onChange={(e) => setTel(e.target.value)} type={"number"} placeholder='Ingrese su telefono' required />
            </div>
            
            <div className="m-2">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder='Ingrese su mail' required />
            </div>
           

        {
        !idCompra
            ? !apagarBtn 
                ? <button className='btn btn-success m-2' onClick={()=> { terminarCompra(); clear()}}>Finalizar</button> 
                : 'loading'
            : <p>Gracias por tu compra, tu ticket es: <span style={{color: 'red'}}>{idCompra}</span> </p> 
        }
        </form>


        </div>
    )
}
