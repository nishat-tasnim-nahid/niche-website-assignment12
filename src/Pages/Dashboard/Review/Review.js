import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Review = () => {

    const handleOnBlur = e => {

    }
    const handleReviewSubmit = e => {

        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h3" component="h2"
                sx={{ fontWeight: 600, color: '#0E6070 ', m: 3 }}>
                Write Your Review
            </Typography>
            <form onSubmit={handleReviewSubmit}>
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outlined-size-small"
                    multiline
                    onBlur={handleOnBlur}
                    name="review"
                    defaultValue="Write review about this website"
                    size="small"
                />
                <br />
                <Button
                    sx={{ width: '15%', mt: 4 }}
                    style={{ background: 'linear-gradient(to right bottom, #55D8EC , #0A3A95 )' }}
                    type="submit"
                    variant="contained"
                >SUBMIT</Button>
            </form>
        </div>
    );
};

export default Review;