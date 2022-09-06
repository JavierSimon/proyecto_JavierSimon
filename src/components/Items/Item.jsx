import React from 'react'

function Item({ item }) {

    const { title, id, price, description, image } = item
   
    return (
        <>
            <div style={{ backgroundColor: 'lightblue', padding: '5px', margin: '5px' }}>
                <h2>Titulo: {title} </h2>
                <p>id:{id} <span>price:${price}</span></p>
                <img src={image} alt={title} width='200px' height='200px'/>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Item
