// import React from 'react'
import Image from 'next/image';
const LatestNewsCard = (props) => {
  return (
    <div className='w-[500px] h-[300px] mb-64 ml-8 text-center'>
        <Image 
    //   loader={myLoader}
      src={props.imageSrc}
      alt="Picture of the author"
      width={'500'}
      height={'300'}
    />
    <div className='flex flex-col content-center flex-wrap'>
    <p className='font-semibold text-xl mt-2 break-normal'>{props.title}</p>
    <p className='font-medium text-base break-normal'>{props.date}</p>
    <p className='text-lg font-normal break-normal'>{props.summary}</p>
    </div>
    </div>
  )
}

export default LatestNewsCard