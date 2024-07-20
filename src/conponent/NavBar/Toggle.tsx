import React from 'react';
import { motion } from 'framer-motion';

interface SvgSwitcherProps {
  isExpanded: boolean;
  style?: string;
}

const SvgSwitcher: React.FC<SvgSwitcherProps> = ({ isExpanded, style }) => {
  const defaultStyle = 'w-12 h-12  stroke-[2px]';
  const svgStyle = style || defaultStyle;

  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className='border-transparent rounded-full cursor-pointer flex-col flex space-x-2 border-[2px] py-1.5 px-3 text-[15px] gap-2 items-center justify-center md:py-2 md:px-4 lg:py-3 lg:px-6 lg:text-[20px] lg:gap-4 hover:lg:border-white/70'
    >
      <motion.svg
        viewBox='0 0 17 8.85'
        className={svgStyle}
        transition={{ duration: 0.5 }}
      >
        <motion.polyline
          layoutId='polyline'
          stroke='currentColor'
          strokeLinecap='round'
          fill='none'
          strokeLinejoin='round'
          fillRule='evenodd'
          animate={{
            points: isExpanded
              ? '15 7.72 8.5 1.13 2 7.72'
              : '15 1.13 8.5 7.72 2 1.13',
          }}
          initial={{
            points: isExpanded
              ? '15 1.13 8.5 7.72 2 1.13'
              : '15 7.72 8.5 1.13 2 7.72',
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default SvgSwitcher;
