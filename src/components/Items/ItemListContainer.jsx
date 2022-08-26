import React from 'react'

export const ItemListContainer = ({ greeting, bg, pd }) => {

    return (
        <>
            <div style={{ backgroundColor: bg, padding: pd }}>
                <h2>El mensaje Greeting es: {greeting}</h2>
            </div>
        </>
    )
}
