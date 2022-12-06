import { Box,Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CardStructure from "./Allitem";
import Searchbar from "./FilterSortingSearch";
import Menu from '../mainApi/mainApi'

  const Showcard = () => {

  const uniqueList = [
    ... new Set(Menu.map((item) => {
      return item.category;
    })
    ), "All",
  ]
  const [myData, setmyData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList)

  const filterItem = ((item) => {
    if (item === "All") {
      return setmyData(Menu)
    }

    const updatedData = Menu.filter((data) => {
      return data.category === item;
    });
    setmyData(updatedData);
  });

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
          {myData.map((item, i) => {
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