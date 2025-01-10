/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width='100%'
        height='100%'
        src='https://www.facebook.com/share/p/19ef2pNVLq/'
        allowFullScreen
      ></iframe>
    </div>
  );
}
