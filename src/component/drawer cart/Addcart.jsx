import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Typography, Button, Grid, } from "@mui/material";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {

    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
            role="presentation">
            {
                isEmpty ? (
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid gray",
                                height: "50px"
                            }}>
                            <Typography variant="h5"
                                sx={{
                                    lineHeight: "2em",
                                    pl: "10px",
                                }}>
                                Shopping Cart
                            </Typography>
                            <CloseIcon onClick={toggleDrawer(anchor, false)}
                                sx={{
                                    mr: "10px",
                                    mt: "12px",
                                    "&:hover": {
                                        color: "#D0BCA8"
                                    }
                                }} />
                        </Box>
                        <Box sx={{
                            textAlign: "center",
                            mt: "100px",
                        }}>
                            <ShoppingCartOutlinedIcon sx={{
                                fontSize: "50px",
                                color: "#D0BCA8"
                            }} />
                            <Typography sx={{
                                mt: "20px",
                                mb: "20px"
                            }}>
                                Your Cart is Empty
                            </Typography>
                            <Link to="home" style={{
                                textDecoration: "none"
                            }}>
                                <Button
                                    onClick={toggleDrawer(anchor, false)}
                                    sx={{
                                        background: "#D0BCA8",
                                        color: "white",
                                        "&:hover": {
                                            background: "#D0B8A1",
                                        }
                                    }}>
                                    Return to shop
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid gray",
                                height: "50px"
                            }}>
                            <Typography variant="h5"
                                sx={{
                                    lineHeight: "2em",
                                    pl: "10px",
                                }}>
                                Shopping Cart
                            </Typography>
                            <Button
                                variant='text'
                                onClick={toggleDrawer(anchor, false)}
                                sx={{
                                    background: "white",
                                    color: "black"
                                }}
                            >
                                <CloseIcon />
                            </Button>
                        </Box>
                        <Box>
                            {items.map((item, i) => {
                                return (
                                    <Grid container>
                                        <Box sx={{
                                            display: "flex",
                                            padding: "20px"
                                        }}>
                                            <Box>
                                                <img src={item.img} alt="Image" height="100pz" width="150px" />
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    textAlign: "center",
                                                }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{
                                                    textAlign: "center",
                                                    color: "red"
                                                }}>
                                                    $ : {item.price}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            width: "100%",
                                            justifyContent: "space-between",
                                            padding: "0px 30px 0px 20px"
                                        }}>
                                            <Box
                                                sx={{
                                                    border: "1px solid gray",
                                                    display: "flex",
                                                    width: "150px",
                                                    height: "30px",
                                                    justifyContent: "space-between",
                                                    pl: "20px",
                                                    pr: "20px",
                                                    pt: "8px",
                                                    cursor: "pointer"
                                                }}>
                                                <Typography
                                                    sx={{
                                                    }}
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }
                                                >
                                                    <RemoveIcon />
                                                </Typography>
                                                <Typography color="#23262f" fontSize="16px">
                                                    {item.quantity}
                                                </Typography>
                                                <Typography
                                                    sx={{

                                                    }}
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }
                                                >
                                                    <AddIcon />
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                border: "1px solid gray",
                                                width: "40px",
                                                textAlign: "center",
                                            }}>
                                                <Typography
                                                    sx={{
                                                        mt: "5px"
                                                    }}
                                                    onClick={() => {
                                                        removeItem(item.id);
                                                        toast.error("Product removed!!!");
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                            }
                            <Box sx={{
                                padding: "20px 30px 0px 20px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography>
                                        Subtotal:
                                    </Typography>
                                    <Typography>
                                        RS: {cartTotal}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: "100%",
                                    mt: "20px"
                                }}>
                                    <Button onClick={() => emptyCart()} sx={{
                                        width: "100%",
                                        margin: "auto",
                                        background: "black",
                                        color: "white",
                                        mb: "10px",
                                        "&:hover": {
                                            background: "black",
                                            color: "white",
                                            boxShadow: "2px 4px 6px gray"
                                        }
                                    }}>Clear cart</Button>
                                    <Link to="cart"
                                        style={{
                                            textDecoration: "none"
                                        }}>
                                        <Button
                                            sx={{
                                                width: "100%",
                                                margin: "auto",
                                                background: "black",
                                                color: "white",
                                                "&:hover": {
                                                    background: "black",
                                                    color: "white",
                                                    boxShadow: "2px 4px 8px gray"
                                                }
                                            }}
                                            onClick={toggleDrawer(anchor, false)}>
                                            View Cart
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Box >
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <ShoppingCartOutlinedIcon onClick={toggleDrawer(anchor, true)} />
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
