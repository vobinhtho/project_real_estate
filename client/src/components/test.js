import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";

export default function test() {
  return (
    <div className="App">
      <AliceCarousel autoPlay={true} autoPlayInterval="1000">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </AliceCarousel>
    </div>
  );
}
