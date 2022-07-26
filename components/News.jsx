import React from "react";
import ConceptArtCard from "./NewsCard";

const ConceptArt = ({ data }) => {
  return (
    <div className="md:my-36 my-20">
      <div className="md:my-16">
        <h1 className="text-center font-semibold text-3xl">
          Latest News & Press{" "}
        </h1>
        <div
          className="overflow-x-scroll flex md:mx-10 my-10 mx-5"
          id="style-2"
        >
          {data.map((news, i) => {
            return (
              <div className="md:m-10 m-4">
                <ConceptArtCard
                  imageSrc={news.image}
                  title={news.title}
                  date={news.date}
                  summary={news.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <a className="bg-white cursor-pointer w-40 px-3.5 py-2 hover:shadow-lg text-black font-medium rounded  hover:border-red-500">
          News Archives
        </a>
      </div>
    </div>
  );
};

export default ConceptArt;