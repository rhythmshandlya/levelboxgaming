import React, { useState } from "react";
import ArtCard from "./ArtCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useData from "../hooks/useData";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { ArrowsLeft, ArrowsRight } from "./Icons/Arrows";

export function SimpleSlider() {
  const { t } = useTranslation();
  const { art } = useData();
  const { theme } = useTheme();
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    pauseOnDotsHover: true,
    centerMode: true,
    prevArrow: <></>,
    nextArrow: <></>,
    centerPadding: "10",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div
      className="flex flex-col align-middle text-center md:mt-36 my-10"
      id="conceptArt"
      style={{ display: theme == "dark" ? "" : "none" }}
    >
      <h1 className="text-3xl font-semibold">{t("concept_art")}</h1>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="lg:h-[450px] h-[300px]">
          <Slider ref={slider} {...settings}>
            {art.map((news, i) => {
              return (
                <div key={i} className="md:mb-5 md:mt-20 mt-16">
                  <ArtCard image={news.image} title={news.title} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex justify-center p-6 md:p-40 lg:p-6">
          <button
            className="p-3 "
            style={{ outline: "none" }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <ArrowsLeft />
          </button>
          <button
            style={{ outline: "none" }}
            className="p-3"
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowsRight />
          </button>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default SimpleSlider;
