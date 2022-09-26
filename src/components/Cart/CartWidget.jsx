import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../context/CartContext';

export const CartWidget = () => {
    const { cartQuantity } = useCart()

    return (
        <>
            <span className='btn btn-success'><ShoppingCartIcon color='warning' /> {cartQuantity() || ''}</span>
        </>
    )
}
