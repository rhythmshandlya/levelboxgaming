import { t } from "i18next";

// import React from 'react'
const ConceptArtCard = (props) => {
  return (
    <div class="w-[350px] md:w-[400px] lg:w-[480px] overflow-hidden shadow-lg bg-[#434852] rounded-[30px] mb-6">
      <div>
        <img
          class="w-full"
          src={props.imageSrc}
          alt="Sunset in the mountains"
        />
        <div class="px-10 py-6">
          <div className="flex justify-between m-2">
            <div class="font-semibold text-xl mb-2">{t(props.title)}</div>
            <p class="text-white text-base my-auto">{props.date}</p>
          </div>
          <p class="text-white text-base">{t(props.summary)}</p>
        </div>
        <div class="px-8 pb-2">
          <a class="inline-block0 px-3 text-base mr-2 mb-2 cursor-pointer">
            {t("read_more")}
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ConceptArtCard;
