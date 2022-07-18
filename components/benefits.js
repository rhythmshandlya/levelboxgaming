import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits({ data, download }) {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <div>
            <Image src={data.image} width="521" height="482" alt="Benefits" />
          </div>
        </div>

        <div className={`flex flex-wrap`}>
          <div className="flex flex-col items-center mt-4 mx-auto">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-lg py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="flex flex-wrap justify-center w-full mt-3">
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
                width="95"
                height="35"
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
                width="95"
                height="35"
              />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
