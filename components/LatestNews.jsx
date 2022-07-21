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
    slidesToShow: theme == "dark" ? 3 : 2,
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
  if (theme == "dark") {
    settings.customPaging = function (i) {
      return <div className="slider"></div>;
    };
  }

  return (
    <div className="flex flex-col align-middle text-center lg:mt-24 mb-10 lg:ml-24 lg:mr-24">
      <h1 className="font-bold lg:mb-14 text-3xl">Latest News</h1>
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
