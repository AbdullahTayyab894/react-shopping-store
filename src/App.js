import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from 'react-toastify';
import Cart from "./component/main cart/Cart";

import MainAppbar from './component/navebar/Appbar';
import Detail from "./component/mainApi/Detail";
import Carousel from "./component/carousal/bigSales";
import WovenImageList from './component/main category/mainCategory';
import NewArrival from "./component/new arrival/NewArrival";
import Menu from './component/mainApi/mainApi'
import Video from "./component/media card/Video";
import Footer from "./component/footer/Footer";

import Acount from "./component/login signup/Acount";
// import Detail from "./component/detail/Detail";
// import SportShoes from './component/main page card/Shoe';
// import Slideshow from './component/slider/Image';
// import Showcard from './component/home page item/Showcard'
// import Searchbar from './component/home page item/FilterSortingSearch'
// import Shipping from './component/shipping detail/Shipping'


function App() {
  const [myArivalData, setMyArivalData] = useState(Menu);
  // const [myCetegoryData, setMyCategoryData] = useState(CategoryApi);

  // const uniqueList = [
  //   ... new Set(Menu.map((item) => {
  //     return item.category;
  //   })
  //   ), "All",
  // ]
  // const [menuList, setmenuList] = useState(uniqueList)

  // const filterItem = ((item) => {
  //   if (item === "All") {
  //     return setmyData(Menu)
  //   }

  //   const updatedData = Menu.filter((data) => {
  //     return data.category === item;
  //   });
  //   setmyData(updatedData);
  // });



  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <MainAppbar />
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <WovenImageList />
                <NewArrival />
                <Video />
                {/* <SportShoes data={myData} /> */}
                {/* <Slideshow /> */}
              </>
            } />
            <Route path="/detail:matchid" element={<Detail myData={myArivalData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/acount" element={<Acount />} />
            {/* <Route path="/stepper" element={<Shipping />} /> */}
            {/* <Route path="/home" element={<Showcard data={myData} filterItem={filterItem} menuList={menuList}/>} /> */}
          </Routes>
          <Footer />
          {/* <Footer filterItem={filterItem} menuList={menuList} /> */}
          <ToastContainer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;