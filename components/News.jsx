import React from "react";
import { useTranslation } from "react-i18next";
import useData from "./hooks/useData";
import NewsCard from "./NewsCard";

const ConceptArt = ({ data }) => {
  const { t } = useTranslation();

  const { news } = useData();
  return (
    <div className="md:my-36 my-20">
      <div className="md:my-16">
        <h1 className="text-center font-semibold text-3xl">
          {t("news_and_press")}
        </h1>
        <div
          className="overflow-x-scroll flex md:mx-10 my-10 mx-5"
          id="style-2"
        >
          {news.map((news, i) => {
            return (
              <div key={i} className="md:m-10 m-4">
                <NewsCard
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
          {t("news_archives")}
        </a>
      </div>
    </div>
  );
};

export default ConceptArt;
