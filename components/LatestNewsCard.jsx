// import React from 'react'
const LatestNewsCard = (props) => {
  return (
    <div className="w-fit rounded-2xl sm:w-[300px] md:w-[350px] mx-auto">
      <img
        class="w-full rounded-[30px]"
        src={props.imageSrc}
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col content-center flex-wrap w-full text-low">
        <p className="text-xs font-normal break-normal">{props.summary}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
