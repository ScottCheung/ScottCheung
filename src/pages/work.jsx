/** @format */

import React from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import WorkExperience from '../conponent/workData';
import Contact from '../conponent/Contact';

export default function work() {
  return (
    <div className='flex flex-col items-center justify-start w-screen h-full bg-gray-100 lg:h-screen'>
      <Navbar BG={'bg-white'} />
      <WorkExperience />
      <Contact />
    </div>
  );
}
