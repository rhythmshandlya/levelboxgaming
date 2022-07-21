// import React from 'react'
import Image from "next/image";
const LatestNewsCard = (props) => {
  return (
    <div className="object-contain text-center m-6 max-w-xs mx-auto">
      <div className="w-fit bg-[#092140] rounded-2xl p-8">
        <Image
          //   loader={myLoader}
          src={props.imageSrc}
          alt="Picture of the author"
          width={"400"}
          height={"240"}
          className="rounded-2xl"
        />
        <div
          className="flex flex-col content-center flex-wrap"
          style={{ margin: "0 auto" }}
        >
          <p className="font-semibold text-xl p-3 break-normal">
            {props.title}
          </p>
          <p className="font-medium text-base p-3 break-normal">{props.date}</p>
          <p className="text-lg font-normal break-normal">{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
