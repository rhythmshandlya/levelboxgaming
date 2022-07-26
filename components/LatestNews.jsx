import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowRight = ({ className, style, onClick }) => (
  <button
    style={{ ...style, left: "52%", top: "480px" }}
    onClick={onClick}
    className={className}
  >
    <FontAwesomeIcon icon="fas fa-arrow-circle-right" />
  </button>
);
const ArrowLeft = ({ className, style, onClick }) => (
  <button
    style={{ ...style, left: "48%", top: "480px" }}
    onClick={onClick}
    className={className}
  >
    <div>back</div>
  </button>
);

export function SimpleSlider({ data, theme }) {
  var settings = {
    dots: theme == "dark" ? false : true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: theme == "dark" ? 3 : 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    infinite: true,
    rows: theme == "dark" ? 1 : 2,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    centerMode: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
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
    <div className="flex flex-col align-middle text-center my-40 ">
      <h1 className="text-3xl">Concept Art</h1>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <Slider {...settings}>
          {data.map((news, i) => {
            return (
              <div className="my-20">
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
