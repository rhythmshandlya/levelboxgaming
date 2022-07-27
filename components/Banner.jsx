import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";

const Banner = ({ data }) => {
  const { t } = useTranslation();
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
              data.align == "right" ? "ml-auto mr-10" : "lg:ml-10"
            }`}
          >
            <h2 className="text-white font-bold lg:leading-tight lg:text-4xl text-3xl dark:text-white">
              {t(data.title)}
            </h2>
            <p className="text-sm lg:text-xl">{t(data.description)}</p>
            <a className="learn-more mt-8">{t("learn_more")}</a>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Banner;
