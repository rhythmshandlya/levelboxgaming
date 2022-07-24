// import React from 'react'
import Image from "next/image";
const ConceptArtCard = (props) => {
  return (
    <div class="w-[350px] md:w-[400px] lg:w-[450px] overflow-hidden shadow-lg bg-[#434852] rounded-[30px] mb-6">
      <div>
        <img
          class="w-full"
          src={props.imageSrc}
          alt="Sunset in the mountains"
        />
        <div class="px-10 py-6">
          <div className="flex justify-between align-middle">
            <div class="font-bold text-xl mb-2">{props.title}</div>
            <p class="text-white text-base">{props.date}</p>
          </div>
          <p class="text-white text-base">{props.summary}</p>
        </div>
        <div class="px-8 pb-2">
          <a class="inline-block0 px-3 text-base mr-2 mb-2 cursor-pointer">
            read more
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ConceptArtCard;
