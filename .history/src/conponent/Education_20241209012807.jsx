/** @format */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Database from '../data/Database.json';
import { Link } from 'react-router-dom';
import { hideRow, useLanguage } from '../help/helpFunction';
import More from './More';
import { useInView } from 'react-intersection-observer';
import ScrollableContainer from './ScrollableContainer';
import CtButton from './ctButton';

const data = Database.PersonalInfo.Education;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;

function Education({ hideTittle, simpleVer }) {
  const isTittle = hideTittle || false;
  const lang = useLanguage();
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    // threshold: 0.6,
  });

  const Education = (
    <div className='z-30 lg:min-h-[100vh] flex w-full items-center'>
      {/* Item 容器 */}
      <ScrollableContainer
        id='Education'
        gap={20}
        header={{
          cont: lang == '1' ? '教育' : 'Education',
          icon: 'fi-rr-circle-book-open',
        }}
      >
        <motion.div
          layout
          key={0}
          // variants={WelcomeItem}
          // transition={StagerFadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
          className='col-span-12 group'
        >
          <div
            className={`${simpleVer ? 'hidden' : ''} rounded-[14px] lg:rounded-[28px] transition-all duration-300 relative  lg:w-[800px]  lg:h-full overflow-hidden ${
              hideTittle ? 'bg-gray-50 hover:bg-sky-100/50' : 'bg-white/80'
            }`}
          >
            <img
              src='https://img.picgo.net/2024/12/06/4la21798afeaf25655.jpg'
              alt=''
              className='w-auto h-full '
            />
            <a
              href={'/major/ArtificalInteligence'}
              className='absolute top-0 bottom-0 left-0 right-0 w-full h-full '
            >
              <button
                className={`absolute  ${windowWidth < 1024 || simpleVer ? ' top-[14px] right-[14px] lg:top-[28px] lg:right-[28px] ' : 'right-[28px] bottom-[28px]'} w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-gray-900/30 group-hover:bg-gray-900 transition-all duration-300  rounded-full  flex justify-center items-center`}
                type='link'
              >
                <span
                  className={
                    windowWidth < 1024 ? `w-[15px] h-[15px]` : (
                      `w-[20px] h-[20px]`
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
        {data.map((Experience, index) => (
          <motion.div
            layout
            href={Experience.href}
            key={index + 1}
            variants={WelcomeItem}
            transition={StagerFadeInUp}
            whileTap={{ scale: 0.95 }}
            className='col-span-6 group'
          >
            <div
              className={`p-[14px] lg:p-[28px] rounded-[14px] lg:rounded-[28px] transition-all duration-300 relative  w-auto h-auto ${simpleVer ? 'lg:w-[300px]' : 'lg:w-[500px]'}  md:h-auto ${
                hideTittle ? 'bg-gray-50 hover:bg-sky-100/50' : 'bg-white/80'
              }`}
            >
              <div
                className={` max-w-[70px] lg:max-w-[120px] h-auto items-center flex justify-center overflow-hidden mb-[14px] md:mb-[14px] ${
                  Experience.tag[0][0] == 'Bachelor' ?
                    'rounded-full bg-white '
                  : ''
                }  `}
              >
                <img
                  src={Experience.logo}
                  alt={Experience.university}
                  className={`rounded-xl  `}
                ></img>
              </div>

              <div
                className={simpleVer || windowWidth < 1024 ? ' ' : ' pb-[40px]'}
              >
                <div className='items-start justify-start my-[10px] flex md:flex gap-x-4 md:flex-col '>
                  <div
                    className={
                      windowWidth > 1024 ?
                        `typography-card-headline font-[600]   duration-300  transition-all text-sky-950 gap-x-[10px]   ${simpleVer ? 'text-[20px] ' : 'text-[35px]  flex group-hover:text-[38px] '}`
                      : 'text-[13px] md:text-[18px]  font-[600] transition-all flex flex-col md:flex-row  gap-x-[5px]'
                    }
                  >
                    <div
                      className={`flex items-center  ${simpleVer || windowWidth < 1024 ? '' : ' lg:h-[60px]'}`}
                    >
                      {`${Experience.major[lang][0]}`}
                      {lang == 1 && Experience.major[lang][1]}{' '}
                    </div>
                    <div className='flex items-center'>
                      {lang == 0 && Experience.major[lang][1]}
                    </div>
                  </div>
                </div>
                {/* Duration */}
                <motion.div
                  layout
                  className={`${
                    windowWidth > 1024 ?
                      'typography-family-paragraph '
                    : ' text-[10px] inline-flex '
                  } flex justify-center transition-all duration-500 items-center font-[600] w-full  my-2  text-center text-white rounded-[7px] md:rounded-full  lg:text-[15px]  text-justify-between py-2 category bg-sky-900  `}
                >
                  {Experience.time[lang]}
                </motion.div>
                {/* Tag */}
                <div
                  className={`${simpleVer || windowWidth < 1024 ? 'hidden' : 'flex justify-start  py-5 space-x-3 text-[15px]'}`}
                >
                  <div className='inline-flex border-sky-900/70  transition-all duration-300  text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-[13px] lg:text-[13px]  items-center  justify-center space-x-2 cursor-pointer   rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-1.5'>
                    {Experience.tag[lang][0]}
                  </div>
                  {Experience.tag[lang][1] && (
                    <div className='iinline-flex border-sky-900/70 transition-all duration-300  text-white bg-gradient-to-r from-emerald-500 to-sky-500 text-[13px] lg:text-[13px]  items-center  justify-center space-x-2 cursor-pointer   rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-1.5'>
                      {Experience.tag[lang][1]}
                    </div>
                  )}
                </div>

                {/* Des */}
                <div
                  className={simpleVer || windowWidth < 1024 ? 'hidden' : ' '}
                >
                  <p
                    style={{
                      ...hideRow(3),
                      animationDelay: `${index * 0.3}s`,
                    }}
                    className={` text-gray-400 group-hover:text-gray-700 text-[15px]  darrk:text-gray-50`}
                  >
                    {Experience.description[lang]}
                  </p>{' '}
                  <More color={'sky'} />
                </div>
              </div>

              <a
                href={Experience.href}
                className='absolute top-0 bottom-0 left-0 right-0 w-full h-full '
              >
                <button
                  className={`absolute  ${windowWidth < 1024 || simpleVer ? ' top-[14px] right-[14px] lg:top-[28px] lg:right-[28px] ' : 'right-[28px] bottom-[28px]'} w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-gray-900/30 group-hover:bg-gray-900 transition-all duration-300  rounded-full  flex justify-center items-center`}
                  type='link'
                >
                  <span
                    className={
                      windowWidth < 1024 ? `w-[15px] h-[15px]` : (
                        `w-[20px] h-[20px]`
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
      </ScrollableContainer>
    </div>
  );

  return Education;
}

export default Education;
