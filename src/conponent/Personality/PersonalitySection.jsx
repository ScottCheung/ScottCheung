/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import PersonalityItem from './PersonalityItem';
import { ProgressBarvisblecontainer } from '../constants/animationConstants';

const PersonalitySection = ({
  lang,
  current,
  togglePersonality,
  personality,
}) => {
  return (
    <motion.div
      layout
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      initial={{ borderRadius: 0, h: 0 }}
      animate={{ borderRadius: 28, h: '100%' }}
      viewport={{ once: true }}
      style={{
        background:
          'linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 100, 0, 1))',
      }}
      className='flex w-full rounded-[28px] h-auto relative overflow-hidden'
    >
      <motion.div
        layout='position'
        className='flex w-full h-full flex-col mb-[230px] z-20'
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='flex w-full h-auto px-[20px] lg:px-[40px] pt-[40px] flex-wrap items-center justify-between overflow-hidden mb-[20px]'
        >
          <h3
            style={{
              lineHeight: 1.19048,
              fontWeight: 600,
              letterSpacing: '0.011em',
            }}
            className='flex items-center py-4 text-[30px] text-white'
          >
            {lang == 0 ? 'Personality' : '人格类型'}
          </h3>
          <a
            href='https://www.16personalities.com/enfp-personality'
            className='flex items-center jusitify-between text-[17px] font-[600]'
          >
            <p className='text-white tile-headline'>
              {lang == 0 ? 'ENFP' : 'ENFP'}
            </p>
            <i className='flex items-center justify-end my-0 ml-2 text-white fi fi-rr-interrogation'></i>
          </a>
        </motion.div>

        <motion.div
          variants={ProgressBarvisblecontainer}
          initial='hidden'
          whileInView='visible'
          layout='position'
          className='z-30 backdrop-blur-[30px]'
        >
          {personality.feature[lang].map((per, index) => (
            <PersonalityItem
              key={index + per.name}
              personality={per}
              current={current}
              togglePersonality={togglePersonality}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.img
        loading='lazy'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        layout='position'
        className='absolute bottom-0 w-full left-0 z-0 right-0 h-[250px] overflow-hidden lg:overflow-visible'
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        src='https://www.16personalities.com/static/images/types/headers/campaigner-mobile.svg'
        alt=''
      />
    </motion.div>
  );
};

export default PersonalitySection;
