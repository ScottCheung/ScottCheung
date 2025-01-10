/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <blockquote
        class='instagram-media'
        data-instgrm-captioned
        data-instgrm-permalink='https://www.instagram.com/p/DEP-NTcvgrC/?utm_source=ig_embed&amp;utm_campaign=loading'
        data-instgrm-version='14'
        style=' background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'
      ></blockquote>
      <script async src='//www.instagram.com/embed.js'></script>
    </div>
  );
}
