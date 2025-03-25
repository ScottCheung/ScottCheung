/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ interval = 5000, HomeCarousel }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [progress, setProgress] = useState(0);

  // Simplified slide navigation
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === HomeCarousel.length ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 1 ? HomeCarousel.length : prev - 1));
  };

  // Progress bar logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (100 * 10) / interval;
        return nextProgress > 100 ? 0 : nextProgress;
      });
    }, 10);

    const slideTimer = setTimeout(nextSlide, interval);

    return () => {
      clearInterval(timer);
      clearTimeout(slideTimer);
    };
  }, [activeIndex, interval, isPaused]);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: interval,
    afterChange: (current) => setActiveIndex(current + 1), // Ensure activeIndex updates
  };

  return (
    <div className={` w-full relative overflow-hidden bg-black`}>
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
      <Slider {...sliderSettings}>
        {HomeCarousel.map((item, index) => (
          <div
            key={index}
            className={`object-cover relative w-full h-[${viewportHeight * 0.4}px]  lg:h-[${viewportHeight * 1.1}px] `}
          >
            <span
              className={`z-20 hidden md:flex h-[20vh] absolute w-full bg-gradient-to-b from-black/40 via-black/30 via-[10vh] to-transparent  overflow-hidden`}
            ></span>
            <a className='w-full h-full overflow-hidden'>
              {item.type === 'image' ?
                <img
                  src={item.src}
                  alt=''
                  className='object-cover w-full h-full'
                />
              : <video
                  src={item.src}
                  autoPlay
                  className='object-cover w-full h-full'
                />
              }
            </a>
          </div>
        ))}
      </Slider>

      {/* Navigation Controls */}
      <div className='absolute flex justify-between w-full px-4 top-1/2'>
        <button onClick={prevSlide} className='p-2 rounded-full bg-black/30'>
          ←
        </button>
        <button onClick={nextSlide} className='p-2 rounded-full bg-black/30'>
          →
        </button>
      </div>

      {/* Progress Indicators */}
      <div className='absolute z-50 flex justify-center w-full space-x-2 bottom-4'>
        {HomeCarousel.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index + 1)}
            className={`h-2 rounded-full cursor-pointer ${
              activeIndex === index + 1 ? 'bg-white w-12' : 'bg-white/50 w-4'
            }`}
          >
            {activeIndex === index + 1 && !isPaused && (
              <div
                className='h-full bg-blue-500 rounded-full'
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className='absolute z-50 p-2 rounded-full bottom-[50px] w-[50px] right-4 bg-black/30'
      >
        {isPaused ? '▶' : '❚❚'}
      </button>
    </div>
  );
};

export default Carousel;
