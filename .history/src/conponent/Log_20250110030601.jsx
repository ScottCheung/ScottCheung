/** @format */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import packageinfo from '../data/update-log.json';

const globalBradius = 'lg:rounded-[28px] md:rounded-[14px]';
const globalBpadding = 'lg:p-[40px] p-[28px]';
const button = `text-sky-800 border-sky-700 hover:bg-sky-700 items-center gap-x-[20px] justify-center items-center w-full flex  px-[20px] hover:px-[50px] py-2 text-[10px] md:text-[20px] border rounded-full hover:font-semibold  hover:text-white  transition-all animate__animated animate__fadeInUp `;
const headerHeight =
  'h-[30px]  w-[30px] text-[15px] lg:h-[50px]  lg:w-[50px] lg:text-[25px]';
const lang = localStorage.getItem('lang') || 0;
const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const LogEntry = ({ entry }) => (
  <motion.li
    className={`relative border-gray-200 darrk:border-gray-700 my-[30px]`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className='flex flex-col gap-y-[10px]'>
      <div
        className={`flex items-center ${headerHeight} gap-[20px] text-gray-900 darrk:text-white`}
      >
        <h3 className='flex  items-center font-[600]'>
          <i
            className={` flex text-blue-800 mr-[10px] fi fi-sr-memo-circle-check`}
          ></i>
          {entry.version}{' '}
        </h3>
        <span className='inline-flex text-[12px] bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded darrk:bg-blue-900 darrk:text-blue-300'>
          Latest
        </span>
      </div>
      <div
        className={`flex flex-wrap -mt-[5px] lg:-mt-[15px] items-center text-[10px] lg:text-[13px] text-gray-400 gap-x-[10px] lg:gap-x-[20px]`}
      >
        <div className='flex items-center gap-2'>
          <i className='flex fi fi-rr-user'></i>
          <span className='flex'>{entry.author}</span>
        </div>
        <time className='flex items-center gap-2'>
          <i className='flex fi fi-rr-clock'></i>
          <span className='flex'>{new Date(entry.time).toLocaleString()}</span>
        </time>
        <div className='flex items-center gap-2'>
          <i className='flex fi fi-rr-marker'></i>
          <span className='flex'>{`${entry.address.city}, ${entry.address.state}, ${entry.address.zipcode}`}</span>
        </div>
      </div>
      <header className='mb-4 text-[15px] lg:text-[20px] font-normal text-gray-900 darrk:text-gray-400'>
        {entry.header[lang]}
      </header>
      {entry.new && entry.new[lang] && entry.new[lang].length > 0 && (
        <Section
          title='New Feature'
          items={entry.new[lang]}
          Icon={'fi-rr-features text-indigo-500'}
        />
      )}
      {entry.fix && entry.fix[lang] && entry.fix[lang].length > 0 && (
        <Section
          title='Fix Bug'
          items={entry.fix[lang]}
          Icon={'fi-rr-productivity text-orange-500'}
        />
      )}
      {entry.impro && entry.impro[lang] && entry.impro[lang].length > 0 && (
        <Section
          title='Function Improvement'
          items={entry.impro[lang]}
          Icon={'fi-br-rotate-right text-green-500'}
        />
      )}
    </div>
  </motion.li>
);

const Section = ({ title, items, Icon }) => (
  <motion.div
    className='flex items-start p-[14px] gap-[14px] mb-4 bg-gray-100  rounded-[14px] shadow-sm'
    initial='hidden'
    animate='visible'
    variants={animationVariants}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    <i className={`lg:flex hidden fi ${Icon}  text-5xl `}></i>
    <span className='flex flex-col text-[15px] '>
      <strong className='flex items-start mb-1 text-[15px] -mt-1'>
        {title}:{' '}
      </strong>
      {items && items.length > 0 ?
        items.map((item, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='text-gray-700'
          >
            {item}
          </motion.p>
        ))
      : <span className='text-gray-400'>No {title.toLowerCase()}</span>}
    </span>
  </motion.div>
);

export default function Log() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const latestEntryKey = Object.keys(packageinfo).sort().pop();
  const latestEntry = packageinfo[latestEntryKey];

  useEffect(() => {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isOpen, scrollbarWidth]);

  useEffect(() => {
    const savedVersion = localStorage.getItem('version');
    if (savedVersion === latestEntry.version) {
      setIsOpen(false);
    }
  }, [latestEntry.version]);

  const handleClose = () => {
    localStorage.setItem('version', latestEntry.version);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      id='log-window'
      className='fixed top-0 left-0 z-50 flex justify-center w-full h-full bg-gray-800 bg-opacity-75 md:items-center backdrop-blur-md'
      onClick={handleClose}
    >
      <motion.div
        className={`relative lg:w-3/4 w-full md:max-w-5xl lg:max-h-[90vh]  lg:max-w-7xl bg-white ${globalBradius} ${globalBpadding} shadow-lg`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute top-0 left-0 text-[25px]  right-0 flex items-center justify-between lg:p-[40px] p-[28px]'>
          <h2 className='flex items-center mb-4 font-bold'>
            {lang == 0 ? 'Updates Log' : '更新日志'}
          </h2>
          <button
            className='flex text-gray-500 hover:text-gray-700'
            onClick={handleClose}
          >
            <i className='flex fi fi-ss-cross'></i>
          </button>
        </div>

        <div
          className='flex flex-col max-h-[70vh]  w-full overflow-y-auto mt-[50px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
          id='log-entries'
          style={{ imageMask: 'transparent' }}
        >
          <ol className={`relative pb-[10vh]`}>
            <LogEntry entry={latestEntry} />
          </ol>
        </div>
        <div className='absolute bottom-0 left-0 text-[25px]  right-0 flex items-center justify-between lg:p-[40px] p-[28px]'>
          <div className='flex gap-x-[30px] justify-between w-full'>
            <motion.a
              href='/info'
              style={{ animationDelay: '0.2s' }}
              className={button}
              onClick={handleClose}
            >
              <i className='flex fi fi-sr-galaxy-star text-[20px]'></i>
              {['More infos', '更多'][lang]}
            </motion.a>
            <motion.a
              href='https://xianzhe.site'
              style={{ animationDelay: '0.4s' }}
              className={button}
              onClick={handleClose}
            >
              <i className='flex fi fi-rr-file-download text-[20px]'></i>
              {['OK', ' 好的'][lang]}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
