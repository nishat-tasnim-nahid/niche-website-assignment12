import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import Orders from '../Orders/Orders';
import Pay from '../Pay/Pay';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Review from '../Review/Review';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link style={{ textDecoration: 'none' }} to='/'><Button>HOME</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button>DASHBOARD</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/orders`}><Button>MY ORDER</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/review`}><Button>REVIEWS</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button>PAYMENT</Button></Link> <br />

            {
                admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>MAKE ADMIN</Button></Link> <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}><Button>ADD A PRODUCT</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}><Button>MANAGE ORDER</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}><Button>MANAGE ALL ORDERs</Button></Link>
                </Box>
            }
            {
                user?.email ?
                    <Button onClick={logOut} color="inherit">LOGOUT</Button>
                    :
                    <ListItemText><Link to='/login'>LOGIN</Link></ListItemText>
            }

            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* nesting route */}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders></Orders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;