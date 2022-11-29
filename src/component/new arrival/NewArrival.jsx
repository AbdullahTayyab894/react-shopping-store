import React from 'react'
import { Grid, Card, CardMedia, Typography, CardActions, Button, CardContent } from "@mui/material";
import ArivalData from './newArrivalApi'
// import Details from './Details'
import { Link } from "react-router-dom";

import './style.css'

const NewArrival = () => {
    return (
        <div>
            <Typography variant="h3"
                style={{
                    textAlign: "center",
                    marginBottom: "40px"
                }}>
                Just Arrived
            </Typography>
            <Grid container>
                {
                    ArivalData.map((item, i) => {
                        const { img, price, title, id } = item;
                        return (
                            <Grid xs={12} md={3} sm={6}>
                                <Link to={`/detail${id}`} style={{ textDecoration: "none" }}>
                                    <Card sx={{
                                        maxWidth: 345,
                                        maxHeight: "400px",
                                        "&:hover": {
                                            cursor: "pointer",
                                        },
                                    }}
                                        className="img-hover-zoom img-hover-zoom--point-zoom" >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={img}
                                            alt="green iguana"
                                            sx={{
                                                height: "310px",
                                                width: "345px"
                                            }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" textAlign="center">
                                                {price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        </CardActions>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Button size="large" sx={{
                position: "absolute",
                left: "43%",
                right: "50px",
                width: "200px",
                color: "white",
                background: "black",
                marginTop: "20px",
                marginBottom: "20px",
            }}>Show More</Button>
        </div>
    )
}

export default NewArrival