import { AnimationOnScroll } from "react-animation-on-scroll";
import useData from "./hooks/useData";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { hero } = useData();
  const { t } = useTranslation();

  const style = {
    backgroundImage: `url('${hero.image}')`,
  };
  return (
    <div style={style} className="background-hero" id="hero">
      <div className="hero-filter"></div>
      <div className="relative">
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOnce="true"
          offset={-50}
        >
          <div
            className={`flex w-ful flex-col mt-4 items-center justify-center text-center`}
            style={{ zIndex: 100 }}
          >
            <h2 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl dark:text-white">
              {t(hero.heading)}
            </h2>
            <p className="max-w-xl py-4 text-lg leading-normal text-white lg:text-xl xl:text-xl dark:text-gray-300">
              {t(hero.subheading)}
            </p>
            <div className="flex flex-wrap justify-center">
              <a
                href={hero.preOrder}
                className="bg-red-500 w-40 px-3.5 py-2 m-1 hover:bg-white text-white hover:text-black font-medium rounded"
              >
                {t("pre_order")}
              </a>
              <a
                href={hero.explore}
                className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-500 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-red-500 transition duration-300 group-hover:text-white ease">
                  {t("explore")}
                </span>
              </a>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
