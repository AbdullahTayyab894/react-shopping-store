import { Box,Container, Grid, Typography } from "@mui/material";
import CardStructure from "./Allitem";
import Searchbar from "./FilterSortingSearch";

function Showcard({ data,filterItem, menuList }) {

  return (
    <Box py={5} sx={{
      mt:"50px"
    }}>
      <Searchbar filterItem={filterItem} menuList={menuList}/>
      <Typography variant="h4" sx={{
        textAlign:"center",
        mb:"20px"
      }}>
        All Items
      </Typography>
      <Container>
        <Grid container spacing={3}>
          {data.map((item, i) => {
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
        </Grid>
      </Container>
    </Box>
  );
}
export default Showcard;