import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function SimpleSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoPlay: true,
    autoPlaySpeed: 500,
    infinite: true,
    rows: 2,
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
    <div className="flex flex-col align-middle text-center lg:mt-24 mb-10 lg:ml-24 lg:mr-24">
      <h1 className="font-bold lg:mb-14 text-3xl">Latest News</h1>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce="true"
        offset={-50}
      >
        <Slider {...settings}>
          {data.map((news) => {
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
