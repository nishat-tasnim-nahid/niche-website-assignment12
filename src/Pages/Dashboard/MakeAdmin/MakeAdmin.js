import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess,setAdminSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://pacific-fjord-63691.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setEmail('')
                    setAdminSuccess(true)
                }
                
            })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Admin making</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button sx={{ width: '25%', m: 1 }}
                    style={{ background: 'linear-gradient(to right bottom, #55D8EC , #0A3A95  )' }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {adminSuccess?.email && <Alert severity="success">Admin Created successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;