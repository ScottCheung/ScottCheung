/** @format */

import Contact from '../conponent/Contact';
import Navbar from '../conponent/NavBar/Navbar';
import Education from '../conponent/Education';
import { hideRow, bgPic, useLanguage } from '../help/helpFunction';
import { motion } from 'framer-motion';
import KeyFeature from '../conponent/KeyFeature';

export default function Example() {
  return (
    <div className='flex flex-col items-center w-full justify-center bg-gradient-to-b from-pink-100 from-10% via-blue-500/40 to-white '>
      <Navbar />

      <div className='flex relative min-w-full rounded-[28px] p-[28px] '>
        {/* PlannetBackground */}

        <motion.div className='flex flex-col z-20  rounded-[28px] overflow-hidden lg:h-[130vh]  mt-[100px]  w-full animate__animated animate__zoomIn relative'>
          <motion.span
            layout
            className={`absolute  flex blur-[5px] top-0 bottom-0 opacity-50 left-0 right-0  z-10 `}
          >
            <div
              style={{
                backgroundImage: `url(https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/2022-11-02-students-library-lawn-0002_2.jpg)`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
              }}
              className='w-full h-full animate__animated animate__fadeInDown '
            ></div>
          </motion.span>
          <div className=' flex font-black h-[60vh] text-[30px] justify-center items-center animate__animated animate__fadeInUp md:text-[70px] lg:text-[150px]'>
            I have 4 majors
          </div>
          <div
            style={{
              ...bgPic(
                'https://img.picgo.net/2024/12/10/Learning-Ability3ff64320371f7623.png',
                '400px auto',
                'bottom right',
              ),
            }}
            className='z-20 w-full h-[400px] lg:h-full'
          ></div>
        </motion.div>
      </div>
      <Education hideTittle={true} simpleVer={true} />
      <KeyFeature />
      <Contact />
    </div>
  );
}
