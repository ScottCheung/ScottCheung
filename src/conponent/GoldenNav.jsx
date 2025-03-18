/** @format */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage } from '../help/helpFunction';
import data from '../data/Database.json';
import { Link } from 'react-router-dom';
const navLocation = data.Navbar.Location;

export function more() {
  const lang = useLanguage();

  const [bgStyle, setBgStyle] = useState('bg-white/10 backdrop-blur-[15px]');

  return (
    <AnimatePresence>
      <motion.div
        // layout
        // transition={{ type: 'spring', duration: 0.3 }}
        className={`w-full lg:hidden grid  grid-cols-10  pt-[50px] transition-all  ${bgStyle}`}
      >
        {navLocation.map((item, index) => (
          <motion.a
            key={index}
            href={item.id}
            style={{ animationDelay: `${index * 0.2}s` }}
            className={`col-span-2 flex group w-full h-full  justify-center animate__zoomIn animate__animated  text-black `}
          >
            <motion.div
              layout
              // style={{ borderRadius: 20 }}
              whileTap={{ scale: 0.95 }}
              className=''
            >
              <div className='rounded-full bg-sky-100 w-[50px] h-[50px] flex justify-center items-center group-hover:text-white group-hover:bg-sky-900 '>
                {' '}
                <i
                  className={` flex fi justify-center  py-2 text-[20px]  ${item.logo}`}
                ></i>
              </div>

              <p className='w-full mt-[15px] h-full flex text-center justify-center lg:text-full text-[12px] md:text-[15px]'>
                {item.label[lang]}
              </p>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default more;
