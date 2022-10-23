import { Box, Typography, Button } from "@mui/material";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

function CardStructure({ pic, title, price, product }) {
  const { addItem } = useCart();

  return (
    <Box className="container" >
      <img src={pic} alt="item view" width="80%" height="300px" className="image" />
      <Box className="overlay">
        <Box className="text" >
          <Typography variant="h6" color="white">
            {title}
          </Typography>
          <Typography variant="h5" color="red" >
            $ {price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "50px",
            }}>
            <Link to={`/detail${product.id}`} style={{ textDecoration: "none" }}>
              <InfoIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                  "&:hover": {
                    color: "red"
                  },
                }} />
            </Link>
            <ShoppingCartIcon
              sx={{
                width: "50px",
                height: "50px",
                "&:hover": {
                  color: "red"
                },
              }}
              onClick={() => {
                addItem(product);
                toast.success("Added in Cart, Successfully!");
              }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default CardStructure;