/** @format */

import React from 'react';
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

export default function gobelldesign() {
  return (
    <div className='flex p-3 '>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1400px] w-full masonry-grid'>
          {/* <script async src='//www.instagram.com/embed.js'></script> */}

          {posts.map((post, index) => (
            <div
              key={index}
              className='flex overflow-hidden bg-red-500 grid-item '
            >
              <iframe
                src={`${post}embed`}
                className='flex w-full h-full'
                onLoad={(e) => {
                  e.target.style.height =
                    e.target.contentWindow.document.body.scrollHeight + 'px';
                }}
              ></iframe>
              ,
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
