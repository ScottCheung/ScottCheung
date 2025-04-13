/** @format */

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './videoPlayer';
import Slider from 'react-slick';
import SubNav from '../conponent/subNav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { debounce } from 'lodash';

const Carousel = ({ interval = 5000, HomeCarousel, isPaused, setIsPaused }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  // Use the current slide's duration or fallback to the default interval
  // const [duration, setDuration] = useState(interval);
  const view = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
        setIsTop(entry.isIntersecting);
      },
      { threshold: 0.7 },
    );

    if (view.current) {
      observer.observe(view.current);
    }

    return () => {
      if (view.current) {
        observer.unobserve(view.current);
      }
    };
  }, []);

  const delayTime = 0.17;

  const iconVariants = {
    paused:
      'M27,33 L27,15 Q27,12 30,12 L30,12 Q33,12 33,15 L33,33 Q33,36 30,36 L30,36 Q27,36 27,33 M15,33 L15,15 Q15,12 18,12 L18,12 Q21,12 21,15 L21,33 Q21,36 18,36 L18,36 Q15,36 15,33',
    playing:
      'M15,33 L15,15 Q15,11 18,12 L24,16 Q24,16 24,16 L24,32 Q24,32 24,32 L18,36 Q15,37 15,33 M24,32 L24,16 Q24,16 24,16 L33,22 Q35,23.3 35,24 L35,24 Q35,24.7 33,26 L24,32 Q24,32 24,32',
  };

  // Update the duration when active slide changes
  // useEffect(() => {
  // Get current slide's duration or use the default
  //   const currentDuration = HomeCarousel[activeIndex]?.duration || interval;
  //   setDuration(currentDuration * 1000);
  // }, [activeIndex, interval, HomeCarousel]);

  const prevDurationRef = useRef(null);
  const duration = useMemo(() => {
    const newDuration =
      (HomeCarousel[activeIndex]?.duration || interval) * 1000;
    if (prevDurationRef.current !== newDuration) {
      prevDurationRef.current = newDuration;
    }
    return prevDurationRef.current;
  }, [activeIndex]);

  // Properly connected slide navigation
  const nextSlide = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  });

  const prevSlide = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  });

  const goToSlide = useCallback((index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  });

  // Progress bar logic
  useEffect(() => {
    if (isPaused) return;
    let startTime = performance.now();
    let frame;

    const updateProgress = (timestamp) => {
      let elapsed = timestamp - startTime;
      let progress = (elapsed / duration) * 100;
      if (progress >= 100) {
        nextSlide();
      } else {
        setProgress(progress);
        frame = requestAnimationFrame(updateProgress);
      }
    };

    frame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frame);
  }, [activeIndex, duration, isPaused]);

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false, // 自定义 autoplay 行为
      beforeChange: debounce((_, next) => {
        setActiveIndex(next);
      }, 1000),
      pauseOnHover: false,
    }),
    [setActiveIndex],
  );

  return (
    <div
      ref={view}
      className={`relative h-[${viewportHeight * 0.4}px] lg:h-[${viewportHeight * 1.1}px] w-full  overflow-hidden bg-[#f5f5f7]`}
    >
      <svg
        data-v-226d292e=''
        viewBox='0 0 1440 62'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-0 left-0 right-0 z-30 scale-105 '
      >
        <path
          data-v-226d292e=''
          d='M0 0c106.167 13.333 399.8 62 725 62s612.17-48.667 715-62v62H0V0z'
          fill='#f5f5f7'
        ></path>
      </svg>
      <Slider ref={sliderRef} {...sliderSettings}>
        {HomeCarousel.map((item, index) => (
          <div
            key={index}
            className={`object-cover h-[${viewportHeight * 0.4}px] lg:h-[${viewportHeight * 1.1}px] relative w-full `}
          >
            <AnimatePresence>
              {item.type !== 'image' && isPaused && (
                <span
                  onClick={() => isTop && setIsPaused(false)}
                  className={`absolute z-20   w-full h-full flex justify-center ${isTop ? 'cursor-pointer' : 'cursor-not-allowed '}  items-center  bg-black/50`}
                >
                  <motion.button
                    disabled={!top}
                    layoutId='pause button'
                    className={`bg-black/20 w-[60px] h-[60px]  lg:w-[100px] lg:h-[100px]  flex rounded-full justify-center items-center ring-0 outline-none  ${isTop ? 'cursor-pointer' : 'pointer-events-none cursor-not-allowed '} `}
                  >
                    <motion.svg
                      whileTap={{ scale: top ? 1.1 : 1 }}
                      whileHover={{
                        scale: top ? 1.2 : 1,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`w-[45px] lg:w-[70px] lg:h-[70px]  fill-white ring-0  outline-none`}
                      viewBox='0 0 48 48'
                    >
                      <AnimatePresence>
                        {item.type !== 'image' && isPaused && (
                          <motion.path
                            d={
                              !isPaused ?
                                iconVariants.playing
                              : iconVariants.paused
                            }
                            animate={{
                              d:
                                isPaused ?
                                  iconVariants.playing
                                : iconVariants.paused,
                            }}
                            exit={{
                              d:
                                isPaused ?
                                  iconVariants.playing
                                : iconVariants.paused,
                            }}
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.svg>
                  </motion.button>
                </span>
              )}
            </AnimatePresence>

            <span className='z-20 hidden md:flex h-[20vh] absolute w-full bg-gradient-to-b from-black/40 via-black/30 via-[10vh] to-transparent overflow-hidden'></span>
            <a className='w-full h-full overflow-hidden'>
              {item.type === 'image' ?
                <img
                  src={item.src}
                  alt=''
                  className='object-cover w-full h-full'
                />
              : <VideoPlayer src={item.src} isPlay={!isPaused} />}
            </a>
          </div>
        ))}
      </Slider>
      <AnimatePresence>
        {isTop && (
          <motion.div
            className={`w-full h-[30px] rounded-lg absolute  bottom-[50px] lg:bottom-[200px] gap-x-[10px] gap-[30px] flex flex-col  justify-center items-center z-30`}
          >
            <motion.div
              transition={{
                duration: 1.2,
                delay: isTop ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ opacity: 0, y: 115 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 30 }}
              className={`w-full h-[30px] rounded-lg  gap-x-[10px] lg:gap-x-[20px] flex  justify-center items-center z-50`}
            >
              {' '}
              {/* Navigation Controls */}
              <div className='bg-white/200 hover:bg-black/30 hidden lg:flex  transition-all rounded-full backdrop-blur-[5px] '>
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
              <div className='bg-white/200 hover:bg-black/30 hidden lg:flex   transition-all  rounded-full backdrop-blur-[5px]  '>
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
              {/* Indication */}
              <div className='bg-white/200 hover:bg-black/30  transition-all   rounded-full backdrop-blur-[5px]  '>
                <motion.div
                  layout
                  className='bg-black/20 p-[15px] flex rounded-full gap-x-[16px] lg:gap-x-[20px] justify-center items-center transition-all'
                >
                  {HomeCarousel.map((item, index) => (
                    <motion.button
                      key={index}
                      disabled={!isTop}
                      onClick={() => goToSlide(index)}
                      style={{ animationDelay: `${(index + 3) * 0.11}s` }}
                      className={`bg-gray-200/50 hover:bg-gray-50/50 animate_animated animate__zoomIn cursor-pointer  overflow-hidden transition-all duration-500 rounded-full h-[10px] lg:h-[15px] ${index === activeIndex ? 'w-[30px] lg:w-[50px]' : 'w-[10px] lg:w-[15px]'}`}
                    >
                      {index === activeIndex && isPaused === false && (
                        <div
                          className='h-full bg-white rounded-full'
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
              {/* Play/Pause button */}
              <div
                className='bg-white/200 hover:bg-black/30 transition-all  rounded-full backdrop-blur-[5px]  '
                style={{ animationDelay: '0.45s' }}
              >
                <motion.button
                  layout
                  disabled={!isTop}
                  onClick={() => setIsPaused(!isPaused)}
                  className='bg-black/20 w-[37.5px] h-[37.5px] lg:w-[45px] lg:h-[45px] animate_animated animate__fadeIn flex rounded-full justify-center items-center transition-all ring-0 outline-none duration-1000'
                >
                  <motion.svg
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`w-[22px] h-[22px] lg:w-[35px] lg:h-[35px]  fill-white ${isPaused ? 'animate__rotateIn' : 'animate__rotateIn'} animate_animated transition-all ring-0 outline-none`}
                    viewBox='0 0 48 48'
                  >
                    <motion.path
                      d={!isPaused ? iconVariants.playing : iconVariants.paused}
                      animate={{
                        d:
                          isPaused ? iconVariants.playing : iconVariants.paused,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              transition={{
                duration: 1.2,
                delay: isTop ? 0.2 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 30 }}
              className='hidden w-full lg:flex'
            >
              <SubNav isTop={isTop} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
