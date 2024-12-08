/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

export default function igrapher() {
  return (
    <div className='flex h-full bg-gray-100 w-screen pt-[130px] justify-center'>
      <Navbar BG={'bg-white'} />
      <div className='flex w-full  max-w-[1000px] justify-center'>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187415097735090176'
          height='100%'
          width='100%'
          frameborder='0'
          allowfullscreen=''
          title='Embedded post'
        ></iframe>
      </div>
    </div>
  );
}
