/** @format */

import React from 'react';

export default function learnmore({ href, text }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={`border-white z-10 active:bg-black/50 active:border-black/50  hover:lg:bg-black/50 hover:lg:border-black/50 flex mt-[15px] lg:mt-[30px] mb-[120px] lg:mb-[0px]  gap-2 lg:gap-4 text-white text-[12px] lg:text-[15px] border-[1px] items-center  justify-center space-x-2 cursor-pointer   rounded-full px-6 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-1.5`}
    >
      <p className='flex'>{text}</p>
      <svg
        class=' fill-white w-[10px] h-[10px] lg:w-[15px] lg:h-[15px]  '
        xmlns='http://www.w3.org/2000/svg'
        viewBox='8 8 20 20'
      >
        <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
      </svg>
    </a>
  );
}
