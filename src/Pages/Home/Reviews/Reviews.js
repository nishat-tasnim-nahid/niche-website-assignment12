import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    return (
        <Grid>
            <Typography variant="h3" component="h2"
                sx={{fontWeight: 600, color: '#0E6070 ', mt: 9}}>
                REVIEWS
            </Typography>
            <Box  sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <TableContainer sx={{mt:3}} style={{width:'500px'}} component={Paper}>
                <Table aria-label="order table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Review</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reviews.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.review}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </Grid>
    );
};

export default Reviews;