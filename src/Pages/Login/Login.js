import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // handle
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
           
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                <Typography  sx={{fontWeight: 600, color: '#0A5FA6', mt: 9}} variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button  sx={{ width: '30%', m: 1 }}
                         style={{ background: 'linear-gradient(to right bottom, #55D8EC , #0A3A95  )' }} 
                        type="submit" variant="contained">Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none',color:'#C2810D' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                </Grid>
           
        </Container>
    );
};

export default Login;