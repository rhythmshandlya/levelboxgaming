import React, { useState } from "react";
import LightNewsCard from "./LightNewsCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useNews from "../hooks/useNews";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import useData from "../hooks/useData";

export function LightNews() {
  const { t } = useTranslation();
  const news = useNews();
  const { newsArchive } = useData();
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
        {t("news_and_press")}
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
      <br />
      <br />
      <br />
      <div className="text-center">
        <a
          href={newsArchive}
          className="cursor-pointer w-40 mt-20 px-3.5 py-2 bg-red-500 text-white rounded-md"
        >
          {t("news_archives")}
        </a>
      </div>
    </div>
  );
}

export default LightNews;
