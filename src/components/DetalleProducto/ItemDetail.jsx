import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function ItemDetail({ products }) {

    const { id, image, title, description, price } = products

    return (
        <>
            {/* {products.map(product => { */}

            <Card sx={{ maxWidth: 345 }} key={id} style={{ backgroundColor: 'lightblue', margin: '10px', border: '2px solid black' }}>
                <CardMedia
                    component="img"
                    height="30%"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', padding: '5px', borderBottom: '2px dashed black' }}>
                        $ {price}
                    </Typography>
                </CardContent>
            </Card>



            {/* })} */}
        </>)

}