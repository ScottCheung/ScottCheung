/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <blockquote
        className='instagram-media'
        data-instgrm-captioned=''
        data-instgrm-permalink='https://www.instagram.com/p/CjCFri8PW80/?utm_source=ig_embed&utm_campaign=loading'
        data-instgrm-version={14}
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      >
        <div style={{ padding: 16 }}> </div>
      </blockquote>
    </div>
  );
}
