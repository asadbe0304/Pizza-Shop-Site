import { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import Img from "./../assets/ps3.jpg";
import Img2 from "./../assets/ps4.jpg";
import Img3 from "./../assets/ps2.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="flex carousel__img items-center justify-center w-1/2">
        <Slider {...settings} className="w-full">
          <div className="w-full rounded-md ">
            <img
              src={Img2}
              className="desktop-img rounded-md"
              alt="hero pizza images"
            />
          </div>
          <div className="w-full rounded-md ">
            <img
              src={Img}
              className="desktop-img rounded-md"
              alt="hero pizza images"
            />
          </div>
          <div className="w-full rounded-md ">
            <img
              src={Img3}
              className="desktop-img rounded-md"
              alt="hero pizza images"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
