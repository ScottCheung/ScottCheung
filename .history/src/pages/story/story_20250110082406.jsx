/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
import InfiniteLoader from '../../conponent/InfiniteLoader.jsx';

// Define the list of posts (Instagram links)
const posts = [
  'https://www.instagram.com/p/DEP-NTcvgrC/',
  'https://www.instagram.com/p/DEFAn3fPb1V/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/reel/DDKZBeXviBs/',
  'https://www.instagram.com/p/DDBcdmvvlCX/',
  'https://www.instagram.com/p/DCvzz7tPa7L/',
  'https://www.instagram.com/p/DBl9aiHvbCT/',
  'https://www.instagram.com/p/DAl0RsiTq7s/',
  // ... Add all the posts here
];

export default function Ins() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]); // Initialize items as an empty array

  // Load more items when triggered
  const loadMoreItems = () => {
    if (isLoading || items.length >= posts.length) return; // Prevent loading more if already loading or all posts are shown

    setIsLoading(true);
    setTimeout(() => {
      const nextItems = posts.slice(items.length, items.length + 8); // Load 8 posts at a time
      setItems((prevItems) => [...prevItems, ...nextItems]);
      setIsLoading(false);
    }, 500); // Simulate network delay
  };

  return (
    <div className='flex p-3 bg-gray-100'>
      <Navbar BG={'bg-gray-100'} />

      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>

        <div className='max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {/* Render loaded posts */}
          {items.map((post, index) => (
            <a
              href={post}
              key={index}
              target='_blank'
              rel='noreferrer'
              className='flex bg-gray-500 rounded-[18px] border overflow-hidden'
            >
              <iframe
                src={`${post}embed`}
                style={{
                  width: '100%',
                }}
                className='flex w-[100%] p-0 scrollbar-hide lg:h-[650px] h-[800px]'
              ></iframe>
            </a>
          ))}
        </div>

        {/* InfiniteLoader triggers loading more posts */}
        <InfiniteLoader
          isLoading={isLoading}
          loader={
            <div className='flex flex-col items-center gap-6 py-12'>
              <div className='loader'>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className='dot'
                    style={{ '--delay': `${i * 0.12}s` }}
                  ></div>
                ))}
              </div>
              <p>Loading...</p>
            </div>
          }
          onLoadMore={loadMoreItems}
        />
      </div>
    </div>
  );
}
