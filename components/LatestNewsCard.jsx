// import React from 'react'
import Image from 'next/image';
const LatestNewsCard = (props) => {
  return (
    <div className='w-[500px] h-[300px] mb-64 ml-8 text-center'>
        <Image
    //   loader={myLoader}
      src={props.imageSrc}
      alt="Picture of the author"
      width={500}
      height={300}
    />
    <p className='font-semibold text-xl mt-2'>{props.title}</p>
    <p className='font-medium text-base'>{props.date}</p>
    <p className='text-lg font-normal'>{props.summary}</p>
    </div>
  )
}

export default LatestNewsCard