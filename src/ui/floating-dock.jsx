/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 *
 * @format
 */

import { cn } from '../lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import { useRef, useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes';

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  themeColor,
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        themeColor={themeColor}
      />
    </>
  );
};

const FloatingDockDesktop = ({ items, className, themeColor }) => {
  let mouseX = useMotionValue(Infinity);
  const theme = themeColor ? themeColor : 'white';

  return (
    <motion.div
      // layout
      // transition={{ duration: 1 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        `mx-auto group pb-[20px] hidden md:flex transition-all duration-1000 h-[100px] gap-[50px] hover:gap-[45px] items-end  ${theme !== 'white' ? `hover:bg-sky-200/50` : `hover:bg-${theme}/30 `} rounded-full  dark:bg-neutral-900 px-[20px]`,
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          theme={theme}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, blank, theme }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [60, 120, 60]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [60, 120, 60]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [1, 2, 1]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [30, 70, 30],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      target={blank && '_blank'}
      rel={blank && 'noopener noreferrer'}
      href={href}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative flex items-center justify-center rounded-[28px] group-hover:border ${theme !== 'white' ? `group-hover:bg-white border-${theme}` : `group-hover:bg-${theme}/30 border-white/10`}  backdrop-blur-[20px] aspect-square dark:bg-neutral-800`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 100, x: '-50%', scale: 0.8 }}
              animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
              exit={{ opacity: 0, y: 100, x: '-50%', scale: 0.8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute  flex text-${theme}-100 z-50   first-line:space-pre -translate-x-1/2 border ${theme !== 'white' ? `bg-white/30 border-${theme}-900/30 text-${theme}-900` : `bg-${theme}-900/30 border-white/30 text-white`}  rounded-full left-1/2 backdrop-blur-[20px] -top-[60px] w-fit z-50justify-center  bg-${theme}/20 bg-${theme}-900 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800`}
            >
              <p className='px-6 py-4    duration-100  text-center w-full text-nowrap  text-[10px] lg:text-[15px] '>
                {title}
              </p>
              {/* 三角形 */}
              <div
                className={`absolute left-1/2 -bottom-[9px] -translate-x-1/2 w-0 h-0 
      border-l-[8px] border-r-[8px] border-t-[8px]
      border-l-transparent border-r-transparent ${theme !== 'white' ? `border-${theme}-900` : `border-white/30`} backdrop-blur-[20px] z-30 `}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.i
          layout
          style={{ fontSizeAdjust: widthIcon }}
          className={`fi ${icon} text-[20px] group-hover:text-${theme}-100 group-hover:text-${theme}  text-${theme} text-${theme}-50`}
        ></motion.i>
      </motion.div>
    </motion.a>
  );
}
