/** @format */

// 缩略图画廊组件
'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { useThumbnailAnimation } from '../hooks/useThumbnailAnimation';
import { ImageContainer } from '../ImageContainer';
// import { useGlobalStore } from '@rewowo/lib';
import { ImageContainerPage } from '../types';

interface ThumbnailGalleryProps {
  pages: ImageContainerPage[];
  currentIndex: number;
  onPageSelect: (index: number) => void;
  position: 'left' | 'bottom';
  className?: string;
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
  pages,
  currentIndex,
  onPageSelect,
  position,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  // const { showSheet, setSheetShowBg } = useGlobalStore();

  // const openFullGallery = () => {
  //   setSheetShowBg(true);
  //   showSheet(
  //     <motion.div className='overflow-y-auto w-screen h-full'>
  //       {/* <Page /> */}
  //       {/* <div className='w-full h-[5000px] bg-red-500'>123</div> */}
  //       {/* <div className='w-full h-[5000px] bg-blue-500'>2</div> */}
  //     </motion.div>,
  //   );
  // };

  useThumbnailAnimation({
    x,
    currentIndex,
    pagesLength: pages.length,
    getContainerWidth: () => containerRef.current?.offsetWidth || 0,
    debugMode: true,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    if (position === 'bottom') {
      // 横向滚动居中逻辑
      const thumbnailWidth = 60; // 移动端缩略图宽度
      const gapWidth = 8; // gap-2 = 8px
      const separatorWidth = 4; // w-1 = 4px
      const paddingX = 8; // px-2 = 8px
      const totalItemWidth = thumbnailWidth + gapWidth + separatorWidth;

      // 计算目标缩略图的起始位置（包含左边距）
      const targetScrollLeft = paddingX + currentIndex * totalItemWidth;

      // 获取容器宽度
      const containerWidth = containerRef.current.offsetWidth;

      // 计算居中位置：目标位置 - 容器宽度的一半 + 缩略图宽度的一半
      const centerScrollLeft =
        targetScrollLeft - containerWidth / 2 + thumbnailWidth / 2;

      // 确保不会滚动到负值
      let finalScrollLeft = Math.max(0, centerScrollLeft);

      // 计算最大滚动距离（总内容宽度 - 容器宽度）
      const totalContentWidth = paddingX + pages.length * totalItemWidth;
      const maxScrollLeft = Math.max(0, totalContentWidth - containerWidth);

      // 确保不会滚动超过最大距离
      finalScrollLeft = Math.min(finalScrollLeft, maxScrollLeft);

      containerRef.current.scrollTo({
        left: finalScrollLeft,
        behavior: 'smooth',
      });
    } else if (position === 'left') {
      // 纵向滚动居中逻辑
      const thumbnailHeight = 80; // md:w-[80px] md:h-[80px]
      const gapHeight = 16; // gap-4 = 16px
      const totalItemHeight = thumbnailHeight + gapHeight;

      // 计算目标缩略图的起始位置
      const targetScrollTop = currentIndex * totalItemHeight;

      // 获取容器高度
      const containerHeight = containerRef.current.offsetHeight;

      // 计算居中位置：目标位置 - 容器高度的一半 + 缩略图高度的一半
      const centerScrollTop =
        targetScrollTop - containerHeight / 2 + thumbnailHeight / 2;

      // 确保不会滚动到负值
      let finalScrollTop = Math.max(0, centerScrollTop);

      // 计算最大滚动距离（总内容高度 - 容器高度）
      const totalContentHeight = pages.length * totalItemHeight;
      const maxScrollTop = Math.max(0, totalContentHeight - containerHeight);

      // 确保不会滚动超过最大距离
      finalScrollTop = Math.min(finalScrollTop, maxScrollTop);

      containerRef.current.scrollTo({
        top: finalScrollTop,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, position, pages.length]);

  if (pages.length <= 1) return null;

  const renderThumbnail = (page: ImageContainerPage, index: number) => (
    <button
      key={page.id}
      type='button'
      className={`relative flex-shrink-0 w-[50px] h-[50px] md:w-[80px] md:h-[80px] aspect-square rounded-md overflow-hidden transition-all hover:scale-105 ${
        index === currentIndex ?
          'border-primary-500 border-4 bg-white'
        : 'lg:hover:border-primary-500/50 bg-gray-200 opacity-80'
      }`}
      onClick={() => onPageSelect(index)}
    >
      <div className='object-cover w-full h-full'>{page.component}</div>
    </button>
  );

  if (position === 'left') {
    return (
      <motion.div
        ref={containerRef}
        style={{ scrollbarWidth: 'none' }}
        className={`hidden overflow-y-auto z-10 flex-col justify-start h-full md:flex ${className}`}
      >
        <div className='flex flex-col gap-4 justify-start h-full'>
          {pages.map((page, index) => renderThumbnail(page, index))}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className={`relative z-10 py-2 w-screen bg-white md:hidden ${className}`}
    >
      <div
        ref={containerRef}
        style={{ scrollbarWidth: 'none' }}
        className='flex overflow-x-auto scrollbar-hide gap-2 px-2 z-0 pr-[60px]'
      >
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            {renderThumbnail(page, index)}
            <div className='w-1 h-full bg-gray-200' />
          </React.Fragment>
        ))}
      </div>
      {pages.length > 5 && (
        <div
          style={{
            maskImage: 'linear-gradient(to left, white, white 70%,transparent)',
          }}
          className='w-[80px] h-full  absolute right-0 top-0 bottom-0 z-50 bg-white flex items-center justify-end pr-2 cursor-pointer'
          // onClick={openFullGallery}
          role='button'
          aria-label='Open gallery overlay'
        >
          <div className=' w-[50px] h-[50px] font-bold  text-center items-center justify-center flex text-sm text-primary-700'>
            <p className='text-xs'>+ {pages.length}</p>
            <svg
              className='w-4 h-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='9 18 15 12 9 6'></polyline>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
