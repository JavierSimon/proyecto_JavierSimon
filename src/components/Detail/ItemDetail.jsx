import * as React from 'react';
import ItemCount from '../Contador/ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export default function ItemDetail({ products }) {
    const [count, setCount] = useState(1)
    const stock = 10;
    const [compra, setCompra] = useState(false)
    const { id, img, name, description, price } = products
    const navegar = useNavigate()
    const {addItem} = useCart()


    const handleAumentar = () => count < stock ? setCount(count + 1) : alert('¡Lo sentimos!No tenemos mas unidades.')

    const handleRestar = () => count > 0 ? setCount(count - 1) : alert('Por favor, seleccione al menos 1 unidad.')

    const onAdd = () => {
        console.log(`Compraste ${count} items del producto ${name}`)
        let purchase = {
            id,
            name,
            price,
            stock,
            img,
            quantity: count
        }
        setCompra(true)
        addItem(purchase)
        console.log(purchase)
    }

    return (
        <>

            <div className="card" style={{ width: '18rem' }} key={id}>
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body m-1">
                    <p className="card-title">{name}</p>
                    <p className="card-text">{description}</p>
                    <p className='card-text'>$ {price}</p>
                    {!compra ?
                        <ItemCount
                            count={count}
                            handleAumentar={handleAumentar}
                            handleRestar={handleRestar}
                            onAdd={onAdd}
                            setCount={setCount}
                        /> : <div className='d-flex justify-content-around'>
                            <button className='btn btn-warning m-1' onClick={() => navegar('/cart')}  >Ir al carrito</button>
                            <button className='btn btn-info m-1' onClick={() => navegar('/')} >Seguir Comprando</button>
                            </div>
                    }

                </div>
            </div>

            {/* })} */}
        </>)

}