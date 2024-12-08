/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function igrapher() {
  return (
    <div className='flex h-full bg-gray-100  pt-[130px] justify-center'>
      <Navbar BG={'bg-white'} />
      <iframe
        src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187415097735090176'
        height='100%'
        width='100%'
        frameborder='0'
        allowfullscreen=''
        title='Embedded post'
        className='h-full py-24'
      ></iframe>
      <div className='flex w-full h-full max-w-[1000px] justify-center'></div>
    </div>
  );
}
