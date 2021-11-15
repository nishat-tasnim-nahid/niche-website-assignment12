import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

const Purchase = () => {
    const { user } = useAuth();
    const basicInfo = { name: user.displayName, email: user.email, phone: '' }
    const [userInfo, setUserInfo] = useState(basicInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setUserInfo(newInfo);
    }
    const handleBuyOrder = e => {
        // data collection
        const order = {
            ...userInfo
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order has been completed')
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <Navbar></Navbar>
            <Typography variant="h3" component="h2"
                sx={{ fontWeight: 600, color: '#0E6070 ', m: 3 }}>
                Plaese your order confirm
            </Typography>
            <form onSubmit={handleBuyOrder}>
                <TextField
                    disabled
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="displayName"
                    defaultValue={user.displayName}
                    size="small"
                /> <br />
                <TextField
                    disabled
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    defaultValue={user.email}
                    size="small"
                /><br />
                <TextField
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Type Your Phone Number"
                    size="small"
                /> <br />
                <Button type="submit" variant="contained">Buy</Button>
            </form>
        </div>
    );
};
export default Purchase;