import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ItemCount from '../Contador/ItemCount';
import { useState } from 'react';



export default function ItemDetail({ products }) {
    const [count, setCount] = useState(1)
    const stock = 10;
    const { id, img, name, description, price } = products
    
  
    
    const handleAumentar = () => count < stock ? setCount(count + 1) : alert('¡Lo sentimos!No tenemos mas unidades.')

    const handleRestar = () => count > 0 ? setCount(count - 1) : alert('Por favor, seleccione al menos 1 unidad.')

    const onAdd = () => console.log(count)
    return (
        <>
            {/* {products.map(product => { */}

            <Card sx={{ maxWidth: 345 }} key={id} style={{ backgroundColor: 'lightblue', margin: '10px', border: '2px solid black' }}>
                <CardMedia
                    component="img"
                    height="30%"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', padding: '5px', borderBottom: '2px dashed black' }}>
                        $ {price}
                    </Typography>
                    <ItemCount
                        count={count}
                        handleAumentar={handleAumentar}
                        handleRestar={handleRestar}
                        onAdd={onAdd}
                    />
                </CardContent>
            </Card>



            {/* })} */}
        </>)

}