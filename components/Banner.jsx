import React from "react";

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
        <div
          className={`relative w-[500px] ${
            data.align == "right" ? "ml-auto mr-0" : ""
          }`}
        >
          <h2 className="text-white font-bold lg:leading-tight lg:text-4xl dark:text-white">
            {data.title}
          </h2>
          <p className="text-lg">{data.description}</p>
          <a className="learn-more mt-8">Learn More</a>
        </div>
      </div>
    </>
  );
};

export default Banner;
