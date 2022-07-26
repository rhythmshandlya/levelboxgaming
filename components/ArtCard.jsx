// import React from 'react'
const LatestNewsCard = (props) => {
  return (
    <div className="w-fit rounded-xl w-[240px] md:w-[360px] mx-auto p-3">
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
