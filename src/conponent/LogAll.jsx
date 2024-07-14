import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import packageinfo from '../data/update-log.json';
import { hideRow, useLanguage } from '../help/helpFunction';

const globalBradius = 'lg:rounded-[28px] ';
const globalradius = 'lg:rounded-[14px] rounded-[12px]';
const globalBpadding = 'lg:p-[28px] p-[14px]';
const globalpadding = 'lg:p-[14px] p-[12px]';
const iconoffset = 'ml-[15px] lg:ml-[25px]';
const headerHeight =
  'h-[30px] -left-[15px] w-[30px] text-[15px] lg:-left-[25px] lg:h-[50px]  lg:w-[50px] lg:text-[25px]';
const lang = localStorage.getItem('lang') || 0;
const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const LogEntry = ({ entry }) => (
  <motion.li
    layoutId={entry.version}
    className={`relative border-gray-200 darrk:border-gray-700 my-[30px]`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ offset: 0.5 }}
    transition={{ duration: 0.9 }}
  >
    <span
      className={`absolute flex items-center justify-center ${headerHeight} bg-blue-100 rounded-full ring-2 ring-white darrk:ring-gray-900 darrk:bg-blue-900`}
    >
      <i className='flex text-blue-800 fi fi-sr-memo-circle-check'></i>
    </span>
    <div className='flex flex-col pl-[30px] lg:pl-[50px] gap-y-[20px]'>
      {/* Header */}
      <div
        className={`flex items-center ${headerHeight} gap-[20px] text-gray-900 darrk:text-white`}
      >
        <h3 className='flex font-[600]'>{entry.version} </h3>
        <span className='inline-flex text-[12px] bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded darrk:bg-blue-900 darrk:text-blue-300'>
          Latest
        </span>
      </div>
      {/* Author & Time & Location */}
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
          <span className='flex'>{`${entry.address.city}, ${entry.address.state}`}</span>
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
    <span className='flex flex-col text-[13px] '>
      <strong className='flex items-start mb-1 text-[15px] -mt-1'>
        {title}:{' '}
      </strong>
      {items && items.length > 0 ? (
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
      ) : (
        <span className='text-gray-400'>No {title.toLowerCase()}</span>
      )}
    </span>
  </motion.div>
);

export default function Log() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDescending, setIsDescending] = useState(true);

  const handleToggleSortOrder = () => {
    setIsDescending(!isDescending);
  };

  const sortedEntries = Object.keys(packageinfo)
    .map((key) => packageinfo[key])
    .sort((a, b) =>
      isDescending
        ? new Date(b.time) - new Date(a.time)
        : new Date(a.time) - new Date(b.time),
    );

  return (
    <motion.div
      className={`relative flex`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex flex-col w-full h-full'>
        <div className='flex justify-end mb-4'>
          <motion.button
            layout
            onClick={handleToggleSortOrder}
            className='px-8 py-4  text-white bg-blue-500 text-[15px] rounded-full'
          >
            {isDescending ? 'Sort Ascending' : 'Sort Descending'}
          </motion.button>
        </div>
        <div
          className='flex flex-col w-full h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
          id='log-entries'
          style={{ imageMask: 'transparent' }}
        >
          <ol
            className={`relative border-blue-200 ${iconoffset} border-s-2 darrk:border-gray-700`}
          >
            {sortedEntries.map((entry, index) => (
              <LogEntry key={index} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}
