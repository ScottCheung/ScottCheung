/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Database from '../data/Database.json';
import TextAnimate from '../ui/TextAnimate.tsx';

const ScrollableContainer = ({
  id,
  children,
  gap,
  toRight,
  textColor,
  headerPY,
  headerStyle,
  containerPY,
  noPaddingInline = true,
  header = { cont: '', icon: '' },
}) => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const scrollToRight = () => {
    const container = containerRef.current;
    if (toRight) {
      container.scrollLeft = containerRef.current.scrollWidth;
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const atStart = container.scrollLeft === 0;
    const atEnd =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  };

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    const childWidth = container.firstChild?.offsetWidth + gap || 0;
    container.scrollBy({ left: -childWidth, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const childWidth = container.firstChild?.offsetWidth + gap || 0;
    container.scrollBy({ left: childWidth, behavior: 'smooth' });
  };

  const buttonStyle = `group bg-black/70 group-hover:bg-black/30 backdrop-blur-[5px] w-[50px] h-[50px] animate__animated animate__zoomIn flex rounded-full justify-center items-center transition-all transform duration-300`;
  const svg = ` fill-gray-300 w-[25px] h-[25px]  ${isAtEnd || isAtStart ? '' : 'group-hover:fill-white'}`;

  return (
    <div className='flex flex-col items-start justify-start w-full p-4 lg:p-0'>
      {/* Header & Control Buttons */}
      {header && <div id={id} className='h-[5vh]'></div>}
      <motion.div
        style={{
          width: headerStyle,
          paddingInline:
            windowWidth > 1024 && noPaddingInline ?
              'calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)'
            : '0',
        }}
        className={`flex ${header ? 'justify-between w-full  ' : 'max-w-[1680px] justify-start '} items-center px-[10px] gap-[20px]  ${headerPY ? headerPY : 'mt-[50px] mb-[20px]'}`}
      >
        {/* Header */}
        {header && (
          <div
            className={`flex items-center justify-center w-full lg:w-auto ${textColor ? textColor : 'text-gray-800'}`}
          >
            <motion.div className='flex items-center justify-center gap-x-[20px]'>
              <motion.i
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center text-5xl fi lg:text-6xl xl:text-8xl ${header.icon}`}
              ></motion.i>

              <TextAnimate
                transition={{ duration: 0.3 }}
                className='flex items-center font-mono text-5xl font-black text-nowrap lg:text-6xl xl:text-8xl'
                text={header.cont}
                type='fadeIn'
              />
            </motion.div>
          </div>
        )}
        {/* Button Group */}
        <div
          className={`${
            windowWidth > 1024 ?
              'flex items-center justify-center gap-x-[20px]'
            : 'hidden'
          }`}
        >
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: isAtStart ? 0.2 : 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            onClick={handleScrollLeft}
            disabled={isAtStart}
            className={buttonStyle}
            style={{
              opacity: isAtStart ? 0.2 : 1,
              cursor: isAtStart ? '' : 'pointer',
            }}
          >
            <svg
              className={`${svg} rotate-180`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='8 8 20 20'
            >
              <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
            </svg>
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: isAtEnd ? 0.2 : 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            onClick={handleScrollRight}
            disabled={isAtEnd}
            className={buttonStyle}
            style={{
              opacity: isAtEnd ? 0.2 : 1,
              cursor: isAtEnd ? '' : 'pointer',
            }}
          >
            <svg
              className={svg}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='8 8 20 20'
            >
              <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
            </svg>
          </motion.button>
        </div>
      </motion.div>
      {/* Container */}
      <motion.div
        layout
        variants={
          windowWidth > 1024 ?
            Database.Animation.Variant.Welcomevisblecontainer
          : undefined
        }
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, margin: '-30%' }}
        onAnimationComplete={scrollToRight}
        style={{
          paddingInline:
            windowWidth > 1024 && noPaddingInline ?
              'calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)'
            : '0',
        }}
        className={`${
          windowWidth > 1024 ?
            `flex overflow-x-auto gap-[${gap}px] ${containerPY ? `${containerPY} py-[${containerPY}px]` : 'py-[30px]'} z-30 `
          : 'grid grid-cols-12 gap-4 w-full p-[20px] px-[10px]'
        } w-full scroll-smooth scrollbar-hide flex-shrink-0`}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollableContainer;
