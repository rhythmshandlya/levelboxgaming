import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Slider from "react-slick";

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
  };
  return (
    <div className="flex flex-col align-middle text-center mt-24 mb-10 ml-24 mr-24">
      <h1 className="font-bold mb-14 text-3xl">Latest News</h1>
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
    </div>
  );
}

export default SimpleSlider;
