/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
    className='rounded-[14px] overflow-hidden bg-gray-200 shadow-md'
    allowfullscreen='true'
    allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
    className='rounded-[14px] overflow-hidden bg-gray-200 shadow-md'
    allowfullscreen='true'
    allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
  ></iframe>,
];

export default function gobelldesign() {
  return (
    <div className='flex flex-col w-screen h-screen overflow-auto'>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col h-full w-full items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='rounded-[14px] overflow-hidden bg-gray-200 shadow-md'
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
