import React from 'react'
import Item from './Item'

export default function ItemList({ items }) {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}
