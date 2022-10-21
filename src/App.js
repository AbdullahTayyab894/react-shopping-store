import React, { useState } from "react";
import Menu from './component/main page card/Api'
import Detail from "./component/detail/Detail";
import Cart from "./component/main cart/Cart";
import SportShoes from './component/main page card/Shoe';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Slideshow from './component/slider/Image';
import WovenImageList from './component/new arival/Newarival';
import ButtonAppBar from './component/navebar/Appbar';
import Sales from "./component/item sales/Sales";
import Showcard from './component/home page item/Showcard'
import Footer from "./component/footer/Footer";
import Video from "./component/media card/Video";

function App() {
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
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <ButtonAppBar filterItem={filterItem} menuList={menuList} />
          <Routes>
            <Route path="/" element={
              <>
                <Sales />
                <SportShoes data={myData} />
                <Slideshow />
                <WovenImageList />
                <Video />
              </>
            } />
            <Route path="/detail:matchid" element={<Detail dataArray={myData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Showcard  data={myData} />} />
          </Routes>
          <Footer filterItem={filterItem} menuList={menuList}/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;