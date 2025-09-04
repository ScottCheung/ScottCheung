// v2/ImageContainer.tsx
'use client';

import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageContainerProps } from './types';
import { useImageContainer } from './hooks/useImageContainer';
import type { ImageContainerRef } from './hooks/useImageContainer';
import { FloateNavButtons } from './components/floateNavButtons/floateNavButtons';
import { ThumbnailGallery } from './components/ThumbnailGallery';

export type { ImageContainerRef };

export const ImageContainer = forwardRef<
  ImageContainerRef,
  ImageContainerProps
>((props, ref) => {
  const {
    pages,
    galleryMode = false,
    showIndicators = true,
    showSwipeHint = false,
    className = '',
    showOverlay = false,
    onPageChange,
    handleShowOverlay,
    onMainImageClick,
    showFloateNavButtons = false,
    showNavButtons = true,
    renderNavButtons,
    navButtonsClassName = '',
  } = props;

  const {
    // 状态
    currentIndex,
    isReLayouting,
    containerRef,
    x,
    bounceBuffer,
    idBase,

    // 动画相关
    animatedHeight,
    pageRefs,
    pageHeights,
    isMoving,
    isDragging,
    isWheeling,

    // 功能函数
    goToPage,
    handleKeyDown,
    handleDragStart,
    handleDragEnd,
    getTargetPosition,

    // 导航控制
    navControls,

    // 遮罩层
    overlay,

    // 懒加载
    isPageVisible,
  } = useImageContainer(props, ref);

  return (
    <motion.div className='flex flex-col md:flex-row md:gap-4'>
      {galleryMode && (
        <motion.div
          className='hidden md:block overflow-y-auto'
          style={{ height: animatedHeight }}
        >
          <ThumbnailGallery
            pages={pages}
            currentIndex={currentIndex}
            onPageSelect={goToPage}
            position='left'
          />
        </motion.div>
      )}

      <motion.div
        className={`relative flex-1 flex items-center md:rounded-md overflow-hidden ${className}`}
        ref={containerRef}
        role='region'
        aria-roledescription='carousel'
        aria-label={props.ariaLabel || 'Swipeable container'}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={() =>
          containerRef.current?.setAttribute('data-focus-within', 'true')
        }
        onBlur={(e) => {
          if (!containerRef.current) return;
          const next = e.relatedTarget as Node | null;
          if (!next || !containerRef.current.contains(next)) {
            containerRef.current.removeAttribute('data-focus-within');
          }
        }}
      >
        {/* 重新布局遮罩层 */}
        <AnimatePresence>
          {isReLayouting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='absolute inset-0 hidden md:flex z-50 bg-gray-200  items-center justify-center'
              style={{ pointerEvents: 'none' }}
            >
              <div className='flex items-center space-x-2 text-white bg-black/50 px-4 py-2 rounded-lg'>
                <div className='w-4 h-4 border-2 border-white border-t-blue-300 rounded-full animate-spin'></div>
                <span className='text-sm font-medium'>Re-layouting...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showFloateNavButtons &&
          (renderNavButtons ? (
            <>{renderNavButtons(navControls)}</>
          ) : (
            <FloateNavButtons
              className={navButtonsClassName}
              canGoPrev={navControls.canGoPrev}
              canGoNext={navControls.canGoNext}
              goPrev={navControls.goPrev}
              goNext={navControls.goNext}
              onLeftHoverChange={overlay.onLeftHoverChange}
              onRightHoverChange={overlay.onRightHoverChange}
            />
          ))}

        <div className={`relative ${galleryMode ? 'bg-gray-100' : ''}`}>
          {galleryMode && (
            <div className='absolute right-4 top-4  md:top-8 md:right-8 z-30 flex justify-between items-center'>
              {pages.length > 1 && (
                <div className='flex flex-row gap-2 text-[10px] md:text-sm text-white bg-black/30 rounded-full px-2 py-1'>
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
                    {pages[currentIndex].title}
                  </motion.div>
                )}
              </div>
            )}

            <motion.div
              className='flex relative'
              style={{
                height: animatedHeight,
                x,
              }}
              // layout
              drag='x'
              dragDirectionLock
              dragConstraints={{
                left: getTargetPosition(pages.length - 1) - bounceBuffer,
                right: bounceBuffer,
              }}
              dragElastic={0.05}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {pages.map((page, index) => {
                const tabId = `swipe-tab-${idBase}-${index}`;
                const panelId = `swipe-panel-${idBase}-${index}`;
                return (
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={page.id}
                      layout
                      className='w-full  shrink-0 flex  items-center z-0 justify-center'
                    >
                      <motion.div
                        className='mx-auto'
                        layoutId={`${page.title}`}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          stiffness: 260,
                          damping: 20,
                          duration: 0.5,
                        }}
                      >
                        <div
                          ref={(el) => (pageRefs.current[index] = el)}
                          role='tabpanel'
                          id={panelId}
                          aria-labelledby={tabId}
                          aria-hidden={currentIndex !== index}
                          tabIndex={currentIndex === index ? 0 : -1}
                          onClick={(event) => {
                            if (onMainImageClick && currentIndex === index) {
                              onMainImageClick(index, event);
                            }
                            if (handleShowOverlay && currentIndex === index) {
                              handleShowOverlay();
                            }
                          }}
                          className={galleryMode ? 'cursor-zoom-in' : ''}
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
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Thumbnails */}
      {galleryMode && pages.length > 1 && (
        <ThumbnailGallery
          pages={pages}
          currentIndex={currentIndex}
          onPageSelect={goToPage}
          position='bottom'
        />
      )}
    </motion.div>
  );
});

ImageContainer.displayName = 'ImageContainer';
