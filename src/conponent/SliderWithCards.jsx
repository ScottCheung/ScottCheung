/** @format */

import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 为了性能优化，使用memo包装SliderWithCards组件
const SliderWithCards = memo(({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 使用防抖函数优化resize事件处理
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    let timeoutId = null;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // 使用useCallback优化回调函数，避免不必要的重渲染
  const handleScroll = React.useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll <= 0 ? 0 : scrollLeft / maxScroll;
      setScrollProgress(progress);
    }
  }, []);

  // 使用useEffect添加和移除scroll事件监听器
  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  // 使用useCallback优化进度条拖动处理
  const handleProgressDrag = React.useCallback((e) => {
    if (scrollContainerRef.current) {
      const progressBar = e.currentTarget;
      const progressRect = progressBar.getBoundingClientRect();
      const clickPosition =
        (e.clientX - progressRect.left) / progressRect.width;
      const newPosition = Math.max(0, Math.min(1, clickPosition));

      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollContainerRef.current.scrollLeft = newPosition * maxScroll;
    }
  }, []);

  // 使用useCallback优化滑块拖动处理
  const handleThumbDrag = React.useCallback(
    (_, info) => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const newProgress = Math.max(
          0,
          Math.min(1, scrollProgress + info.delta.x / 200),
        );
        setScrollProgress(newProgress);
        scrollContainerRef.current.scrollLeft = newProgress * maxScroll;
      }
    },
    [scrollProgress],
  );

  return (
    <div
      className={
        'flex overflow-x-auto flex-col  gap-[20px] py-[20px] scrollbar-hide w-full '
      }
    >
      <motion.div
        layout
        ref={scrollContainerRef}
        onScroll={handleScroll}
        variants={
          windowWidth > 1024 && animationVariants ?
            animationVariants
          : undefined
        }
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-30%' }}
        className={
          'flex overflow-x-auto gap-[20px] py-[20px] scrollbar-hide w-full px-[20px]'
        }
      >
        {children}
      </motion.div>

      <div className='flex justify-center  group py-[10px] overflow-hidden'>
        <div
          className='relative w-[60vw] h-[20px] bg-gray-300/70 rounded-full cursor-pointer '
          onClick={handleProgressDrag}
        >
          {/* Progress bar */}
          <motion.div
            className='absolute top-0 left-0 h-[20px] rounded-full  bg-gradient-to-r from-sky-200   to-sky-300'
            style={{ width: `${scrollProgress * 100}%` }}
          />

          {/* Thumb */}
          <motion.div
            drag='x'
            dragConstraints={{ left: 5, right: 5 }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleThumbDrag}
            whileHover={{ scale: 1.2 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 1.5 }}
            className='absolute right-[10px] h-[20px] w-[40px] bg-white  rounded-full cursor-grab'
            style={{ left: `calc(${scrollProgress * 100}% - 20px)` }}
          />
        </div>
      </div>
    </div>
  );
});

// 为了调试方便，添加displayName
SliderWithCards.displayName = 'SliderWithCards';

export default SliderWithCards;
