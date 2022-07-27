import Image from "next/image";
import React from "react";

const InstallOn = ({ download, additionalClass }) => {
  console.log(additionalClass);
  return (
    <div className={`flex flex-wrap justify-center ${additionalClass}`}>
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
export default InstallOn;
