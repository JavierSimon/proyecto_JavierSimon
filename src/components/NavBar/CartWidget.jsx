import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const CartWidget = ({ counter }) => {
    return (
        <>
            <span><ShoppingCartIcon color='warning'/> ({counter})</span>
        </>
    )
}
