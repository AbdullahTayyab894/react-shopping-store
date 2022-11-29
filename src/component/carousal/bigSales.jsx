import sale1 from './sale1.png'
import sale2 from './sale2.png'
import sale3 from './sale3.png'
import sale4 from './sale4.png'

import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './styles.css'
import './sale.css'

export default class AutoPlayMethods extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div style={{
                marginTop:"65px",
            }}>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div className="img-hover-zoom img-hover-zoom--point-zoom">
                        <img src={sale1} alt="" />
                    </div>
                    <div className="img-hover-zoom img-hover-zoom--point-zoom">
                        <img src={sale2} alt="" />
                    </div>
                    <div className="img-hover-zoom img-hover-zoom--point-zoom">
                        <img src={sale3} alt="" />
                    </div>
                    <div className="img-hover-zoom img-hover-zoom--point-zoom">
                        <img src={sale4} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}