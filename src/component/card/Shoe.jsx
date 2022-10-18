import { Box, Container, Grid } from "@mui/material";
import CardStructure from "./shoeCard";
import { useState } from "react";

function SportShoes({data}) {
  const [sort,setSort] = useState("asc")
  const sorted = data.sort((a,b) =>{
    const isReversed = (sort === "asc")? 1:-1;
    return isReversed* a.title.localeCompare(b.title)
  })
  // const onSort = ()=>{
  //   setSort({sort})
  // }

  return (
    <Box py={0}>
      <Container>
        {/* <button onClick={()=>onSort('asc')}>asc sort</button>
        <button onClick={()=>onSort('dec')}>desc sort</button> */}
        <Grid container spacing={3}>
          {sorted.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <CardStructure
                  pic={item.img}
                  title={item.title}
                  price={item.price}
                  product={item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default SportShoes;
