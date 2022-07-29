import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import useData from "../hooks/useData";
import InstallOn from "./Icons/InstallOn";

export default function Benefits() {
  const { download, bannerSoon } = useData();
  const { t } = useTranslation();
  return (
    <>
      <div
        className="flex flex-wrap justify-start dark:mt-40 lg:flex-nowrap"
        id="bannerSoon"
      >
        <div className={`flex items-start justify-start w-full lg:w-1/2`}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce="true"
            offset={-50}
          >
            <div>
              <img
                src={bannerSoon.image}
                width="521px"
                height="482px"
                alt="Benefits"
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`flex flex-wrap`}>
          <div className="flex flex-col items-start justify-center  mx-5 lg:mx-0">
            <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {t(bannerSoon.title)}
            </h3>

            <p className="max-w-lg py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {t(bannerSoon.description)}
            </p>
            <InstallOn download={download} />
          </div>
        </div>
      </div>
    </>
  );
}
