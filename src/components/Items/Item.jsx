import React from 'react'

function Item({ item }) {

    const { title, id, price, pictureUrl, description } = item

    return (
        <>
            <div style={{ backgroundColor: 'lightblue', padding: '5px', margin: '5px' }}>
                <h2>Titulo: {title} </h2>
                <p>id:{id} <span>price:${price}</span></p>
                <img src={pictureUrl} alt={title} />
                <p>{description}</p>
            </div>

        </>
    )
}

export default Item