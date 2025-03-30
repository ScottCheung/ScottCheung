/** @format */

import React, { useState, useEffect, useRef } from 'react';
import TextAnimate from '../ui/TextAnimate.tsx';
import Database from '../data/Database.json';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
  LazyMotion,
} from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
const data = Database.PersonalInfo.SelfDescribing;

function SelfDescribing() {
  const lang = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);
  const viewwidth = window.innerWidth - scrollbarWidth;

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod'];

    if (mobileKeywords.some((keyword) => userAgent.includes(keyword))) {
      setIsMobile(true);
    }
  }, []);

  const parseText = (text) => {
    const parts = text.split(/({bold}.*?{bold})/).map((part, index) => {
      if (part.startsWith('{bold}') && part.endsWith('{bold}')) {
        return (
          <span
            key={index}
            className='text-white mx-[3px] font-[600] text-[15px] md:text-[20px] lg:text-[22px]'
          >
            {part.replace(/{bold}/g, '')}
          </span>
        );
      }
      return (
        <span
          className='text-white/70 text-[13px] font-[500]  md:text-[18px] lg:text-[20px]'
          key={index}
        >
          {part}
        </span>
      );
    });
    return parts;
  };

  const ref1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ['0vh', '80vh', '280vh', '360vh'], // 调整偏移量使滚动效果更平缓
  });

  // 根据滚动进度计算位移
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['20vw', '0vw', '0vw', '20vw'],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1.3, 1],
    ['20vh', '10vh', '0vh', '-90vw', '-145vh'],
  );
  const width = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [
      `${viewwidth * 0.5}px`,
      `${viewwidth}px`,
      `${viewwidth}px`,
      `${viewwidth * 0.5}px`,
    ],
  );
  const target = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ['-50vw', '0vw', '0vw', '-50vw'],
  );
  const borderBottomRightRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 0, 0, 200],
  );
  const borderTopRightRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 0, 0, 200],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 0.8, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.5, 1, 1, 0.5],
  );
  if (isMobile) {
    return (
      <motion.blockquote
        style={{
          backgroundImage: `url(${data.pic})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        className='relative flex flex-col items-center justify-center w-full px-[20px] py-[10vw] bg-black'
      >
        <motion.span className='absolute z-0 w-full h-full bg-black/75'></motion.span>

        <motion.div className='flex items-center justify-center gap-x-[20px] text-white z-10'>
          <motion.i
            id='AboutMe'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center text-5xl fi lg:text-6xl xl:text-8xl fi-rr-comment-heart`}
          ></motion.i>

          <TextAnimate
            transition={{ duration: 0.3 }}
            className='flex items-center font-mono text-5xl italic font-black tracking-widest uppercase text-nowrap lg:text-6xl xl:text-8xl'
            text={lang === 0 || '0' ? 'About me' : '自述'}
            type='fadeIn'
          />
        </motion.div>

        <div className='z-10 mt-[50px] text-left text-white/75'>
          <img
            loading='lazy'
            className='rounded-full float-right z-10  w-[200px] h-[200px] mb-[10vw]'
            src={Database.PersonalInfo.Avatar[0]}
          />
          {data.description[lang].map((item, index) => (
            <div key={index} className='mb-[30px]'>
              {parseText(item)}
            </div>
          ))}
        </div>
      </motion.blockquote>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={ref1}
        className=' lg:h-[360vh]  w-full flex flex-col overflow-y-scrollW'
      >
        <motion.div
          style={{
            backgroundImage: `url(${data.pic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: width,
            borderTopRightRadius: borderTopRightRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            y: y,
          }}
          className='sticky top-0 z-20 flex flex-col h-[1520px]  lg:h-[120vh] items-center justify-center w-full'
        >
          <motion.span
            style={{
              borderTopRightRadius: borderTopRightRadius,
              borderBottomRightRadius: borderBottomRightRadius,
              opacity: opacity,
            }}
            className='absolute w-full h-full bg-black/75'
          ></motion.span>

          <div className='visblecontainer py-[20vh] z-30'>
            <motion.div
              style={{
                opacity: opacity,
                scale: scale,
                y: y,
              }}
              className='z-10 flex items-center mb-12 font-mono font-bold text-white transform-gppuu text-8xl'
            >
              <i
                id='AboutMe'
                className='flex fi fi-rr-comment-heart mr-[20px]'
              ></i>
              <p className='flex'>{lang === 0 || '0' ? 'About me' : '自述'}</p>
            </motion.div>
            <motion.blockquote className='text-white'>
              <motion.div
                style={{
                  x: x,
                  opacity: opacity,
                  scale: scale,
                  y: y,
                }}
                className='float-right transform-gppuu'
              >
                <motion.div className='flex'>
                  <motion.img
                    loading='lazy'
                    className='rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px]'
                    src={Database.PersonalInfo.Avatar[0]}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  x: target,
                  opacity: opacity,
                  y: y,
                }}
                className='block transform-gppuu'
              >
                {data.description[lang].map((item, index) => (
                  <motion.div className='block mb-[30px] ' key={index + item}>
                    <p
                      style={{
                        lineHeight: 1.2353641176,
                        fontWeight: 500,
                        letterSpacing: '-0.022em',
                        fontFamily:
                          'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                      }}
                    >
                      {parseText(item)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.blockquote>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SelfDescribing;
