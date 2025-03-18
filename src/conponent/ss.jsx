/** @format */

// ScrollableCarousel.jsx - 可复用的轮播组件
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ScrollableCarousel = ({
  children,
  showControls = true,
  showProgressBar = true,
  infiniteScroll = true,
  className,
  itemWidth = 300, // 单个项目的默认宽度
  gap = 20, // 项目间隔
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // 检查滚动状态
  const checkScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    if (infiniteScroll) {
      // 无限滚动模式下，总是可以滚动
      setCanScrollLeft(true);
      setCanScrollRight(true);
    } else {
      // 有限滚动模式
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }

    // 更新进度条
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll <= 0 ? 0 : scrollLeft / maxScroll;
    setScrollProgress(progress);
  }, [infiniteScroll]);

  // 初始化和调整大小时检查
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons]);

  // 处理滚动事件
  const handleScroll = () => {
    checkScrollButtons();
  };

  // 处理进度条拖动
  const handleProgressDrag = (e) => {
    if (!scrollContainerRef.current) return;

    const progressBar = e.currentTarget;
    const progressRect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - progressRect.left) / progressRect.width;
    const newPosition = Math.max(0, Math.min(1, clickPosition));

    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    scrollContainerRef.current.scrollLeft = newPosition * maxScroll;
  };

  // 处理进度条滑块拖动
  const handleThumbDrag = (_, info) => {
    if (!scrollContainerRef.current) return;

    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const newProgress = Math.max(
      0,
      Math.min(1, scrollProgress + info.delta.x / 200),
    );
    setScrollProgress(newProgress);
    scrollContainerRef.current.scrollLeft = newProgress * maxScroll;
  };

  // 滚动到指定项
  const scrollToItem = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const { scrollLeft, clientWidth } = container;

    // 计算滚动距离，大约滚动一个项目宽度
    const scrollDistance = itemWidth + gap;
    const newScrollLeft =
      direction === 'left' ?
        scrollLeft - scrollDistance
      : scrollLeft + scrollDistance;

    // 处理无限滚动
    if (infiniteScroll) {
      const { scrollWidth } = container;

      if (
        direction === 'right' &&
        scrollLeft + clientWidth >= scrollWidth - 10
      ) {
        // 右滑到底时，跳回开始
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && scrollLeft <= 0) {
        // 左滑到头时，跳到结尾
        container.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: 'smooth',
        });
      } else {
        // 正常滚动
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    } else {
      // 有限滚动模式
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }

    // 更新按钮状态
    setTimeout(checkScrollButtons, 500);
  };

  return (
    <div className='w-full'>
      {/* 进度条 */}
      {showProgressBar && (
        <div className='flex justify-center px-[20px] md:px-[10vw] mt-4'>
          <div
            className='relative w-full h-2 bg-gray-200 rounded-full cursor-pointer'
            onClick={handleProgressDrag}
          >
            <motion.div
              className='absolute top-0 left-0 h-full rounded-full bg-sky-500'
              style={{ width: `${scrollProgress * 100}%` }}
            />
            <motion.div
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleThumbDrag}
              className='absolute top-[-4px] h-[16px] w-[16px] bg-sky-600 rounded-full cursor-grab active:cursor-grabbing'
              style={{ left: `calc(${scrollProgress * 100}% - 8px)` }}
            />
          </div>
        </div>
      )}

      {/* 控制按钮 */}
      {showControls && (
        <div className='flex justify-between px-[20px] md:px-[10vw] mt-2'>
          <button
            onClick={() => scrollToItem('left')}
            disabled={!canScrollLeft && !infiniteScroll}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md 
              ${canScrollLeft || infiniteScroll ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-300'} 
              transition-colors duration-300`}
          >
            <svg className='w-6 h-6 fill-white' viewBox='0 0 24 24'>
              <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
            </svg>
          </button>

          <button
            onClick={() => scrollToItem('right')}
            disabled={!canScrollRight && !infiniteScroll}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md 
              ${canScrollRight || infiniteScroll ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-300'} 
              transition-colors duration-300`}
          >
            <svg className='w-6 h-6 fill-white' viewBox='0 0 24 24'>
              <path d='M10.59 7.41L12 6l6 6-6 6-1.41-1.41L15.17 12z' />
            </svg>
          </button>
        </div>
      )}

      {/* 滚动容器 */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={`overflow-x-auto scrollbar-hide ${className}`}
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableCarousel;
