/** @format */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import N from '../Num';
import Toggle from '../Toggle';
import ProgressBar from '../UI/ProgressBar';
import { GlobalVariants } from '../constants/animationConstants';

const PersonalityItem = ({
  personality,
  current,
  togglePersonality,
  index,
}) => {
  const {
    name,
    right,
    left,
    label,
    color1,
    color2,
    column,
    defi,
    des,
    despic,
  } = personality;

  return (
    <motion.div
      layout='position'
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => togglePersonality(name)}
      className='flex flex-col px-[20px] lg:px-[40px] py-4 hover:cursor-pointer hover:bg-black/20'
    >
      <motion.div
        className={`${color1} ${color2} flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
      >
        <motion.div className='flex flex-col items-start'>
          <div className='text-[23px] font-[600]'>{right}</div>
          <motion.div className='text-white/5 text-[15px] flex items-baseline'>
            <div className='flex mb-2'>{name}</div>
            <i className='flex ml-2 fi text-[12px] fi-rr-interrogation'></i>
          </motion.div>
        </motion.div>

        <motion.div className='flex flex-col text-[20px] items-end font-[600]'>
          <div className='flex mb-[10px]'>
            <N className='' n={label} d={3} /> %
          </div>
          <Toggle
            text={' '}
            onlyicon={true}
            textStyle='text-[1px] font-[600]'
            isExpanded={current === name}
            size={'w-6 h-6 lg:w-8 lg:h-8 stroke-[2px]'}
            isborder={false}
          />
        </motion.div>
      </motion.div>

      <ProgressBar
        value={column}
        color1={color1}
        color2={color2}
        index={index}
      />

      <AnimatePresence>
        {current === name && (
          <motion.div
            key={`${name}`}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={GlobalVariants}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className='bg-white/5 text-white/70 over-hidden p-[20px] my-[20px] rounded-[14px]'
          >
            <motion.div
              className={`${color1} ${color2} flex-col flex pb-[10px] gap-y-[20px]`}
            >
              <motion.div
                style={{ animationDelay: '0.15s' }}
                className='text-[20px] font-black flex stageX'
              >
                {name}
              </motion.div>
              <motion.div
                style={{ animationDelay: '0.3s' }}
                className='flex justify-start text-[15px] gap-[10px] items-baseline stageX'
              >
                <motion.div className='flex font-[600]'>
                  {right}
                  <N className='mx-[10px]' n={label} d={2} /> %
                </motion.div>
                <p className='flex font-[600]'>+</p>
                <motion.div layoutId='left' className='flex font-[600]'>
                  {left} <N className='mx-[10px]' n={100 - label} d={2} /> %
                </motion.div>
              </motion.div>
              <motion.div
                style={{ animationDelay: '0.45s' }}
                className='flex text-[15px] font-[600] stageX'
              >
                {defi}
              </motion.div>
              <motion.div
                style={{ animationDelay: '0.6s' }}
                className='flex text-[15px] font-[600] stageX'
              >
                {des}
              </motion.div>
              <img
                loading='lazy'
                style={{ animationDelay: '0.75s' }}
                src={despic}
                alt={name}
                className='p-[20px] stageY w-full h-full flex'
              />
              <Toggle
                isExpanded={current === name}
                size={'w-6 h-6 lg:w-8 lg:h-8 stroke-[2px]'}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PersonalityItem;
