// import React from 'react'
import Image from "next/image";
const LatestNewsCard = (props) => {
  return (
    <div className="object-contain text-center m-6">
      <Image
        //   loader={myLoader}
        src={props.imageSrc}
        alt="Picture of the author"
        width={"400"}
        height={"240"}
      />
      <div
        className="flex flex-col content-center flex-wrap max-w-sm"
        style={{ margin: "0 auto" }}
      >
        <p className="font-semibold text-xl p-3 break-normal">{props.title}</p>
        <p className="font-medium text-base p-3 break-normal">{props.date}</p>
        <p className="text-lg font-normal break-normal">{props.summary}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
