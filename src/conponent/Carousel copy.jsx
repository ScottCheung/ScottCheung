/** @format */

import React, { useState, useEffect, useRef } from 'react';
import CtButton from './ctButton';
import { motion, useTime, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import PlayButton from './Playbutton';
import SubNav from '../conponent/subNav';

const Carousel = ({ interval, children }) => {
  const lang = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const timeoutRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState('animate__fadeInRight');
  const [showleftbutton, setshowleftbutton] = useState(false);
  const [showrightbutton, setshowrightbutton] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const iconVariants = {
    paused:
      'M27,33 L27,15 Q27,12 30,12 L30,12 Q33,12 33,15 L33,33 Q33,36 30,36 L30,36 Q27,36 27,33 M15,33 L15,15 Q15,12 18,12 L18,12 Q21,12 21,15 L21,33 Q21,36 18,36 L18,36 Q15,36 15,33',
    playing:
      'M15,33 L15,15 Q15,11 18,12 L24,16 Q24,16 24,16 L24,32 Q24,32 24,32 L18,36 Q15,37 15,33 M24,32 L24,16 Q24,16 24,16 L33,22 Q35,23.3 35,24 L35,24 Q35,24.7 33,26 L24,32 Q24,32 24,32',
  };

  useEffect(() => {
    function handleScroll1() {
      if (window.scrollY < 1) {
        setIsPaused(false);
      } else {
        setIsPaused(true);
      }
    }
    function handleScroll2() {
      if (window.scrollY < 600) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll1);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  useEffect(() => {
    setProgress(0); // 重置进度为 0
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + (100 * 10) / interval; // 根据间隔时间计算进度增量
        if (nextProgress > 100) {
          clearInterval(timer);
          return 0; // 重置进度为 0
        }
        return nextProgress;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [activeIndex, interval]);

  const nextSlide = () => {
    setAnimate('animate__fadeInRight');
    setActiveIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setAnimate('animate__fadeInLeft');
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    const newAnimate =
      index > activeIndex ? 'animate__fadeInRight' : 'animate__fadeInLeft';
    setAnimate(newAnimate);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, interval);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [activeIndex, isPaused, interval]);

  return (
    <motion.div
      className='flex relative w-full h-full  overflow-hidden z-30'
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex='0'
    >
      <span className='absolute z-20 object-cover w-full h-full bg-black/30'></span>
      <div className='carousel-container'>
        {React.Children.map(children, (child, index) => (
          <div
            // className={`w-full h-full ${
            //   index === activeIndex
            //     ? `absolute cursor-pointer animate__animated ${animate} `
            //     : "absolute animate__animated animate__fadeOut"
            // }`}
            key={index}
            style={{ zIndex: index * 1 }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className='z-30 flex justify-between'>
        <span
          onMouseEnter={() => {
            setshowleftbutton(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setshowleftbutton(false);
            isTop && setIsPaused(false);
          }}
          onClick={prevSlide}
          className='absolute left-0 w-[20%] h-full z-40 bg-gradient-to-r hover:from-black/20 to-transparent cursor-pointer'
        >
          {showleftbutton && (
            <motion.button
              onClick={prevSlide}
              className={`  absolute top-[50%] left-[10%]`}
            >
              <svg
                className='rotate-180 fill-white/50 w-[60px] h-[60px]'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='8 8 20 20'
              >
                <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
              </svg>
            </motion.button>
          )}
        </span>
        <span
          onMouseEnter={() => {
            setshowrightbutton(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setshowrightbutton(false);
            isTop && setIsPaused(false);
          }}
          onClick={nextSlide}
          className='absolute right-0 w-[20%] h-full z-50 bg-gradient-to-l hover:from-black/20 to-transparent cursor-pointer'
        >
          {showrightbutton && (
            <motion.button
              onClick={prevSlide}
              className={`  absolute top-[50%] right-[10%]`}
            >
              <svg
                className='rotate-0 fill-white/50 w-[60px] h-[60px]'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='8 8 20 20'
              >
                <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
              </svg>
            </motion.button>
          )}
        </span>
      </div>
      <AnimatePresence>
        {isTop && (
          <motion.div
            layout
            className='w-full h-[30px] opacity-70 hover:opacity-100  rounded-lg absolute bottom-[120px] gap-y-[30px] flex flex-col justify-center items-center z-50  transition-all'
          >
            <motion.div className='w-auto flex gap-x-[20px]'>
              <div
                style={{ animationDelay: `0.15s` }}
                className='animate__animated animate__fadeInUp bg-white/20 rounded-full backdrop-blur-[5px]'
              >
                <motion.button
                  onMouseEnter={() => {
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}
                  onClick={prevSlide}
                  className={`bg-black/20 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__zoomIn  flex rounded-full justify-center items-center transition-all transform duration-1000`}
                >
                  <svg
                    className='hover:fill-white rotate-180 fill-gray-200 w-[20px] h-[20px]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='8 8 20 20'
                  >
                    <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                  </svg>
                </motion.button>
              </div>
              <div
                style={{ animationDelay: `0.3s` }}
                className='animate__animated animate__fadeInUp bg-white/20 rounded-full backdrop-blur-[5px]'
              >
                <motion.button
                  onMouseEnter={() => {
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}
                  onClick={nextSlide}
                  className={`bg-black/20 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__zoomIn  flex rounded-full justify-center items-center transition-all transform duration-1000`}
                >
                  <svg
                    className='hover:fill-white fill-gray-200 w-[20px] h-[20px]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='8 8 20 20'
                  >
                    <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                  </svg>
                </motion.button>
              </div>
              <div
                style={{ animationDelay: `0.45s` }}
                className='bg-white/20 rounded-full backdrop-blur-[5px] animate__animated animate__fadeInUp'
              >
                <motion.div
                  layout
                  onMouseEnter={() => {
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}
                  className='bg-black/20 p-[15px]  backdrop-blur-[5px] flex rounded-full gap-x-[20px] justify-center items-center transition-all'
                >
                  {React.Children.map(children, (_, index) => (
                    <div>
                      <div
                        onClick={() => {
                          goToSlide(index);
                        }}
                        style={{ animationDelay: `${(index + 3) * 0.25}s` }}
                        className={`bg-gray-200/50 hover:bg-gray-50/50 animate__animated animate__zoomIn cursor-pointer h-[15px] overflow-hidden transition-all duration-500 rounded-full ${
                          index === activeIndex ? 'w-[50px]' : 'w-[15px]'
                        }`}
                      >
                        {index === activeIndex &&
                          progress >= 0 &&
                          isPaused === false && (
                            <div
                              className={`bg-gradient-to-brfrom-sky-500 to-emerald-500 bg-white h-[15px] rounded-full`}
                              style={{ width: `${progress}%` }}
                            />
                          )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div
                style={{ animationDelay: `0.6s` }}
                className='animate__animated animate__fadeInUp bg-white/20 rounded-full backdrop-blur-[5px]'
              >
                <motion.button
                  layout
                  onMouseEnter={() => {
                    setshowToast(true);
                  }}
                  onMouseLeave={() => {
                    setshowToast(false);
                  }}
                  onClick={() => {
                    setIsPaused(!isPaused);
                  }}
                  style={{ animationDelay: `${(children.length + 3) * 0.2}s` }}
                  className={`bg-black/20 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__fadeIn  flex rounded-full justify-center items-center transition-all ring-0  outline-none duration-1000`}
                >
                  {
                    <motion.svg
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.2 }}
                      class={` w-[35px]  h-[35px] ${
                        showToast ? 'fill-white' : 'fill-gray-200'
                      } ${
                        isPaused ? 'animate__rotateIn' : 'animate__rotateIn'
                      } animate__animated  transition-all ring-0  outline-none`}
                      viewBox='0 0 48 48'
                    >
                      {/* {isPaused&&<path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>} */}
                      {/* {!isPaused&&<path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>} */}
                      <motion.path
                        // initial={{scale: 0}}
                        d={
                          !isPaused ? iconVariants.playing : iconVariants.paused
                        }
                        animate={{
                          d:
                            isPaused ?
                              iconVariants.playing
                            : iconVariants.paused,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.svg>
                  }
                  {!showToast && (
                    <motion.svg
                      class={` ${
                        isPaused ? 'animate__zoomIn' : (
                          'animate-spin animate__slower animate__rotateIn'
                        )
                      } animate__animated hidden w-[40px] h-[40px] ${
                        showToast ? 'fill-white' : 'fill-gray-200'
                      }  transition-all`}
                      viewBox='0 0 56 56'
                    >
                      {!isPaused && (
                        <path
                          className=''
                          d='M37.3,26.7c-1,0.1-1.8,1-1.8,2c0,4.1-3.4,7.4-7.5,7.4c-4.1,0-7.4-3.4-7.4-7.5c0-4.1,3.3-7.4,7.5-7.4l0.1,0l0.2,0l0.5,0 l-2.2,2.2c-0.8,0.8-0.8,2.1,0,2.9c0.7,0.7,1.9,0.8,2.7,0.2l0.2-0.2l5.3-5.3c0.7-0.7,0.8-1.9,0.2-2.7l-0.2-0.2l-5.3-5.3 c-0.8-0.8-2.1-0.8-2.8,0c0,0,0,0,0,0c-0.7,0.7-0.8,1.9-0.1,2.7l0.1,0.2l1.4,1.4l-0.5,0c-6.4,0.2-11.3,5.6-11.1,11.9 S22,40.5,28.4,40.2c6.2-0.2,11.1-5.3,11.1-11.5c0-1-0.8-1.9-1.8-2l-0.2,0L37.3,26.7z'
                        ></path>
                      )}
                      {isPaused && (
                        <path d='M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z'></path>
                      )}
                    </motion.svg>
                  )}
                  {/* {showToast&&<motion.div  className='transition-all animate__animated animate__zoomIn pr-[20px] text-white '>{isPaused? ['Swith to Auto','自动轮播'][lang]:['Swith to Manual','手动切换'][lang]}</motion.div>} */}
                </motion.button>
              </div>
            </motion.div>
            <SubNav />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Carousel;
