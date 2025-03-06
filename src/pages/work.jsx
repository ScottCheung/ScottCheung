/** @format */

import React from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import WorkExperience from '../conponent/workData';

export default function work() {
  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen bg-gray-100'>
      <Navbar BG={'bg-white'} />
      <WorkExperience />
    </div>
  );
}
