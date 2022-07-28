import { useTranslation } from "react-i18next";

// import React from 'react'
const ConceptArtCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="w-[350px] md:w-[400px] lg:w-[480px] overflow-hidden shadow-lg dark:bg-[#434852] rounded-[30px] mb-6">
      <div>
        <img
          className="w-full"
          src={props.imageSrc}
          alt="Sunset in the mountains"
        />
        <div className="px-10 py-6">
          <div className="flex justify-between m-2">
            <div className="font-semibold text-xl mb-2">{t(props.title)}</div>
            <p className="dark:text-white text-black text-base my-auto">
              {props.date}
            </p>
          </div>
          <p className="dark:text-white text-black text-base">
            {t(props.summary)}
          </p>
        </div>
        <div className="px-8 pb-2">
          <a
            href={`/news/${props.id}`}
            className="inline-block0 px-3 text-base mr-2 mb-2 cursor-pointer"
          >
            {t("read_more")}
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ConceptArtCard;
