import React from "react";
import LatestNewsCard from "./LatestNewsCard";

import Carousel from "nuka-carousel";

const LatestNews = ({ data }) => {
  // var a=`/../public/img/News-Thumbnail(${i}).png`;
  const renderSlides = () =>
    [1, 2, 3].map((num) => (
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap">
          {data.map((news) => {
            return (
              <LatestNewsCard
                imageSrc={news.image}
                title={news.title}
                date={news.date}
                summary={news.description}
              />
            );
          })}
        </div>
      </div>
    ));
  return (
    <div className="text-center ">
      <h1 className="font-bold mt-8 mb-8 text-3xl">Latest News</h1>
      <div className="overflow-hidden w-full mr-256 ml-256 ">
        <Carousel
          autoplay={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button style={{ display: "none" }} onClick={previousSlide}>
              Previous
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button style={{ display: "none" }} onClick={nextSlide}>
              Next
            </button>
          )}
          slidesToShow={1}
          cellAlign="center"
        >
          {renderSlides()}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestNews;
