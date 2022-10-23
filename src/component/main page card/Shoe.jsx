import { Box, Button, Container, Grid } from "@mui/material";
import CardStructure from "./shoeCard";
import { useState } from "react";

function SportShoes({ data }) {
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
    
  const sorted = data.sort((a,b)=>{
    return a.price < b.price ?-1:1
  })
   
  return (
    <Box py={0}>
      <Container>
        <Grid container spacing={3}>
          {sorted?.slice(0, next)?.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <CardStructure
                  pic={item.img}
                  title={item.title}
                  price={item.price}
                  product={item}
                />
              </Grid>
            );
          })}
          {next < data?.length && (
            <Button
              onClick={handleMoreImage}
              sx={{
                margin: "auto",
                mt: "50px",
                background: "white",
                color: "black",
                boxShadow: "0px 2px 4px black",
                "&:hover": {
                  boxShadow: "4px 6px 2px black",
                  background: "white",
                  color:"red"
                }
              }}
            >
              Load more
            </Button>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
export default SportShoes;