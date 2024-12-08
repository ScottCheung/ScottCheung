/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import { motion, AnimatePresence, animate } from 'framer-motion';
import database from '../data/Database.json';
import Contact from '../conponent/Contact';
import { useLanguage } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import LogAll from '../conponent/LogAll';

export default function Profile() {
  // document.body.style.overflowX = 'hidden';
  const lang = useLanguage();
  const infos = database.PersonalInfo.Infos[lang];
  const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
  const LeftappearBar = database.Animation.Transition.LeftappearBar;
  const item = database.Animation.Variant.LeftWelcomeItem;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=' bg-[#f5f5f7] profile-page'>
      <Navbar topTextColor={true} />
      <main className=' profile-page'>
        <section
          style={{
            height: windowWidth > 1080 ? '600px' : '300px',
            maskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
          }}
          className='relative'
        >
          <motion.div
            initial={{ opacity: 0, y: '60px', scale: 0.95 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.9,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            className='absolute top-0 bottom-0 left-0 w-full h-full bg-left bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                "url('https://img.picgo.net/2024/12/08/long-banner6b6fc2858fd99033.jpg')",
            }}
          >
            <span
              // id="blackOverlay"
              className='absolute w-full h-full bg-black opacity-0'
            ></span>
          </motion.div>
        </section>
        <div className='visblecontainer flex flex-col gap-[28px] pb-[30vh]'>
          <motion.div
            initial={{ height: '0px', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.455, 0.03, 0.515, 0.955] }}
            className='relative flex flex-col bg-white pt-[14px] md:pt-[28px] lg:pt-[40px] px-[14px] md:px-[28px] lg:px-[40px] pb-[80px] rounded-[28px]  -mt-[80px] animate__animated animate__fadeInUp '
          >
            <div className='flex justify-center w-full'>
              <img
                alt='...'
                src='https://img.picgo.net/2024/12/06/profile26fe37ccfe6ad6d7.png'
                className=' rounded-full h-auto absolute  -m-[150px] animate__animated animate__zoomIn'
                style={{
                  maxWidth: '200px',
                  filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
                }}
              />
            </div>
            <div className='text-center '>
              <h3
                style={{ fontFamily: 'Hey August, sans-serif' }}
                className='my-32 text-[30px] lg:text-[60px] font-[600] leading-normal text-gray-800 animate__animated animate__zoomIn'
              >
                {['Scott Cheung', '张贤哲'][lang]}
              </h3>
              <a
                href='https://maps.app.goo.gl/Eg2DYKQuALM3ioqg7'
                className='mt-0 mb-2 text-xl font-[600] leading-normal text-gray-500 uppercase'
              >
                <i className='mr-2 text-gray-500 fi fi-rr-marker'></i>

                {lang == 0 && 'Sydney, Australia'}
                {lang == 1 && '澳大利亚，悉尼'}
              </a>
              <div className='mt-10 mb-2 text-gray-700'></div>
            </div>
            <div className='py-10 mt-10 text-center border-t'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full px-4 lg:w-9/12'>
                  <p className='mb-4 text-3xl leading-relaxed text-gray-500 '>
                    {lang == 0 &&
                      'Please note that all these informations is private. Please respect privacy and please do not spread it.'}
                    {lang == 1 &&
                      '请不要随意传播个人信息，请尊重他人隐私，谢谢。'}
                  </p>
                  <button
                    className='font-normal text-pink-500 text-[15px] animate__animated animate__zoomIn'
                    onClick={(e) =>
                      e.preventDefault() & setIsExpanded(!isExpanded)
                    }
                  >
                    <motion.div
                      layout
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`animate__animated  animate__zoomIn`}
                    >
                      {isExpanded ?
                        ['Collapse', '收起'][lang]
                      : [
                          'I agree, show me more information.',
                          '我同意，显示更多信息。',
                        ][lang]
                      }
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
            {isExpanded && (
              <motion.div>
                {/* Basic Information */}
                <div className='flex flex-col'>
                  <h3
                    style={{
                      lineHeight: 1.19048,
                      fontWeight: 600,
                      letterSpacing: '0.011em',
                    }}
                    className='py-4 text-[30px] text-gray-900 animate__animated animate__zoomIn'
                  >
                    {lang == 0 && 'Basic Information'}
                    {lang == 1 && '基本信息'}
                  </h3>
                  <motion.div
                    vibrants={item}
                    className={`grid grid-cols-12 lg:gap-x-[40px]`}
                  >
                    {infos.map((info, index) => {
                      // 判断是否为 "Age"
                      if (info.cont === 'Age' || info.cont === '年龄') {
                        // 计算年份，这里假设 birthYear 是存储出生年份的变量
                        const currentYear = new Date().getFullYear();
                        const age = currentYear - 1997 - 1;
                        info.icon = age;
                      }

                      return (
                        <motion.div
                          key={index + info.icon}
                          transition={LeftappearBar}
                          whileHover={{ scale: 1.001 }}
                          whileTap={{ scale: 0.99 }}
                          layout
                          style={{ animationDelay: `${0.05 * index}s` }}
                          className='flex justify-between col-span-12 py-4 border-b lg:col-span-6 md:py-8 animate__animated animate__zoomIn'
                        >
                          <div className='flex gap-4 lg:gap-8'>
                            <i
                              className={`flex text-[12px] md:text-[18px] lg:text-3xl text-gray-900 fi ${info.label}`}
                            ></i>
                            <p className='flex text-[12px] md:text-[18px] lg:text-3xl font-medium text-gray-900 truncate darrk:text-white'>
                              {info.cont}
                            </p>
                          </div>
                          <div className='inline-flex items-center text-[10px] md:text-[15px] text-gray-600 lg:text-3xl darrk:text-white'>
                            {info.icon}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            variants={visblecontainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='bg-white pt-[14px] md:pt-[28px] lg:pt-[60px] px-[14px] md:px-[28px] lg:px-[40px] pb-[80px] rounded-[28px] '
          >
            <LogAll />
          </motion.div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
