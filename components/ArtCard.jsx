import { useTranslation } from "react-i18next";

// import React from 'react'
const LatestNewsCard = (props) => {
  const { t } = useTranslation();
  return (
    <div className="w-fit rounded-xl w-[240px] md:w-[360px] mx-auto p-3">
      <img
        className="w-full rounded-[30px]"
        src={props.image}
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col content-center flex-wrap w-full text-low">
        <p className="text-xs font-normal break-normal p-2">{t(props.title)}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
