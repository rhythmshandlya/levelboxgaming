import React, { useState } from "react";
import LightNewsCard from "./LightNewsCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useNews from "../hooks/useNews";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export function LightNews() {
  const { t } = useTranslation();
  const news = useNews();
  const { theme } = useTheme();
  const slider = React.useRef(null);

  console.log("news", news);

  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    pauseOnDotsHover: true,
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
    <div
      className="flex flex-col align-middle max-w-[1100px] mx-auto my-20"
      id="conceptArt"
    >
      <h1 className="text-3xl font-semibold text-center  my-10">
        {t("concept_art")}
      </h1>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="flex flex-col">
          <Slider ref={slider} {...settings}>
            {news?.map((n, i) => {
              return (
                <div key={i} className="my-5 text-center">
                  <LightNewsCard news={n.card} id={i} />
                </div>
              );
            })}
          </Slider>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default LightNews;
