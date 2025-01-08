/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
import { motion } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import N from './Num';

// 从 Database 加载数据
const { language, personality } = Database.PersonalInfo.Capability;
const { ProgressBarvisblecontainer } = Database.Animation.Variant;

function PersonalityandLanguage() {
  const lang = useLanguage();
  const [current, setCurrent] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 生成进度条组件
  const ProgressBar = ({ data }) =>
    data.map((item, index) => (
      <motion.div
        key={index + item.name}
        onClick={() => setCurrent(current === item.name ? null : item.name)}
        className='hover:cursor-pointer'
      >
        <motion.div className='flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]'>
          <div className='text-[23px] font-[500] flex items-baseline'>
            <span>{item.right}</span>
            <div className='ml-[10px] text-[15px] flex items-baseline'>
              <span className='mb-2'>{item.name}</span>
            </div>
          </div>
          <div className='text-[20px] font-[600]'>
            <N n={item.label} d={3} /> %
          </div>
        </motion.div>
        <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20'>
          <motion.div
            variants={{
              hidden: { opacity: 0, width: '0%' },
              visible: { opacity: 1, width: `${item.column}` },
            }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className='bg-gradient-to-r text-transparent bg-clip-text h-[15px] rounded-full'
          ></motion.div>
        </motion.div>
        {current === item.name && (
          <motion.div
            className='bg-white/5 p-[20px] my-[20px] rounded-[14px]'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
          >
            <div className='text-transparent bg-clip-text'>
              <div className='text-[20px] font-black'>{item.name}</div>
              <div className='flex justify-start text-[15px] gap-[10px] items-baseline'>
                <div className='font-[600]'>
                  {item.right}
                  <N n={item.label} d={1} /> %
                </div>
                <p className='font-[600]'>+</p>
                <div className='font-[600]'>
                  {item.left} <N n={100 - item.label} d={1} /> %
                </div>
              </div>
              <div className='text-[15px] my-[20px] font-[600]'>{item.des}</div>
            </div>
          </motion.div>
        )}
      </motion.div>
    ));

  return (
    <motion.div
      layout
      className='col-span-12 md:col-span-6 lg:col-span-4 min-h-[930px]'
    >
      {/* Personality Section */}
      <motion.div
        layout
        className='p-[20px] lg:p-[40px] rounded-[28px] flex flex-col'
        style={{
          background:
            'linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 100, 0, 1))',
        }}
      >
        <div className='mb-[40px]'>
          <h3 className='text-[30px] text-white font-[600]'>
            {lang === 0 ? 'Personality' : '人格类型'}
          </h3>
          <a
            href='https://www.16personalities.com/enfp-personality'
            className='text-white text-[17px] font-[600]'
          >
            {lang === 0 ? 'ENFP' : '快乐小狗'}
          </a>
        </div>
        <motion.div
          variants={ProgressBarvisblecontainer}
          initial='hidden'
          whileInView='visible'
        >
          <ProgressBar data={personality.feature[lang]} />
        </motion.div>
      </motion.div>

      {/* Language Section */}
      <motion.div
        layout
        className='p-[20px] lg:p-[40px] rounded-[28px] mt-8 flex flex-col'
        style={{
          background: 'linear-gradient(to top left, #9795f0 0%, #fbc8d4 100%)',
        }}
      >
        <div className='mb-[20px]'>
          <h3 className='text-[30px] text-purple-900 font-[600]'>
            {lang === 0 ? 'Language' : '语言能力'}
          </h3>
          <a
            href='https://en.wikipedia.org/wiki/Multilingualism'
            className='text-purple-900 text-[17px] font-[600]'
          >
            {lang === 0 ? 'Multi-language' : '多语言'}
          </a>
        </div>
        <motion.div
          variants={ProgressBarvisblecontainer}
          initial='hidden'
          whileInView='visible'
        >
          <ProgressBar data={language[lang]} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PersonalityandLanguage;
