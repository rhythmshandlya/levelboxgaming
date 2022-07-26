import React, { useState } from "react";
import LatestNewsCard from "./ArtCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function SimpleSlider({ data, theme }) {
  const slider = React.useRef(null);

  var settings = {
    dots: theme == "dark" ? false : true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: theme == "dark" ? 1 : 2,
    pauseOnDotsHover: true,
    centerMode: true,
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
      <h1 className="text-3xl">Concept Art</h1>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <Slider ref={slider} {...settings}>
          {data.map((news, i) => {
            return (
              <div className="mt-20 mb-5 mx-14">
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
      <div className="flex justify-center">
        <button
          className="p-3 "
          style={{ outline: "none" }}
          onClick={() => slider?.current?.slickPrev()}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" color="white" />
        </button>
        <button
          style={{ outline: "none" }}
          className="p-3 focus:outline-0 outline-inherit"
          onClick={() => slider?.current?.slickNext()}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" color="white" />
        </button>
      </div>
    </div>
  );
}

export default SimpleSlider;
