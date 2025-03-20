/** @format */

import { useLayoutEffect, useEffect, useState } from 'react';
import database from '../data/Database.json';
import { motion } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';

const Lifes = database.PersonalInfo.Lifes;

export default function Life() {
  const lang = useLanguage();
  const [HoverColor, setHoverColor] = useState(false);
  const [Index, setIndex] = useState(null);

  return (
    <div
      className='
    mt-[50px] lg:-mt-[80px] mb-[10vh]  z-40  w-full h-full '
    >
      <div
        className={`grid grid-cols-12 gap-[10px] lg:gap-[30px] animate__animated animate__fadeIn  w-full `}
      >
        {Lifes.map((life, index) => (
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={life.link}
            onMouseEnter={() => {
              setHoverColor(true);
              setIndex(index);
            }}
            onMouseLeave={() => setHoverColor(false)}
            className='welcomeanimation lg:col-span-3 flex  md:col-span-6 col-span-6  relative w-full duration-500 h-[100px] lg:max-h-[150px]   rounded-[12px] '
          >
            <div className='absolute bottom-0 left-0 z-50 w-[40%] lg:w-[70%] overflow-hidden rounded-bl-[14px] '>
              <img src={life.pic} alt='' />
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 transition-all duration-500 flex flex-col  w-full  h-[100px]  ${
                HoverColor && Index == index ? 'bg-gray-950' : ' bg-white'
              } rounded-[12px] `}
            >
              <div className='flex-auto px-6 py-6 text-gray-750 hover:text-white'>
                <div className='flex justify-end'>
                  <div className='flex flex-col'>
                    <div className='flex-shrink-0 '>
                      <div
                        className={`flex justify-end w-18 h-18 rounded-full items-center `}
                      >
                        <i
                          className={`fi text-[25px] ${
                            HoverColor && Index == index ?
                              'text-white'
                            : 'text-gray-750'
                          } ${life.icon}`}
                        />
                      </div>
                    </div>
                    <h6
                      className={`text-3xl ${
                        HoverColor && Index == index ?
                          'text-white'
                        : 'text-gray-750'
                      } font-semibold text-right`}
                    >
                      {life.label[lang]}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
