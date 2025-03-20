/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Database from '../data/Database.json';
import Data from '../conponent/NavBar/Navbardata.json';
import { hideRow, useLanguage } from '../help/helpFunction';
import { useInView } from 'react-intersection-observer';

const educationData = Data.navbarItem[3].scondMenu;

function Education({ hideTittle, simpleVer }) {
  const lang = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  // Animation variants
  const WelcomeItem = Database.Animation.Variant.WelcomeItem;
  const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll events to update progress bar
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll <= 0 ? 0 : scrollLeft / maxScroll;
      setScrollProgress(progress);
    }
  };

  // Handle progress bar drag
  const handleProgressDrag = (e) => {
    if (scrollContainerRef.current) {
      const progressBar = e.currentTarget;
      const progressRect = progressBar.getBoundingClientRect();
      const clickPosition =
        (e.clientX - progressRect.left) / progressRect.width;
      const newPosition = Math.max(0, Math.min(1, clickPosition));

      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollContainerRef.current.scrollLeft = newPosition * maxScroll;
    }
  };

  // Handle progress bar thumb drag
  const handleThumbDrag = (_, info) => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const newProgress = Math.max(
        0,
        Math.min(1, scrollProgress + info.delta.x / 200),
      );
      setScrollProgress(newProgress);
      scrollContainerRef.current.scrollLeft = newProgress * maxScroll;
    }
  };

  return (
    <div className='w-full'>
      {!simpleVer && (
        <div className='flex justify-center group  py-[10px] '>
          <div
            className='relative w-[60vw] h-[8px] bg-gray-300/70 rounded-full cursor-pointer group-hover:transition-all group-hover:duration-1000 '
            onClick={handleProgressDrag}
          >
            {/* 进度条 */}
            <motion.div
              className='absolute top-0 left-0 h-full rounded-full shadow-md group-hover:duration-1000 group-hover:transition-all bg-gradient-to-r from-sky-400 to-sky-600'
              style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* 滑块 */}
            <motion.div
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleThumbDrag}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className='absolute top-[-6px] h-[20px] w-[20px] bg-white  border-2 border-sky-500 rounded-full cursor-grab group-hover:duration-1000 group-hover:transition-all'
              style={{ left: `calc(${scrollProgress * 100}% - 10px)` }}
            ></motion.div>
          </div>
        </div>
      )}

      <motion.div layout className='flex justify-center w-screen'>
        <motion.div
          layout
          ref={scrollContainerRef}
          onScroll={handleScroll}
          variants={
            windowWidth > 1024 ?
              Database.Animation.Variant.Welcomevisblecontainer
            : undefined
          }
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-30%' }}
          className={
            simpleVer ?
              'grid grid-cols-12 w-full gap-[20px] px-[20px] '
            : 'flex overflow-x-auto gap-[20px] py-[20px] scrollbar-hide w-full px-[20vw]  '
          }
        >
          {educationData.map((experience, index) => (
            <motion.div
              layout
              key={index}
              variants={WelcomeItem}
              transition={StagerFadeInUp}
              whileTap={{ scale: 0.95 }}
              className='col-span-6 lg:col-span-3 md:col-span-4 group'
            >
              <div
                className={`p-[14px] lg:p-[28px] rounded-[14px] lg:rounded-[28px] h-full transition-all duration-300 relative  ${
                  simpleVer ? 'w-full' : 'lg:w-[300px]'
                }  ${
                  simpleVer ?
                    'bg-white hover:bg-sky-100'
                  : 'bg-gray-200 hover:invert'
                }`}
              >
                <div
                  className={simpleVer || windowWidth < 1024 ? '' : 'pb-[40px]'}
                >
                  <div className='items-start justify-start mt-[10px] mb-[6px] flex md:flex gap-x-4 md:flex-col'>
                    <i
                      className={`${experience.icon} fi from-[-20%] to-[120%] ${
                        simpleVer ?
                          'text-[15px] md:text-[17px] lg:text-[25px]'
                        : 'text-[12px] md:text-[17px] lg:text-[25px]'
                      } flex items-center pb-[10px]`}
                    ></i>
                    <div
                      className={
                        windowWidth > 1024 ?
                          `typography-card-headline font-[600] duration-300 transition-all text-sky-950 gap-x-[10px] ${
                            simpleVer ?
                              'text-[15px] md:text-[17px] lg:text-[20px]'
                            : 'text-[12px] md:text-[17px] lg:text-[25px]'
                          }`
                        : 'text-[13px] md:text-[18px] font-[600] transition-all flex flex-col md:flex-row gap-x-[5px]'
                      }
                    >
                      <div className={`flex items-center `}>
                        {experience.name[lang]}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      style={{
                        animationDelay: `${index * 0.3}s`,
                      }}
                      className={`text-gray-400 ${
                        simpleVer || windowWidth < 1024 ? '' : 'lg:h-[60px]'
                      } group-hover:text-gray-700 text-[15px] darrk:text-gray-50`}
                    >
                      {experience.des[lang]}
                    </p>
                  </div>
                </div>

                <a
                  href={experience.link}
                  target={experience.blank && '_blank'}
                  rel={experience.blank && 'noopener noreferrer'}
                  className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
                >
                  <button
                    className={`absolute ${
                      windowWidth < 1024 || simpleVer ?
                        'top-[14px] right-[14px] lg:top-[28px] lg:right-[28px]'
                      : 'right-[28px] bottom-[28px]'
                    } w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-gray-900/30 group-hover:bg-gray-900 transition-all duration-300 rounded-full flex justify-center items-center`}
                    type='link'
                  >
                    <span
                      className={
                        windowWidth < 1024 ? 'w-[15px] h-[15px]' : (
                          'w-[20px] h-[20px]'
                        )
                      }
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='8 8 20 20'
                        className='fill-white'
                      >
                        <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            layout
            key='expect-more'
            variants={WelcomeItem}
            transition={StagerFadeInUp}
            whileTap={{ scale: 0.95 }}
            className='col-span-12 lg:col-span-3 md:col-span-12 group'
          >
            <div
              className={`p-[14px] lg:p-[28px] rounded-[14px] lg:rounded-[28px] transition-all duration-300 relative min-w-[300px] h-full ${
                simpleVer ?
                  'bg-white hover:bg-sky-100'
                : 'bg-gray-200 hover:invert'
              } w-full`}
            >
              <div className='pb-[40px]'>
                <div className='items-start justify-start mt-[10px] mb-[6px] flex md:flex gap-x-4 md:flex-col'>
                  <i className='fi fi-rr-hourglass-end text-[15px] md:text-[17px] lg:text-[25px] flex items-center pb-[10px]'></i>
                  <div className='text-[13px] md:text-[18px] font-[600] transition-all flex flex-col md:flex-row gap-x-[5px] text-sky-950'>
                    <div className='flex items-center'>
                      {['Looking forward to more...', '期待更多内容...'][lang]}
                    </div>
                  </div>
                </div>
                <div>
                  <p className='text-gray-400 text-[15px] text-wrap'>
                    {
                      [
                        'More exciting content will be online soon, stay tuned!',
                        '更多精彩内容即将上线，敬请期待！',
                      ][lang]
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Education;
