import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#4E4E4B', m:2, mt:7, p: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                <Grid item xs={2} sm={4} md={3} >
                    <Typography variant="h5" component="h2">
                        INFORMATION
                    </Typography>
                   
                    <Typography variant="body2" component="h2">
                        About Us
                    </Typography>
                    <Typography variant="body2" component="h2">
                        Search Terms
                    </Typography>
                    <Typography variant="body2" component="h2">
                        Advanced Search
                    </Typography>
                    <Typography variant="body2" component="h2">
                        Contact Us
                    </Typography>
                  </Grid>
                <Grid item xs={2} sm={4} md={3} >
                    <Typography variant="h5" component="h2">
                        CONTACT US
                    </Typography>
                   
                    <Typography variant="body2" component="h2">
                        123 Main Street, Anytown, CA 12345 USA
                    </Typography>
                    <Typography variant="body2" component="h2">
                       +1 800 123 1234/ +84 123 456 79
                    </Typography>
                    <Typography variant="body2" component="h2">
                        sales@yoursite.com
                    </Typography>
                  </Grid>
                <Grid item xs={2} sm={4} md={3} >
                    <Typography variant="h5" component="h2">
                        OUR SUPPORT
                    </Typography>
                   
                    <Typography variant="body2" component="h2">
                        Net Transaction
                    </Typography>
                    <Typography variant="body2" component="h2">
                        My Account
                    </Typography>
                    <Typography variant="body2" component="h2">
                       Return Policy
                    </Typography>
                    <Typography variant="body2" component="h2">
                       Testimonial
                    </Typography>
                  </Grid>
                <Grid item xs={2} sm={4} md={3} >
                    <Typography variant="h5" component="h2">
                        MY ACCOUNT
                    </Typography>
                   
                    <Typography variant="body2" component="h2">
                       My Product
                    </Typography>
                    <Typography variant="body2" component="h2">
                        My Orders
                    </Typography>
                    <Typography variant="body2" component="h2">
                        My Address
                    </Typography>
                    <Typography variant="body2" component="h2">
                        Privacy Policy
                    </Typography>
                  </Grid>
                
            </Grid>
        </Box>
    );
};

export default Footer;