import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
}


export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="w-full px-5">
        <Slider {...settings}>
          <Cards image={image1} tittle={"Simulations 1"} subTittle={"Simulations are a powerful educational."} />
          <Cards image={image2} tittle={"Your Videos 1"} subTittle={"Lorem ipsum dolor amet,consectetur."} />
          <Cards image={image1} tittle={"Simulations 2"} subTittle={"Simulations are a powerful educational."} />
          <Cards image={image2} tittle={"Your Videos 2"} subTittle={"Lorem ipsum dolor amet,consectetur."} />
        </Slider>
      </div>
    </>
  );
}
