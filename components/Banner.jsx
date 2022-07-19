import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Banner = ({ data }) => {
  console.clear();
  console.log(data.image);
  const style = {
    backgroundImage: `url('${data.image}')`,
  };
  return (
    <>
      <div className="background-coc flex" style={style}>
        <div className="banner-filter"></div>
        <AnimationOnScroll
          animateIn={`animate__fadeIn`}
          animateOnce="true"
          offset={-50}
        >
          <div
            className={`relative max-w-[500px] ${
              data.align == "right" ? "ml-auto mr-0" : ""
            }`}
          >
            <h2 className="text-white font-bold lg:leading-tight lg:text-4xl text-3xl dark:text-white">
              {data.title}
            </h2>
            <p className="text-xl">{data.description}</p>
            <a className="learn-more mt-8">Learn More</a>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Banner;
