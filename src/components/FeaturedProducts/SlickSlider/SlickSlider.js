import React, { Component } from "react";
import Slider from "react-slick";
import { ImagesContainer } from "../FeaturedProducts.style";
import ProductItem from "../ProductItem";

import "./SlickSlider.style.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function SlickSlider (props) {
  const [slidesToShow, setSlidesToShow] = React.useState(Math.trunc(window.innerWidth / 290));

  const width = () => {return window.addEventListener('resize', function(event){
    setSlidesToShow(Math.trunc(window.innerWidth / 290))
  })}
  width();
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="nextArrow"/>,
    prevArrow: <SamplePrevArrow className="previousArrow"/>
  };
  
  return (
    <div  className="sliderContiner">
      <Slider {...settings}>
          {!!props.data && props.data.length > 0 && props.data.map(
            item =>
            <ProductItem key={item._id} item={item}/>
          )}

      </Slider>
    </div>
  );
}