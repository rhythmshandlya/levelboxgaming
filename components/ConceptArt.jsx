import React from "react";
import ConceptArtCard from "./ConceptArtCard";

const ConceptArt = ({ data }) => {
  return (
    <div className="my-40">
      <div className="md:my-16">
        <h1 className="text-center text-3xl">Latest News & Press </h1>
        <div
          className="overflow-x-scroll flex md:mx-40 my-10 mx-5"
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
        <a className="bg-red-500 cursor-pointer w-40 px-3.5 py-2 border-2 border-red-500 hover:bg-white text-white hover:text-black font-medium rounded  hover:border-red-500">
          News Archives
        </a>
      </div>
    </div>
  );
};

export default ConceptArt;
