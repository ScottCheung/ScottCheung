/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
const SvgSwitcher = ({
  isExpanded,
  size,
  isborder = true,
  text,
  textStyle,
}) => {
  const lang = useLanguage();
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className={`${isborder && 'hover:lg:border-white/70'} flex  border-transparent gap-2 lg:gap-4 text-white/50 text-[15px] lg:text-[20px] border-[2px] items-center  justify-center space-x-2 cursor-pointer   rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3`}
    >
      <motion.p transition={{ duration: 0.5 }} className={textStyle}>
        {text ?
          text
        : isExpanded ?
          ['Collapse', '关闭'][lang]
        : ['Expand', '展开'][lang]}
      </motion.p>
      <motion.svg
        // layout
        viewBox='0 0 17 8.85'
        className={size ? size : 'w-6 h-6 lg:w-12 lg:h-12' + ' stroke-[2px]'}
        transition={{ duration: 0.5 }}
      >
        {isExpanded ?
          <motion.polyline
            layoutId='polyline'
            stroke='currentColor'
            strokeLinecap='round'
            fill='none'
            strokeLinejoin='round'
            fillRule='evenodd'
            transition={{ duration: 0.5 }}
            animate={{
              points: '15 7.72 8.5 1.13 2 7.72',
            }}
            initial={{
              points: '15 1.13 8.5 7.72 2 1.13',
            }}
          ></motion.polyline>
        : <motion.polyline
            layoutId='polyline'
            stroke='currentColor'
            strokeLinecap='round'
            fill='none'
            strokeLinejoin='round'
            fillRule='evenodd'
            animate={{
              points: '15 1.13 8.5 7.72 2 1.13',
            }}
            initial={{
              points: '15 7.72 8.5 1.13 2 7.72',
            }}
            transition={{
              duration: 0.5,
            }}
          ></motion.polyline>
        }
      </motion.svg>
    </motion.div>
  );
};

export default SvgSwitcher;
