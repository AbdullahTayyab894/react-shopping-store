import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Footer = ({ filterItem, menuList }) => {
    return (
        <div>
            <Grid container sx={{
                textAlign: "center",
                background: "black",
                color: "white",
                padding: "30px 20px 30px 20px"
            }}>
                <Grid item md={3} xs={12} >
                    <Typography variant='h5'>SHOPPING STORE</Typography>
                    <Typography variant="h6"><LocationOnIcon /> 22,KM feroz pur road lahore</Typography>
                    <Typography variant="h6"><EmailIcon /> abc@gmail.com</Typography>
                    <Typography variant="h6"><PhoneIcon /> 03000000000</Typography>
                </Grid>
                <Grid md={3} xs={12}>
                    <Typography variant='h5'>CATEGORY</Typography>
                    {
                        menuList.map((item, index) => {
                            return (
                                <Typography variant="h6" sx={{
                                    "&:hover": {
                                        color: "#D0BCA8",
                                        cursor: "pointer"
                                    }
                                }}
                                    onClick={() => filterItem(item)}
                                ><a >{item}</a>
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={3} xs={12} >
                    <Typography variant='h5'>INFORMATION</Typography>
                    <Typography variant="h6" sx={{
                        "&:hover": {
                            color: "#D0BCA8",
                            cursor: "pointer"
                        }
                    }}>About Us</Typography>
                    <Typography variant="h6" sx={{
                        "&:hover": {
                            color: "#D0BCA8",
                            cursor: "pointer"
                        }
                    }}>Contact Us</Typography>
                    <Typography variant="h6" sx={{
                        "&:hover": {
                            color: "#D0BCA8",
                            cursor: "pointer"
                        }
                    }}>FAQS</Typography>
                </Grid>
                <Grid md={3} xs={12} >
                    <Typography variant='h5'>NEWSLETTER SIGNUP</Typography>
                    <Typography variant="h6">Subcribe our newsletter to get 15% discount off your first purchase</Typography>
                    <Link to="acount" style={{
                        textDecoration:"none"
                    }}>
                        <Button sx={{
                            background: "white",
                            color: "black",
                            width: "200px",
                            height: "50px",
                            "&:hover": {
                                color: "#D0BCA8",
                                background: "white"
                            }
                        }}>Sign Up</Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container sx={{
                height: "60px",
                background: "#3C4048",
            }}>
                <Typography sx={{
                    mt: "20px",
                    color: "white",
                    ml: "100px"
                }}>
                    Copyright 2022 all right reserved
                </Typography>
            </Grid>
        </div >
    )
}
export default Footer