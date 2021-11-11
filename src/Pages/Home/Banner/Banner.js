import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import banner from '../../../Images/banner3.jpg'


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1}}>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: 'flex', alignItems: "center",  }}>
                <Grid item xs={12} sm={12} md={6} sx={{mt: 3 }}>
                    <img style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }} src={banner} alt="" />
                </Grid>

                <Grid item xs={12} sm={12} md={6} >
                    <Box>
                        <Typography variant="h3" component="h2"
                            sx={{
                                fontWeight: 600, color: '#B2B735', textAlign: 'left', m: 3, display: 'flex',
                                alignItems: 'center',
                            }}>
                            PICK THE BEST TOY FOR YOUR CHILD
                        </Typography>
                        <Typography variant="body1" component="h2" sx={{ fontWeight: 400, textAlign: 'left', m: 3, color: '#8D9048' }}>
                            Make play time blast with our finest toys
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;