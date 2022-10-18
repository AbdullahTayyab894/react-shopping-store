import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { List, ListItem, Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useCart } from "react-use-cart";
import Badge from '@mui/material/Badge';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './sidebar.css'


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

const ToggleSidebar = ({ filterItem, menuList }) => {
    const { totalItems } = useCart();
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <Box className="container-">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Box className="btn btn-primary" onClick={ToggleSidebar}>
                            <MenuIcon sx={{
                                fontSize:"40px",
                            }}/>
                        </Box>
                        <Box>
                            <Link to="/" style={{
                                textDecoration: "none",
                            }}>
                                <Typography variant="h4" color="black">Shoe Store</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Badge badgeContent={totalItems} color="error">
                                <Link to="/shopping-cart" style={{ textDecoration: "none", }}>
                                    <LocalMallOutlinedIcon
                                        style={{
                                            color: "black",
                                            fontSize: "2rem",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Link>
                            </Badge>
                        </Box>
                    </Box>
                </nav>
                <Box className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <Box className="sd-header">
                        <Typography className="mb-0">Search & Categories</Typography>
                        <Box className="btn btn-primary" onClick={ToggleSidebar}><CloseIcon /></Box>
                    </Box>
                    <Box className="sd-body">
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
                            <List>
                                {
                                    menuList.map((item, index) => {
                                        return (
                                            <ListItem onClick={() => filterItem(item)}><a className="sd-link">{item}</a></ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>
                        <Divider />
                    </Box>
                </Box>
                {/* <Box className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></Box> */}
            </Box>

        </>
    )
}
export default ToggleSidebar;