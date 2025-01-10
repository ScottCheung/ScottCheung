/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <iframe
        src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=false&width=500'
        width='500'
        height='498'
        // style='border:none;overflow:hidden'
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}
