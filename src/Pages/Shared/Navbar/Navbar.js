import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const theme = useTheme()
    // style
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        title: {
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            }
        },
        mobileNavItem: {
            color: '#5E6724',
            textDecoration: 'none'
        }
    })
    const { navItem, navIcon, navItemContainer, title, mobileNavItem } = useStyle()
    const [state, setState] = React.useState(false);

    const { user, logOut } = useAuth();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={title} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to='/'><Button color="inherit">HOME</Button></Link>
                            <Link className={navItem} to='/purchase'><Button color="inherit">PURCHASE</Button></Link>
                            <Link className={navItem} to='/allProducts'><Button color="inherit">allProducts</Button></Link>
                            {
                                user?.email ?
                                    <Button onClick={logOut} color="inherit">Logout</Button>
                                    :
                                    <Link className={navItem} to='/login'><Button color="inherit">LOGIN</Button> </Link>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button >
                                    <ListItemText>
                                        <Link className={mobileNavItem} to='/'>HOME</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button >
                                    <ListItemText><Link className={mobileNavItem} to='/purchase'>PURCHASE</Link></ListItemText>
                                </ListItem>
                                <ListItem button >
                                    <ListItemText><Link className={mobileNavItem} to='/allProducts'>allProducts</Link></ListItemText>
                                </ListItem>
                                <ListItem button >
                                    <ListItemText><Link className={mobileNavItem} to='/login'>LOGIN</Link></ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navbar;