/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <div className='mt-[40px]'>
        <iframe
          src='https://www.facebook.com/photo.php?fbid=556370620568749&set=a.110751088464040&type=3&ref=embed_post'
          width='500'
          height='498'
          frameborder='0'
          allowfullscreen='true'
          allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        ></iframe>
      </div>
    </div>
  );
}
