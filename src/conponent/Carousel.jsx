/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import { useSwipeable } from 'react-swipeable';
import SubNav from '../conponent/subNav';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ interval, HomeCarousel }) => {
  const lang = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const iconVariants = {
    paused:
      'M27,33 L27,15 Q27,12 30,12 L30,12 Q33,12 33,15 L33,33 Q33,36 30,36 L30,36 Q27,36 27,33 M15,33 L15,15 Q15,12 18,12 L18,12 Q21,12 21,15 L21,33 Q21,36 18,36 L18,36 Q15,36 15,33',
    playing:
      'M15,33 L15,15 Q15,11 18,12 L24,16 Q24,16 24,16 L24,32 Q24,32 24,32 L18,36 Q15,37 15,33 M24,32 L24,16 Q24,16 24,16 L33,22 Q35,23.3 35,24 L35,24 Q35,24.7 33,26 L24,32 Q24,32 24,32',
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsPaused(window.scrollY > 0);
      setIsTop(window.scrollY < 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 * 10) / interval;
        if (next > 100) {
          clearInterval(timer);
          return 0;
        }
        return next;
      });
    }, 10);
    return () => clearInterval(timer);
  }, [activeIndex, interval]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, interval);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [activeIndex, isPaused, interval]);

  useEffect(() => {
    if (isTransitioning) {
      if (activeIndex === HomeCarousel.length + 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setActiveIndex(1);
        }, 500); // This timeout should match the CSS transition duration
      } else if (activeIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setActiveIndex(HomeCarousel.length);
        }, 500); // This timeout should match the CSS transition duration
      } else {
        setIsTransitioning(true);
      }
    }
  }, [activeIndex, isTransitioning, HomeCarousel.length]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const settings = {
    verticalSwiping: false, // 禁用上下滑动
    swipeToSlide: true, // 滑动到下一张
    infinite: true, // 无限循环
    slidesToShow: 1, // 每次显示一张
    slidesToScroll: 1, // 每次滚动一张
  };
  const delayTime = 0.17;

  return (
    <motion.div
      {...handlers}
      className={`h-[${viewportHeight * 0.4}px] flex lg:h-[${viewportHeight * 1.1}px] relative z-30 w-full ${!top && 'cursor-none'} overflow-hidden bg-white`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex='0'
    >
      <span
        className={`z-20 h-${viewportHeight}px hidden md:flex absolute w-full h-full bg-gradient-to-b from-black/30 via-black/10 via-[300px] to-transparent  overflow-hidden`}
      ></span>
      <svg
        data-v-226d292e=''
        viewBox='0 0 1440 62'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`absolute bottom-0 left-0 right-0 z-50 scale-105`}
      >
        <path
          data-v-226d292e=' '
          d='M0 0c106.167 13.333 399.8 62 725 62s612.17-48.667 715-62v62H0V0z'
          fill='#f5f5f7'
        ></path>
      </svg>
      <motion.div
        layout
        initial={{ x: `-${activeIndex * 100}%` }}
        animate={{ x: 0 }}
        exit={{ x: `${activeIndex * 100}%` }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`flex z-10 w-full  h-full ${isTransitioning ? 'transi' : ''}`}
        style={{ translateX: `-${activeIndex * 100}%` }}
      >
        {[
          HomeCarousel[HomeCarousel.length - 1],
          ...HomeCarousel,
          HomeCarousel[0],
        ].map((item, index) => (
          <motion.div className={`flex-none w-full h-full`} key={index}>
            {/* <a href={item.href} className='flex justify-center w-full h-full'> */}
            {item.type === 'image' && (
              <img
                loading='eager'
                src={item.src}
                alt=''
                className='object-cover object-bottom w-full h-full '
              />
            )}
            {item.type === 'video' && (
              <video
                src={item.src}
                alt={item.src}
                autoPlay='true'
                className='object-cover w-full h-full '
              />
            )}
            {/* </a> */}
          </motion.div>
        ))}
      </motion.div>

      <div className='z-30 flex justify-between'>
        <span
          onMouseEnter={() => {
            setShowLeftButton(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setShowLeftButton(false);
            isTop && setIsPaused(false);
          }}
          onClick={prevSlide}
          className='absolute left-0 w-[20%]  z-40 bg-gradient-to-r hover:from-black/20 to-transparent cursor-pointer'
        >
          {showLeftButton && (
            <motion.button
              onClick={prevSlide}
              className='absolute top-[50%] left-[10%]'
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
            setShowRightButton(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setShowRightButton(false);
            isTop && setIsPaused(false);
          }}
          onClick={nextSlide}
          className='absolute right-0 w-[20%]  z-50 bg-gradient-to-l hover:from-black/20 to-transparent cursor-pointer'
        >
          {showRightButton && (
            <motion.button
              onClick={nextSlide}
              className='absolute top-[50%] right-[10%]'
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
        <motion.div
          className={`w-full h-[30px] rounded-lg absolute  bottom-[50px] lg:bottom-[200px] gap-y-[30px] flex flex-col justify-center items-center z-50`}
        >
          <motion.div
            transition={{
              duration: 1.2,
              delay: isTop ? 0 : delayTime,
              ease: [0.22, 1, 0.36, 1],
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isTop ? 1 : 0,
              y: isTop ? 0 : 30,
            }}
            className='w-full flex gap-x-[20px] justify-center'
          >
            <div
              className='bg-white/200 hover:bg-black/30 hidden lg:flex  transition-all rounded-full backdrop-blur-[5px] animate_animated animate__fadeInUp'
              style={{ animationDelay: '0.15s' }}
            >
              <motion.button
                disabled={!isTop}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={prevSlide}
                className='bg-black/20 w-[45px] h-[45px] animate_animated animate__zoomIn flex rounded-full justify-center items-center transition-all transform duration-1000'
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
              className='bg-white/200 hover:bg-black/30 hidden lg:flex   transition-all  rounded-full backdrop-blur-[5px] animate_animated animate__fadeInUp'
              style={{ animationDelay: '0.15s' }}
            >
              <motion.button
                disabled={!isTop}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={nextSlide}
                className='bg-black/20  w-[45px] h-[45px] animate_animated animate__zoomIn flex rounded-full justify-center items-center transition-all duration-1000'
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
              className='bg-white/200 hover:bg-black/30  transition-all   rounded-full backdrop-blur-[5px] animate_animated animate__fadeInUp'
              style={{ animationDelay: '0.3s' }}
            >
              <motion.div
                layout
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className='bg-black/20 p-[15px] flex rounded-full gap-x-[20px] justify-center items-center transition-all'
              >
                {HomeCarousel.map((item, index) => (
                  <motion.button
                    key={index}
                    disabled={!isTop}
                    onClick={() => setActiveIndex(index + 1)}
                    style={{ animationDelay: `${(index + 3) * 0.11}s` }}
                    className={`bg-gray-200/50 hover:bg-gray-50/50 animate_animated animate__zoomIn cursor-pointer  overflow-hidden transition-all duration-500 rounded-full h-[15px] ${index + 1 === activeIndex ? 'w-[50px]' : 'w-[15px]'}`}
                  >
                    {index + 1 === activeIndex &&
                      progress >= 0 &&
                      isPaused === false && (
                        <div
                          className='h-full bg-white rounded-full'
                          style={{ width: `${progress}%` }}
                        />
                      )}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            <div
              className='bg-white/200 hover:bg-black/30 transition-all  rounded-full backdrop-blur-[5px] animate_animated animate__fadeInUp'
              style={{ animationDelay: '0.45s' }}
            >
              <motion.button
                layout
                disabled={!isTop}
                onClick={() => setIsPaused(!isPaused)}
                className='bg-black/20 w-[45px] h-[45px] animate_animated animate__fadeIn flex rounded-full justify-center items-center transition-all ring-0 outline-none duration-1000'
              >
                <motion.svg
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-[35px] h-[35px] fill-white ${isPaused ? 'animate__rotateIn' : 'animate__rotateIn'} animate_animated transition-all ring-0 outline-none`}
                  viewBox='0 0 48 48'
                >
                  <motion.path
                    d={!isPaused ? iconVariants.playing : iconVariants.paused}
                    animate={{
                      d: isPaused ? iconVariants.playing : iconVariants.paused,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            transition={{
              duration: 1.2,
              delay: isTop ? delayTime : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: isTop ? 1 : 0,
              y: isTop ? 0 : 30,
            }}
            className='hidden w-full lg:flex'
          >
            <SubNav isTop={isTop} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Carousel;
