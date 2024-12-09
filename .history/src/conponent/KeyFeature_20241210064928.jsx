/** @format */

import React, { useState, useEffect, useRef } from 'react';
import Database from '../data/Database.json';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from 'framer-motion';
import N from './Num';
import { hideRow, useLanguage } from '../help/helpFunction';
import TextAnimate from '../ui/TextAnimate.tsx';
import Underline from '../ui/underline.tsx';
const KeyFeatures = Database.PersonalInfo.KeyFeature1;
const bg = Database.PersonalInfo.KeyFeaturebg;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function KeyFeature() {
  const lang = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080); // 初始值
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-100%', '0%'],
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [`${viewwidth * 0.5}px`, `${viewwidth}px`],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${viewwidth * 0.5}px`, `${viewwidth * 0}px`],
  );
  const borderRadius = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const KeyFeature = (
    <motion.div
      ref={ref}
      style={{
        width: isMobile ? `${viewwidth}px` : width,
        y: isMobile ? 0 : y,
        borderRadius: isMobile ? 28 : borderRadius,
        ...(currentPath == '/' && {
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
        }),
      }}
      className={` flex h-[1000px] md:h-[150vh] overflow-hidden justify-center transform-gpuu`}
    >
      <motion.section
        className={`relative flex items-center w-[${viewwidth}px] overflow-hidden bg-gradient-to-r from-lime-500 to-emerald-500`}
      >
        <img
          className='absolute top-0 left-0 object-cover object-bottom w-full h-full transition-all'
          src={bg[0]}
        />
        <motion.span className='absolute z-0 w-full h-full transition-all bg-black/60'></motion.span>
        <div className='flex items-center justify-center w-full h-full'>
          <motion.div
            variants={Welcomevisblecontainer}
            initial='hidden'
            whileInView='visible'
            transition={StagerFadeInUp}
            style={{
              paddingInline:
                windowWidth > 1024 ?
                  'calc(50vw - min(1680px, var(--global-viewport-content-responsive)) / 2)'
                : '10px',
            }}
            className='z-40 grid w-full grid-cols-12 gap-8'
          >
            {KeyFeatures.map((KeyFeature, index) => (
              <motion.div
                key={index}
                variants={WelcomeItem}
                transition={StagerFadeInUp}
                viewport={{ margin: '-30%' }}
                layout
                className='flex group relative px-[20px] rounded-[28px] hover:bg-gradient-to-t from-lime-500/20 to-emerald-500/20 hover:backdrop-blur-md hover:shadow-2xl focus:shadow-2xl  col-span-6 md:col-span-4 lg:col-span-4'
              >
                <a
                  href={`${KeyFeature.href}`}
                  className='flex flex-col items-center justify-center p-[28px] w-full item-center md:justify-center'
                >
                  <div
                    style={{ fontFamily: 'Hey August, sans-serif' }}
                    className='flex items-center text-[100px] lg:text-[150px] text-white'
                  >
                    <N n={KeyFeature.no} d={2} />
                  </div>
                  <div className='flex items-center justify-center w-full -mt-[30px]'>
                    <div className='flex gap-[20px] items-center text-transparent bg-gradient-to-br bg-clip-text from-[-20%] to-[120%] from-lime-500 to-emerald-500'>
                      <i
                        className={`text-[30px] md:text-[40px] lg:text-[50px] fi ${KeyFeature.icon}`}
                      ></i>
                      <TextAnimate
                        animateOnce={true}
                        duration={0.3}
                        delay={-1 + 0.3 * index}
                        className='flex text-[15px] md:text-[20px] lg:text-[30px] font-[600]'
                        text={KeyFeature.keyfeature[lang]}
                        type='fadeIn'
                      />
                      <Underline
                        height={1}
                        // alwaysShow={true}
                        color='current'
                        margintop={2}
                      />
                    </div>
                  </div>
                </a>
                <div
                  id={`keyFeatureDes-${index}`}
                  className='  absolute z-10 invisible inline-flex w-96 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800'
                >
                  <div className='flex px-6 py-4 group'>
                    <p className='text-[13px] text-left font-mono'>
                      {KeyFeature.description[lang]}
                    </p>

                    <span
                      className={`absolute -bottom-${2} left-0 right-0 w-0  h-${2} transition-all duration-300 rounded-full  group-hover:w-full`}
                    ></span>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );

  return KeyFeature;
}

export default KeyFeature;
