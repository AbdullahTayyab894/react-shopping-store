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
import Showcard from './component/all item/Showcard'
import Shipping from './component/shipping detail/Shipping'
import About from "./component/about/About";
import Contact from './component/contact/Contact'


function App() {
  const [myArivalData, setMyArivalData] = useState(Menu);

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
              </>
            } />
            <Route path="/detail:matchid" element={<Detail myData={myArivalData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/acount" element={<Acount />} />
            <Route path="/stepper" element={<Shipping />} />
            <Route path="/home" element={<Showcard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;