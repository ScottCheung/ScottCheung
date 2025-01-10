/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  'https://www.instagram.com/p/DEP-NTcvgrC',
  'https://www.instagram.com/p/DEFAn3fPb1V/',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

export default function gobelldesign() {
  return (
    <div className='flex p-3 '>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1400px] w-full masonry-grid'>
          <script async src='//www.instagram.com/embed.js'></script>

          {posts.map((post, index) => (
            <div
              key={index}
              className='flex overflow-hidden bg-red-500 grid-item'
            >
              <iframe
                src={`${post}/embed`}
                width='100%'
                height='500px'
              ></iframe>
              ,
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
