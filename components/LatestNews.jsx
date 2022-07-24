import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function SimpleSlider({ data, theme }) {
  var settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: theme == "dark" ? 2 : 2,
    slidesToScroll: 2,
    autoPlay: true,
    autoplaySpeed: 2000,
    infinite: true,
    rows: theme == "dark" ? 1 : 2,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col align-middle text-center my-40">
      <h1 className="lg:mb-14 text-3xl">Concept Art</h1>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <Slider {...settings}>
          {data.map((news, i) => {
            return (
              <div>
                <LatestNewsCard
                  imageSrc={news.image}
                  title={news.title}
                  date={news.date}
                  summary={news.description}
                />
              </div>
            );
          })}
        </Slider>
      </AnimationOnScroll>
    </div>
  );
}

export default SimpleSlider;
