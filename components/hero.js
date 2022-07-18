import Container from "./container";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Hero({ data }) {
  return (
    <div className="background-hero">
      <div className="hero-filter"></div>
      <div className="relative">
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce="true"
          offset="100"
        >
          <Container
            className={`flex w-ful flex-col mt-4 items-center justify-center text-center`}
            style={{ zIndex: 100 }}
          >
            <h2 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl dark:text-white">
              {data.heading}
            </h2>
            <p className="max-w-xl py-4 text-lg leading-normal text-white lg:text-xl xl:text-xl dark:text-gray-300">
              {data.subheading}
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="bg-red-500 w-40 px-3.5 py-2 m-1 hover:bg-white text-white hover:text-black font-medium rounded">
                Pre Order
              </button>
              <a
                href="#_"
                className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-500 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-red-500 transition duration-300 group-hover:text-white ease">
                  Explore
                </span>
              </a>
            </div>
          </Container>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
