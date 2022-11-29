import { Box, Typography, Button, Grid } from "@mui/material";
import { useParams } from "react-router";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import React from "react";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Details = ({ myData }) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  let { matchid } = useParams();
  let getdata = myData.filter((item) => {
    if (matchid == +item.id) {
      return item;
    }
  });
  const { addItem } = useCart();
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none", }}>
        <Typography variant="h2" sx={{
          textAlign: "center",
          color: "black",
        }}>Shopping Store</Typography>
      </Link>
      {
        getdata.map((item) => {
          return (
            <Grid container spacing={5} margin="auto">
              <Grid item md={6} xs={12}>
                <Box width="400px">

                  <Box >
                    <Typography variant="h3"
                      sx={{
                        textAlign: "center",
                        fontFamily: "serif",
                      }}>{item.title}</Typography>
                    <Typography variant="h5"
                      sx={{
                        textAlign: "right",
                        color: "#d2d2d2",
                        paddingRight: "20px",
                        fontFamily: "sans-serif",
                      }}>{item.stock}</Typography>
                    <Typography variant="body"
                      sx={{
                        textAlign: "justify",
                        color: "#d2d2d2",
                        fontFamily: "serif",
                        height: "125px",
                        margin: "10px 20px 0px 20px",
                        lineHeight: "1.7em",
                        overflow: "hidden",
                      }}>{item.des}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}>
                    <Box>
                      <Typography variant="h5" sx={{
                        lineHeight: "2em",
                      }}>RS:{item.price}</Typography>
                    </Box>
                    <Box>
                      <Stack>
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                      </Stack>
                    </Box>
                  </Box>
                  <Box sx={{
                    mt: "20px",
                  }}>
                    <Button
                      disableRipple
                      onClick={() => {
                        addItem(item);
                        // toast.success("Added in Cart, Successfully!");
                      }}
                      sx={{
                        color: "#ffffff",
                        background: "green",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        width: "100%",
                        paddingY: "10px",
                        "&:hover": {
                          background: "black",
                        },
                      }}>Add to Cart</Button>
                  </Box>
                </Box>

              </Grid>
              <Grid item md={6} xs={12} className="img-zoom-container">
                <Box width="400px">

                <img id="myimage" src={item.img} alt="" width="400" height="320"
                  style={{
                    borderRadius: "7px 0 0 7px",
                  }} />
                  </Box>
              </Grid>
            </Grid>
          )
        })
      }
    </div >
  );
}
export default Details