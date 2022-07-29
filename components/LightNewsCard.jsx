import { useTranslation } from "react-i18next";

// import React from 'react'
const ConceptArtCard = ({ news, id }) => {
  const { t } = useTranslation();
  console.log(news);
  return (
    <div className="w-[350px] md:w-[380px] lg:w-[420px] dark:bg-[#434852] mx-auto">
      <div>
        <img
          className="w-full rounded-lg"
          src={news.image}
          alt="Sunset in the mountains"
        />
        <div className="pt-4 px-2">
          <div className="font-semibold text-xl mb-2">{t(news.title)}</div>
          <p className="dark:text-white text-black text-base my-2">
            {news.date}
          </p>
          <p className="dark:text-white text-black text-base">
            {t(news.description)}
            <a
              href={`/news/${id}`}
              className="inline px-3 text-base mr-2 mb-2 cursor-pointer"
            >
              {t("read_more")}
            </a>
          </p>
        </div>
        <div className="px-8 pb-2">{/*read more*/}</div>
        <br />
      </div>
    </div>
  );
};

export default ConceptArtCard;
