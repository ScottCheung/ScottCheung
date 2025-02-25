/** @format */

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Num({ n, d, o, className, from }) {
  // Ensure that n is treated as a string
  const stringValue = n.toString();

  // Extract the numeric part from the string
  const numberValue = parseFloat(stringValue.replace(/[^\d.]/g, '')) || 0;

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({
    triggerOnce: o ? o : false,
  });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, numberValue, {
        duration: d && d > 0 ? d : 2,
        ease: [0.22, 1, 0.36, 1], // easeOutQuad，可以根据效果调整
        stiffness: 400, // 控制动画刚度
        damping: 30, // 控制衰减速度
      });
      return animation.stop;
    }
  }, [inView, numberValue, d]);

  return (
    <motion.div ref={ref} className={className}>
      {rounded}
    </motion.div>
  );
}
