import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import banner2 from '../../../Images/banner2.jpg'


const SecondBanner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: 'flex', alignItems: "center", }}>
                <Grid item xs={12} sm={12} md={6} >
                    <Box>
                        <Typography variant="h3" component="h2"
                            sx={{
                                fontWeight: 600, color: '#B2B735', textAlign: 'left', m: 3, display: 'flex',
                                alignItems: 'center',
                            }}>
                            We Don’t Just Sell Toys!
                        </Typography>
                        <Typography variant="body1" component="h2" sx={{ fontWeight: 400, textAlign: 'left', m: 3, color: '#8D9048' }}>
                            We offer phenomenal collections of kids’ toys online that encourage early development, promote learning, and stimulate the imagination. At HABA, you can buy toys and games for all age groups that the whole family will love!Our family-owned and operated German toy company has been creating educational and fun children’s toys and games for over 80 years.<br /><br /> We have impressive selections of quality toys for babies, toddlers, and children.Our products are designed for parents and grandparents to enjoy with the special little ones in their lives. Your family will cherish the fun memories they create while playing, laughing, and learning with HABA toys for years to come.<br /><br />Feel confident you’re buying children’s toys that strengthen crucial developmental skills, benefit educational growth, inspire playful activity, and spark creativity. Explore incredible collections of kids’ toys online, here at HABA USA!
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ mt: 3 }}>
                    <img style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center' }} src={banner2} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SecondBanner;