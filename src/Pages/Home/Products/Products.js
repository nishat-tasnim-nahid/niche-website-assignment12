import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Typography variant="h3" component="h2"
                sx={{fontWeight: 600, color: '#0E6070 ', mt: 9}}>
                PRODUCTS
            </Typography>
            <div className='products'>

                {
                    products.slice(0,6).map(product => <Product
                        key={product.name}
                        product={product}
                    ></Product>
                    )
                }
                

            </div>
        </div>
    );
};

export default Products;