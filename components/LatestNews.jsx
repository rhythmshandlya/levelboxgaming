import React from "react";
import LatestNewsCard from "./LatestNewsCard";

import Carousel from 'nuka-carousel';

const LatestNews = () => {
  // var a=`/../public/img/News-Thumbnail(${i}).png`;
  const renderSlides = () =>
    [1, 2, 3].map((num) => (
      <div className='flex justify-center'>
      <div className='flex justify-center flex-wrap'>
      {
        [0,1,2,3].map(i=>{return <LatestNewsCard imageSrc={`/../public/img/News-Thumbnail(${i}).png`} title="P.E.K.K.A King Update" date="6.09.2022" summary="Our dream is to create games that as many people as possible play for many years and that remembered forever."/> })
      }
      </div>
      </div>
    ));
  return (
    <div className='text-center '>
      <h1 className='font-bold mt-8'>Latest News</h1>
      <div  className="">
      <Carousel 
      autoplay={true}
      renderCenterLeftControls={({ previousSlide }) => (
     <button style={{display:"none"}}  onClick={previousSlide}>Previous</button>
     )}
     renderCenterRightControls={({ nextSlide }) => (
     <button style={{display:"none"}} onClick={nextSlide}>Next</button>
     )}
      >
      {renderSlides()}
      </Carousel>
  </div>
</div>
     
  )
}

export default LatestNews