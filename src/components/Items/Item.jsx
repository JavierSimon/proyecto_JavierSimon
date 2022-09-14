import React from 'react'
import { useNavigate } from 'react-router-dom'


function Item({ item }) {

    const { name, id, price, description, img } = item

    const navegar = useNavigate()

    return (
        <>
            <div className="card m-2" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt={name} style={{height:'15rem'}} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className=''>$ {price}</p>
                        <button className='btn btn-primary' onClick={()=> navegar(`/detalles/${id}`)}>Ver mas...</button>
                    </div>
            </div>
        </>
    )
}

export default Item
