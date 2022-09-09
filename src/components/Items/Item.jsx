import React from 'react'
import { useNavigate } from 'react-router-dom'


function Item({ item }) {

    const { name, id, price, description, img } = item

    const navegar = useNavigate()

    return (
        <>
            <div style={{ backgroundColor: 'lightblue', padding: '5px', margin: '5px' }}>
                <h2>Titulo: {name} </h2>
                <p>id:{id} <span>price:${price}</span></p>
                <img src={img} alt={name} width='200px' height='200px' />
                <p>{description}</p>

                <button className='btn btn-primary' onClick={()=> navegar(`/detalles/${id}`)}>Ver mas...</button>

            </div>
        </>
    )
}

export default Item
