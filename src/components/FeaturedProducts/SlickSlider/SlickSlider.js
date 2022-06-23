import React, { Component } from "react";
import Slider from "react-slick";
import { ImagesContainer } from "../FeaturedProducts.style";

import "./SlickSlider.style.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'blue'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'blue' }}
      onClick={onClick}
    />
  );
}

export default class SlickSlider extends Component {
  constructor(props){
    super();
    this.state = {
      data: props.data
    }
  }
  render() {
    // console.log("state:",this.state.data);
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className="nextArrow"/>,
      prevArrow: <SamplePrevArrow className="previousArrow"/>
    };
    return (
      <div  className="sliderContiner">
        <Slider {...settings}>
            {this.state.data.map(
              item =>
              <div className="productCard"> 
                <div className="imgCard">
                  <img src={item['images']}/>
                </div> 
                <div className="cardDetails">
                  <p className="pName">{item['name']}</p>
                  <p className="pPrice">{item['price']}</p>
                </div>
              </div>
            )}

        </Slider>
      </div>
    );
  }
}