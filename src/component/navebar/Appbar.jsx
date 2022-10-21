import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useCart } from "react-use-cart";
import { List, ListItem, Typography, Box, Divider } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import TemporaryDrawer from '../drawer cart/Addcart'
import './appbar.css'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default function ButtonAppBar({ filterItem, menuList }) {

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
                            <Typography className="mb-0">Search & Categories</Typography>
                            <Box className="btn btn-primary" onClick={ToggleSidebar}><CloseIcon /></Box>
                        </Box>
                        <Box className="sd-body" sx={{
                            padding: "15px",
                            maxHeight: "calc(100vh - 67px)",
                            overflowX: "hidden",
                        }}>
                            <Box>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Box>
                            <Divider />
                            <Box>
                                <List onClick={ToggleSidebar} >
                                    {
                                        menuList.map((item, index) => {
                                            return (
                                                <ListItem className="sd-link"
                                                    onClick={() => filterItem(item)}
                                                ><a >{item}</a>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
