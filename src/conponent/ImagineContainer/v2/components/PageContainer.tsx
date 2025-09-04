// 页面容器组件
'use client';

import React, { useRef } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { ImageContainerPage } from '../types';

interface PageContainerProps {
  pages: ImageContainerPage[];
  currentIndex: number;
  x: MotionValue<number>;
  animatedHeight: MotionValue<number | string>;
  bounceBuffer: number;
  getTargetPosition: (index: number) => number;
  onDragStart: () => void;
  onDragEnd: (event: any, info: any) => void;
  isPageVisible: (index: number) => boolean;
  pageRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  pageHeights: React.MutableRefObject<number[]>;
  idBase: string;
  galleryMode?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pages,
  currentIndex,
  x,
  animatedHeight,
  bounceBuffer,
  getTargetPosition,
  onDragStart,
  onDragEnd,
  isPageVisible,
  pageRefs,
  pageHeights,
  idBase,
  galleryMode = false,
}) => {
  return (
    <div className={`relative ${galleryMode ? 'bg-gray-100' : ''}`}>
      {galleryMode && (
        <div className='absolute right-4 top-4 z-30 flex justify-between items-center'>
          {pages.length > 1 && (
            <div className='flex flex-row gap-2 text-[10px] text-white bg-black/30 rounded-full px-2 py-1'>
              {currentIndex + 1} / {pages.length}
            </div>
          )}
        </div>
      )}

      <motion.div
        style={{ height: animatedHeight }}
        className='overflow-hidden relative touch-pan-y'
      >
        {galleryMode && (
          <div className='absolute right-0 bottom-0 z-10 flex justify-between items-center'>
            {pages.length > 1 && (
              <motion.div
                layout={false}
                className='flex flex-row gap-2 transition-transform duration-300 text-[10px] text-white bg-black/30 rounded-tl-sm px-2 py-1'
              >
                {pages[currentIndex].type}
              </motion.div>
            )}
          </div>
        )}

        <motion.div
          className='flex'
          style={{
            height: animatedHeight,
            x,
          }}
          drag='x'
          dragDirectionLock
          dragConstraints={{
            left: getTargetPosition(pages.length - 1) - bounceBuffer,
            right: bounceBuffer,
          }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {pages.map((page, index) => {
            const tabId = `swipe-tab-${idBase}-${index}`;
            const panelId = `swipe-panel-${idBase}-${index}`;

            return (
              <div
                key={page.id}
                className='w-full shrink-0 flex items-center z-0 justify-center'
              >
                <div
                  ref={(el) => (pageRefs.current[index] = el)}
                  role='tabpanel'
                  id={panelId}
                  aria-labelledby={tabId}
                  aria-hidden={currentIndex !== index}
                  tabIndex={currentIndex === index ? 0 : -1}
                >
                  {isPageVisible(index) ? (
                    page.component
                  ) : (
                    <div
                      style={{
                        height: pageHeights.current[index] || 'auto',
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
