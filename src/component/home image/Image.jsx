import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
    "images/mens/shoe1.png",
    "images/mens/shoe2.png",
    "images/mens/shoe3.png",
    "images/mens/shoe4.png",
    "images/mens/shoe5.png",
];
const Slideshow = () => {
    return (
      <div className="slide-container"  style={{
        margin:"50px"
      }}>
        <h1 style={{
            textAlign:"center"
        }}>OUR RANGE</h1>
        <Slide>
         {images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div>
                <img src={slideImage} alt="" width="100%" height="500px" />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow