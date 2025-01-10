/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

const posts = [
  'https://www.instagram.com/p/DEP-NTcvgrC/',
  'https://www.instagram.com/p/DEFAn3fPb1V/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/reel/DDKZBeXviBs/',
  'https://www.instagram.com/p/DDBcdmvvlCX/',
  'https://www.instagram.com/p/DCvzz7tPa7L/',
  'https://www.instagram.com/p/DBl9aiHvbCT/',
  'https://www.instagram.com/p/DAl0RsiTq7s/',
  'https://www.instagram.com/reel/DAdqEErPSrc/',
  'https://www.instagram.com/reel/DAI_opKP4UB/',
  'https://www.instagram.com/p/C_p_3SbvMIL/',
  'https://www.instagram.com/p/C_i8lRsTnMF/',
  'https://www.instagram.com/reel/C_V2DsWP_Ou/',
];

export default function Gobelldesign() {
  return (
    <div className='flex p-3 bg-gray-100'>
      <Navbar BG={'bg-gray-100'} />

      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>

        <div className='max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='flex bg-gray-500 rounded-[18px] border overflow-hidden'
            >
              <iframe
                src={`${post}embed`}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className='flex w-[100%] p-0 scrollbar-hide'
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
