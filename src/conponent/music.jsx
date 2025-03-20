/** @format */

import React from 'react';
import { useLanguage } from '../help/helpFunction';

export default function Music() {
  return (
    <div className='flex  border rounded-[14px] my-[50px] overflow-hidden flex-col '>
      <iframe
        src='https://embed.music.apple.com/tr/playlist/favorite-songs/pl.u-V5UB8xqP4v'
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '450px',
          borderRadius: '0px',
        }}
        allowfullscreen
        allow='encrypted-media; fullscreen; clipboard-write;'
      ></iframe>
      <a
        target='_blank'
        href='https://music.apple.com/library/playlist/p.ZaU4oYGJ1E'
        className='w-full h-[60px] bg-[#dd3c43] text-white  flex justify-center rounded-b-[14px] items-center text-[20px]'
      >
        {['Full Screen', '全屏显示'][useLanguage()]}
      </a>
    </div>
  );
}
