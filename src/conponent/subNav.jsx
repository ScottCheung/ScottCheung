/** @format */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage } from '../help/helpFunction';
import data from '../data/Database.json';
import { Link } from 'react-router-dom';
const navLocation = data.Navbar.Location;

export function more() {
  const lang = useLanguage();
  const [isTop, setIsTop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bgStyle, setBgStyle] = useState('bg-black/30 backdrop-blur-[15px]');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 700) {
        setIsTop(true);
        setTimeout(() => {
          setBgStyle('bg-black/30 backdrop-blur-[15px] ');
        }, 1000);
      } else {
        setIsTop(false);
        setBgStyle('bg-sky-900  backdrop-blur-[5px] -z-50');
      }
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // 注册事件监听器
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // 在组件卸载时取消事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空数组表示该 effect 仅在组件挂载和卸载时运行

  return (
    <AnimatePresence>
      {isTop && (
        <motion.div
          layout
          className={`items-center flex-auto justify-center  z-30 flex md:px-[10%] mx-auto    container  `}
        >
          <motion.div
            // layout
            // transition={{ type: 'spring', duration: 0.3 }}
            className={`w-full  flex justify-between md:rounded-full rounded-[12px] items-center shadow-xl transition-all  ${bgStyle}`}
          >
            {navLocation.map((item, index) => (
              <motion.a
                initial={{ width: '100%' }}
                whileHover={{ width: '120%' }}
                key={index}
                href={item.id}
                style={{ animationDelay: `${index * 0.2}s` }}
                className={` flex  w-full h-full bg-black/20  justify-center animate__zoomIn animate__animated  text-gray-50 ${
                  index === 0 ? 'md:rounded-l-full rounded-l-[12px]' : ''
                } ${
                  index === navLocation.length - 1 ?
                    'md:rounded-r-full rounded-r-[12px]'
                  : ''
                }   font-medium bg-transparent hover:bg-sky-900 ${
                  item.color1
                } ${
                  item.color2
                }  hover:shadow-xl hover:text-white hover:backdrop-blur-[5px] overflow-hidden `}
              >
                <motion.div
                  layout
                  key='modal'
                  // style={{ borderRadius: 20 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1 }}
                  className='w-full'
                >
                  <div className='content-center py-4 my-3 text-center'>
                    {isTop ?
                      <i
                        className={` flex fi justify-center  py-2 text-[20px]  ${item.logo}`}
                      ></i>
                    : <></>}
                    <div className='w-full h-full flex text-center justify-center lg:text-full text-[12px] md:text-[15px]'>
                      {!isTop ?
                        windowWidth > 784 && (
                          <i
                            className={` flex fi justify-center mt-1 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] mr-2 ${item.logo}`}
                          ></i>
                        )
                      : <></>}{' '}
                      {item.label[lang]}
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default more;
