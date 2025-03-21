/** @format */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../data/Database.json';
import { useLanguage } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import Toast from './toast';
import ScrollableContainer from './ScrollableContainer';
import ContactDocker from './contactDocker';
const ColorMapping = [
  'from-red-700 to-red-500',
  'from-orange-500 to-amber-500',
  'from-amber-400 to-yellow-400',
  'from-sky-500 to-emerald-500',
  'from-cyan-500 to-blue-500',
  'from-indigo-500 to-pink-500',
];
const data = Database.PersonalInfo.Contacts;
const codes = Database.PersonalInfo.ContactsScanCode;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function Contact({ isTopOut }) {
  const lang = useLanguage();
  const infos = Database.PersonalInfo.Infos[lang];
  const isOut = isTopOut; //True of false
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        setScrollProgress(container.scrollLeft / maxScroll);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  const Contact = (
    <div
      draggable={false}
      className='relative z-0 w-screen h-full overflow-hidden bg-center bg-cover '
      style={{
        backgroundImage: `url(${data.bg})`,
      }}
    >
      <span
        className={`w-full h-full absolute bg-black -z-20 ${
          isOut ? 'opacity-50' : 'opacity-60'
        }  `}
      ></span>
      <div className='z-20 lg:pt-[100px] px-[10px]'>
        <AnimatePresence>
          <ScrollableContainer
            gap={10}
            containerPY={'lg:pt-[50px]'}
            textColor={'text-white'}
            header={{
              cont: lang == 0 ? 'Contact' : '联络',
              icon: 'fi-rr-following',
            }}
          >
            {data.items.map((type, index) => (
              <motion.div
                data-popover-target={`copy-${index}`}
                variants={WelcomeItem}
                transition={StagerFadeInUp}
                href={type.link}
                key={index}
                whileHover={{ scale: 1.001 }}
                whileTap={{ scale: 0.99 }}
                layout
                // className=""
                className={
                  isOut ?
                    'bg-black/50 backdrop-blur-[80px] shadow-xl '
                  : 'backdrop-blur-lg bg-white/20 ' +
                    'col-span-6 group p-[14px] lg:p-[28px] rounded-[14px] lg:rounded-[28px] relative flex-shrink-0 lg:w-[300px] h-auto md:h-auto'
                }
              >
                <div>
                  <div className={`items-center flex justify-start `}>
                    <i
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                      className={`${type.icon} text-white text-[23px] lg:text-6xl  animate__animated  animate__zoomIn  `}
                    ></i>
                  </div>

                  <div
                    className={`font-[600]  text-[12px] md:text-[15px] lg:text-[27px]  text-white lg:pt-[10px] lg:pb-[30px]`}
                  >
                    {type.type[lang]}{' '}
                  </div>
                  <p
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                    className={` animate__animated text-[13px]  animate__fadeInUp   text-justify 
                                            text-white/50`}
                  >
                    {type.name}
                  </p>

                  <button
                    onClick={() => {
                      const tempInput = document.createElement('input');
                      tempInput.value = type.name;
                      document.body.appendChild(tempInput);
                      tempInput.select();
                      document.execCommand('copy');
                      document.body.removeChild(tempInput);
                      {
                        lang == 0 &&
                          Toast(
                            'success',
                            `you have added ${type.type[0]} info into your clipboard`,
                            3000,
                          );
                      }
                      {
                        lang == 1 &&
                          Toast(
                            'success',
                            `您已成功添加 ${type.type[1]}信息 到您的剪贴板`,
                            3000,
                          );
                      }
                    }}
                    className='absolute top-0 bottom-0 left-0 right-0 w-full h-full '
                  >
                    <span
                      className={`absolute  ${innerWidth < 1024 ? ' top-[14px] right-[14px] w-[30px] h-[30px]' : 'right-[28px] bottom-[28px] w-[40px] h-[40px]'} bg-black/30 group-hover:bg-black rounded-full  flex justify-center items-center`}
                      type='link'
                    >
                      <span
                        className={
                          innerWidth < 1024 ? `w-[15px] h-[15px]` : (
                            `w-[20px] h-[20px]`
                          )
                        }
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          className='fill-white'
                        >
                          <path d='M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z'></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>

                <div className='absolute -top-[50px] left-0 right-0 z-50 group-hover:flex overflow-visible justify-center w-full animate__fast text-white rounded-full shadow-2xl hidden animate__animated animate__fadeInUp backdrop-blur-md bg-black/80 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800'>
                  <p className='px-6 py-4 text-center text-[15px]'>
                    {lang == 0 && 'Copy '}
                    {lang == 1 && '复制 '}
                    {type.type[lang]}
                    {lang == 0 && ' into your clipboard.'}
                    {lang == 1 && ' 到剪贴板。'}
                  </p>
                  <div data-popper-arrow></div>
                </div>
              </motion.div>
            ))}
          </ScrollableContainer>
          {/* Contact way */}
          <div className='py-12 sm:py-32 '>
            <div className='flex lg:hidden flex-col gap-y-[20px] justify-center'>
              <motion.ul
                ref={scrollRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
                className='flex items-center justify-between px-20 overflow-x-auto gap-[20px] scrollbar-hide'
              >
                {data.items.map((type, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.001 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className='group'
                  >
                    <motion.a
                      href={type.link}
                      target={type.blank && '_blank'}
                      rel={type.blank && 'noopener noreferrer'}
                      className='flex flex-col gap-[20px]  '
                    >
                      <div className='flex items-center justify-center'>
                        <i
                          style={{
                            animationDelay: `${index * 0.1}s`,
                          }}
                          className={`${type.icon} text-white text-5xl animate__animated  animate__zoomIn `}
                        ></i>
                      </div>
                      <motion.div
                        layoutId='contactPopup'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex text-white rounded-full shadow-2xl z-50justify-center backdrop-blur-md bg-white/20 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800'
                      >
                        <p className='px-3 py-2 duration-100  text-center w-full text-nowrap  text-[10px] '>
                          {type.type[lang]}
                        </p>
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
              {/* 进度条 */}
              <div className='flex mt-[30px] justify-center w-full'>
                <div className='flex  w-[150px] h-[10px] bg-gray-600/30 rounded-full overflow-hidden'>
                  <motion.div
                    className='flex h-full bg-white rounded-full'
                    animate={{ width: `${5 + scrollProgress * 100}%` }}
                    transition={{ duration: 0 }}
                  />
                </div>
              </div>
            </div>
            <ContactDocker themeColor={'white'} />
          </div>

          <footer className='flex justify-center mb-24 text-[10px] lg:text-[15px] text-white/60 '>
            <p>{`Copyright © 2023-${new Date().getFullYear()} - All rights reserved by Scott Cheung`}</p>
          </footer>
        </AnimatePresence>
      </div>
      <div className='absolute bg-black h-[300px] w-full -bottom-[300]'></div>
    </div>
  );

  return Contact;
}

export default Contact;
