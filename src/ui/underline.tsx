/** @format */

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Underline({
  color = 'current',
  height = 1,
  margintop = 2,
  alwaysShow = false,
}) {
  const colorClass =
    {
      current: 'bg-current',
      sky: 'bg-sky-800',
      white: 'bg-white',
    }[color] || 'bg-current';
  const heightClass = height === 1.5 ? 'h-1.5' : 'h-1';
  const marginClass =
    {
      2: '-bottom-2',
      3: '-bottom-3',
      5: '-bottom-5',
    }[margintop] || '-bottom-2';

  return (
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: alwaysShow ? 1 : 0 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`absolute ${marginClass} left-0 right-0 ${alwaysShow ? 'w-full' : 'w-0'} ${colorClass} ${heightClass} rounded-full group-hover:w-full`}
    ></motion.span>
  );
}
