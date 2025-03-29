/** @format */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage } from '../help/helpFunction';
import data from '../data/Database.json';
import { Link } from 'react-router-dom';
const navLocation = data.Navbar.Location;

export function subNav(isTop) {
  const lang = useLanguage();

  return (
    <AnimatePresence>
      <motion.div
        className={`items-center flex-auto justify-center  z-30 flex px-[10%] mx-auto    container  `}
      >
        <motion.div
          className={`w-full  flex justify-between rounded-full  items-center shadow-xl transition-all bg-black/30 backdrop-blur-[15px]`}
        >
          {navLocation.map((item, index) => (
            <motion.button
              disabled={!isTop}
              initial={{ width: '100%' }}
              whileHover={{ width: '120%' }}
              key={index}
              href={item.id}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={` flex  w-full h-full bg-black/20  justify-center animate__zoomIn animate_animated  text-gray-50 ${
                index === 0 ? 'md:rounded-l-full rounded-l-[12px]' : ''
              } ${
                index === navLocation.length - 1 ?
                  'md:rounded-r-full rounded-r-[12px]'
                : ''
              }   font-medium bg-transparent hover:bg-sky-900 ${item.color1} ${
                item.color2
              }  hover:shadow-xl hover:text-white hover:backdrop-blur-[5px] overflow-hidden `}
            >
              <motion.div
                layout
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1 }}
                className='w-full'
              >
                <div className='content-center py-4 my-3 text-center'>
                  <i
                    className={` flex fi justify-center  py-2 text-[20px]  ${item.logo}`}
                  ></i>
                  <div className='w-full h-full flex text-center justify-center lg:text-full text-[12px] md:text-[15px]'>
                    {item.label[lang]}
                  </div>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default subNav;
