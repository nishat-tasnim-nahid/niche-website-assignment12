
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([])
    useEffect(() => {
        fetch('./toys.json')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
            
    }, [])
    return (
        <div>

            <Typography variant="h3" component="h2"
                sx={{ fontWeight: 600, color: '#0E6070 ', mt: 9 }}>
                PRODUCTS
            </Typography>
            <div >

                {
                    moreProducts.map(moreProduct => <MoreProduct
    
                        moreProduct={moreProduct}
                    ></MoreProduct>
                    )
                }


            </div>

        </div>
    );
};

export default MoreProducts;