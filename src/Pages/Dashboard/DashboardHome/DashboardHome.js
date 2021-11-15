import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (
        <div>
             <Grid sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Orders></Orders>
                </Grid>
        </div>
    );
};

export default DashboardHome;