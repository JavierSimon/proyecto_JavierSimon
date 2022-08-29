import React from 'react'
import Item from './Item'

export default function ItemList({ items }) {
    return (
        <div>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}
