/** @format */

import React, { useState, useEffect, useMemo } from 'react';
import Database from '../data/Database.json';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import N from './Num';

// Load data using useMemo for optimization
const animationVariants = useMemo(() => Database.Animation.Variant, []);
const animationTransition = useMemo(() => Database.Animation.Transition, []);
const capability = useMemo(() => Database.PersonalInfo.Capability, []);
const tabs = [
  {
    label: ['Frontend', '\u524D\u7AEF'],
    color1: 'red-500',
    color2: 'red-700',
    content: 'Content for Frontend Tab',
  },
  {
    label: ['Backend', '\u540E\u7AEF'],
    color1: 'orange-500',
    color2: 'amber-500',
    content: 'Content for Backend Tab',
  },
  {
    label: ['DataBase', '\u6570\u636E\u5E93'],
    color1: 'sky-500',
    color2: 'emerald-500',
    content: 'Content for Data Tab',
  },
  {
    label: ['Algorithm', '\u7B97\u6CD5'],
    color1: 'cyan-500',
    color2: 'blue-500',
    content: 'Content for Algorithm Tab',
  },
  {
    label: ['Other', '\u5176\u4ED6'],
    color1: 'indigo-500',
    color2: 'pink-500',
    content: 'Content for Other Tab',
  },
];

function PersonalityandLanguage() {
  const lang = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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

  const PersonalityandLanguage = (
    <motion.div
      className='col-span-12 md:col-span-6 lg:col-span-4 min-h-[930px]'
      data-analytics-section-engagement='name:search filters'
      data-tile-name='search'
      style={{ willChange: 'transform, opacity' }}
    >
      <LazyMotion features={domAnimation}>
        {/* INFJ Section */}
        <motion.div
          className='flex-1 p-[20px] lg:p-[40px] rounded-[28px] relative'
          style={{
            background:
              'linear-gradient(to bottom right, rgba(0, 0, 0,  1), rgba(0, 100, 0, 1))',
          }}
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className='pb-[70%] flex-grow'>
            <motion.div
              className='flex flex-wrap items-center justify-between overflow-hidden'
              initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className='text-[30px] text-white font-semibold'>
                {lang === 0 ? 'Personality' : '\u4EBA\u683C\u7C7B\u578B'}
              </h3>
              <a
                href='https://www.16personalities.com/infj-personality'
                className='text-[17px] font-[600] text-white'
              >
                {lang === 0 ? 'INFJ' : '\u7EFF\u8001\u5934'}
              </a>
            </motion.div>
            <motion.div className='space-y-8'>
              {capability.personality.feature[lang].map((per, index) => (
                <motion.div key={index}>
                  <div
                    className={`$ {per.color1} $ {per.color2} flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                  >
                    <div className='text-[18px] font-[500]'>{per.name}</div>
                    <div className='text-[20px] font-[600]'>
                      <N n={per.label} d={3} /> %
                    </div>
                  </div>
                  <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20'>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: per.column }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`$ {per.color1} $ {per.color2} bg-gradient-to-r h-[15px] rounded-full`}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Language Section */}
        <motion.div
          className='rounded-[28px] flex-1 h-full relative min-h-[600px] overflow-hidden'
          style={{
            background:
              'linear-gradient(to top left, #9795f0 0%, #fbc8d4 100%)',
          }}
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className='p-[20px] lg:p-[40px] flex-grow'>
            <motion.div
              className='space-y-8'
              initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {capability.language[lang].map((personality, index) => (
                <motion.div key={index}>
                  <div
                    className={`$ {personality.color1} $ {personality.color2} flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                  >
                    <div className='text-[18px] font-[500]'>
                      {personality.name}
                    </div>
                    <div className='text-[20px] font-[600]'>
                      <N n={personality.label} d={3} />
                    </div>
                  </div>
                  <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20'>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: personality.column }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`$ {personality.color1} $ {personality.color2} bg-gradient-to-r h-[15px] rounded-full`}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </LazyMotion>
    </motion.div>
  );

  return PersonalityandLanguage;
}

export default PersonalityandLanguage;
