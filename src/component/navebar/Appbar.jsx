import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useCart } from "react-use-cart";
import { List, ListItem, Typography, Box } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import TemporaryDrawer from '../drawer cart/Addcart'
import './appbar.css'

export default function MainAppbar() {

    const { totalItems } = useCart();
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{
                background: "white", color: "black"
            }}>
                <Toolbar>
                    <Box onClick={ToggleSidebar}>
                        <MenuOutlinedIcon sx={{
                            fontSize: "40px",
                        }} />
                    </Box>
                    <Link to="/" style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "2rem",
                        cursor: "pointer",
                        flexGrow: 1,
                    }}>
                        <Typography variant="h4" component="div" sx={{
                            marginLeft: "50px",
                            "&:hover": {
                                color: "#D0BCA8"
                            }
                        }}>
                            Shopping Store
                        </Typography>
                    </Link>
                    <Badge badgeContent={totalItems} color="error">
                        <TemporaryDrawer />
                    </Badge>
                    <Box className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <Box className="sd-header" sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "15px",
                        }}>
                            <Typography className="mb-0">Categories</Typography>
                            <Box className="btn btn-primary" onClick={ToggleSidebar}><CloseIcon /></Box>
                        </Box>
                        <Box className="sd-body" sx={{
                            padding: "15px",
                            maxHeight: "calc(100vh - 67px)",
                            overflowX: "hidden",
                        }}>
                            <Box>
                                <List onClick={ToggleSidebar} >
                                    <Link to="about" style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}>
                                        <ListItem sx={{
                                            "&:hover": {
                                                color: "red",
                                                background: "black",
                                                borderRadius: "10px"
                                            }
                                        }}>About Us</ListItem>
                                    </Link>
                                    <Link to="contact" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem sx={{
                                            "&:hover": {
                                                color: "red",
                                                background: "black",
                                                borderRadius: "10px"
                                            }
                                        }}>Contact Us</ListItem>
                                    </Link>
                                    <Link to="acount" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem sx={{
                                            "&:hover": {
                                                color: "red",
                                                background: "black",
                                                borderRadius: "10px"
                                            }
                                        }}>Sign Up</ListItem>
                                    </Link>
                                    <Link to="acount" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem sx={{
                                            "&:hover": {
                                                color: "red",
                                                background: "black",
                                                borderRadius: "10px"
                                            }
                                        }}>Login</ListItem>
                                    </Link>
                                    <ListItem sx={{
                                        "&:hover": {
                                            color: "red",
                                            background: "black",
                                            borderRadius: "10px"
                                        }
                                    }}>Dashboard</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
