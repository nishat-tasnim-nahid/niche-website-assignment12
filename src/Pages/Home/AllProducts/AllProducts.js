import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllProduct from '../AllProduct/AllProduct';
import './AllProducts.css';


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-fjord-63691.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Typography variant="h3" component="h2"
                sx={{ fontWeight: 600, color: '#0E6070 ', m: 4 }}>
                ALL PRODUCTS
            </Typography>
            <div className='allProducts'>
                {
                    allProducts.slice(6, 16).map(allProduct => <AllProduct
                        allProduct={allProduct}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;