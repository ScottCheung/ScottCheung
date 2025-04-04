/** @format */

import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ value, color1, color2, index = 0 }) => {
  return (
    <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20 darrk:bg-gray-700'>
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, width: '0%' },
          visible: {
            opacity: 1,
            width: value,
          },
        }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`${color1} ${color2} bg-gradient-to-r h-[15px] rounded-full`}
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;
