import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ allProduct }) => {
    const { _id, name, img, description, price } = allProduct;
    return (
        <div>
            <Grid sx={{ backgroundColor: '#E2E5AF', p: 3, border: 4, borderRadius: 4, borderColor: '#787F14 ' }}>
                <img style={{
                    borderRadius: '5px',
                    height: '400px',
                    width: '100%'
                }} src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p className="px-3">{description}</p>
                <Link style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                    <Button
                        sx={{ width: '50%', mt: 4 }}
                        style={{ background: 'linear-gradient(to right bottom, #525B08, #BBC472 )' }}
                        type="submit"
                        variant="contained"
                    >
                        Buy Now
                    </Button>
                </Link>
            </Grid>
        </div>
    );
};

export default AllProduct;