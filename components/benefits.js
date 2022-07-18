import Image from "next/image";
import React from "react";
import Container from "./container";

const InstallOn = ({ download }) => {
  return (
    <div className="flex flex-wrap">
      <a
        href={download.playStore.link}
        target="_blank"
        rel="noopener"
        className="relative block w-40"
      >
        <Image
          src={download.playStore.image}
          layout="responsive"
          alt="Android"
          width="70"
          height="21"
        />
      </a>
      <a
        href={download.appStore.link}
        target="_blank"
        rel="noopener"
        className="relative block w-40"
      >
        <Image
          src={download.appStore.image}
          layout="responsive"
          alt="Android"
          width="70"
          height="21"
        />
      </a>
    </div>
  );
};

export default function Benefits({ data, download }) {
  return (
    <>
      <div className="flex flex-wrap justify-start lg:flex-nowrap">
        <div className={`flex items-start justify-start w-full lg:w-1/2`}>
          <div>
            <Image src={data.image} width="521" height="482" alt="Benefits" />
          </div>
        </div>

        <div className={`flex flex-wrap`}>
          <div className="flex flex-col items-start lg:mt-32 mx-8 mb-16 lg:mx-0">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-lg py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          <InstallOn download={download} />
          </div>
        </div>
      </div>
    </>
  );
}
