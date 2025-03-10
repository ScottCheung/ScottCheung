/** @format */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage } from '../help/helpFunction';

export function more({ color, id }) {
  const lang = useLanguage();
  return (
    <motion.div
      layoutId={id}
      key={id}
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`inline-flex text-${color}-700 group-hover:text-${color}-500 hover:text-${color}-500 text-[15px] text-${color} hover:text-${color}`}
    >
      [ {lang == 1 ? '更多' : 'more'} ]
    </motion.div>
  );
}

export default more;
