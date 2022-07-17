import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits({ data }) {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <div>
            <Image src={data.image} width="521" height="482" alt="Benefits" />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="flex w-full mt-3">
              <a
                href={data.android}
                target="_blank"
                rel="noopener"
                className="relative block w-40 mr-5"
              >
                <Image
                  src="/img/getOnPlayStore.png"
                  layout="responsive"
                  alt="Android"
                  width="120"
                  height="37"
                />
              </a>
              <a
                href={data.ios}
                target="_blank"
                rel="noopener"
                className="relative block w-40"
              >
                <Image
                  src="/img/appStore.png"
                  layout="responsive"
                  alt="Android"
                  width="120"
                  height="37"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
