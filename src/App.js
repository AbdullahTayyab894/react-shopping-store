import React, { useState } from "react";
import Menu from './component/card/Api'
import Detail from "./component/detail/Detail";
import Cart from "./component/use cart/Cart";
import Sidebar from './component/sidebar/Sidebar'
import SportShoes from './component/card/Shoe'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Slideshow from './component/home image/Image'
import WovenImageList from './component/new arival/Newarival'

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
          <Sidebar filterItem={filterItem} menuList={menuList} />
          <Routes>
            <Route path="/" element={
              <>
                <Slideshow />
                <SportShoes data={myData} />
                <WovenImageList />
              </>
            } />
            {/* <Route path="/" element={<SportShoes data={myData} />} /> */}
            <Route path="/detail:matchid" element={<Detail dataArray={myData} />} />
            <Route path="/shopping-cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;