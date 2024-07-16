import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Underline({
  color = 'current',
  height = 1,
  margintop = 2,
  alwaysShow = false,
}) {
  return (
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: alwaysShow ? 1 : 0 }}
      exit={{ width: 0, opacity: 0 }}
      className={`absolute -bottom-${margintop} left-0 right-0 ${alwaysShow ? 'w-full' : 'w-0'}  bg-${color} h-${height} rounded-full  group-hover:w-full`}
    ></motion.span>
  );
}
