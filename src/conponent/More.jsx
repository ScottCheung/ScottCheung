import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { hideRow,useLanguage } from '../help/helpFunction';

export function more({color}) {
const lang = useLanguage();
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`text-${color}-500 hover:text-${color}-700`}
    >
      [ {lang==1&&"更多"}{lang==0&&"more"} ]
    </motion.div>
  );
}

export default more
