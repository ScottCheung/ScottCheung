/** @format */

import React, { useRef, forwardRef, useEffect } from 'react';
const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);
const EyeOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94' />
    <path d='M1 1l22 22' />
    <path d='M10.58 10.58A2 2 0 1 0 13.41 13.4' />
    <path d='M9.88 5.09A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.16 4.19' />
  </svg>
);
const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import {
  ImageContainer,
  ImageContainerRef,
} from '../ImagineContainer/v2/ImageContainer';

// Import the new hooks
import { useModalStateAndEvents } from './hook/useModalStateAndEvents';
import { useDragToClose } from './hook/useDragToClose';
import {
  useModalNavigation,
  ImagePreviewModalRef,
} from './hook/useModalNavigation';

// Interfaces remain the same
interface BatchImage {
  id: string;
  file?: File;
  url: string;
  isUploading?: boolean;
  isNew?: boolean;
  title?: string;
}

interface ImagePreviewModalProps {
  images: BatchImage[];
  initialIndex: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
  clickedImageElement?: HTMLElement | null;
  onOpen?: () => void;
}

export const ImagePreviewModal = forwardRef<
  ImagePreviewModalRef,
  ImagePreviewModalProps
>(
  (
    {
      images,
      initialIndex,
      onClose,
      onIndexChange,
      clickedImageElement,
      onOpen,
    },
    ref,
  ) => {
    const swipeableRef = useRef<ImageContainerRef>(null);
    const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

    // Use our custom hooks to manage logic
    const {
      currentIndex,
      isClosing,
      isPreviewVisible,
      handleClose,
      handlePageChange,
      handleKeyDown,
      handleBackdropClick,
      togglePreviewVisibility,
    } = useModalStateAndEvents({ initialIndex, onClose, onIndexChange });

    const {
      motionStyle,
      motionEventHandlers,
      opacityTransform,
      borderRadiusTransform,
    } = useDragToClose({
      onClose: handleClose,
    });

    const { handleThumbnailClick } = useModalNavigation(
      ref,
      swipeableRef,
      onIndexChange,
    );

    const topBarY = useTransform(opacityTransform, (o) => -20 + 20 * o);
    const topBarScale = useTransform(opacityTransform, (o) => 0.5 + 0.5 * o);
    const bottomBarY = useTransform(opacityTransform, (o) => 20 - 20 * o);
    const bottomBarScale = useTransform(opacityTransform, (o) => 0.5 + 0.5 * o);

    // 组件挂载时调用 onOpen 回调
    useEffect(() => {
      if (onOpen) {
        onOpen();
      }
    }, [onOpen]);

    // 优化的小图居中滚动逻辑
    useEffect(() => {
      if (thumbnailsContainerRef.current && images.length > 1) {
        const container = thumbnailsContainerRef.current;
        const thumbnailWidth = 40; // w-10 = 2.5rem = 40px
        const gap = 8; // gap-2 = 0.5rem = 8px
        const totalThumbnailWidth = thumbnailWidth + gap;
        const borderWidth = 4; // border-4 = 4px

        // 计算当前缩略图的位置
        const currentThumbnailLeft = currentIndex * totalThumbnailWidth;
        const containerWidth = container.clientWidth;

        // 计算目标滚动位置，使当前缩略图居中
        const targetScrollLeft =
          currentThumbnailLeft - containerWidth / 2 + thumbnailWidth / 2;

        // 平滑滚动到目标位置
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth',
        });
      }
    }, [currentIndex, images.length]);

    // This data transformation is a presentational concern, so it stays here.
    const pages = images.map((image, index) => ({
      id: image.id || `image-preview-${index}`,
      type: image.title ? image.title : `image-${index + 1}`,
      component: (
        <div className='w-full h-full flex items-center justify-center'>
          <AnimatePresence>
            <motion.img
              key={image.id}
              style={{
                // maxWidth: '100%',
                maxHeight: '100vh',
                objectFit: 'contain',
                borderRadius: borderRadiusTransform,
              }}
              src={image.url}
              alt={`预览图片 ${index + 1}`}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                stiffness: 260,
                damping: 20,
                duration: 0.5,
              }}
              className=' w-auto h-auto object-contain'
              draggable={false}
              layoutId={index === currentIndex ? `${image.title}` : undefined}
              // layoutId={`${image.title}`}
              // layoutId={index === currentIndex ? `gallery` : undefined}
            />
          </AnimatePresence>
        </div>
      ),
    }));

    return (
      <AnimatePresence>
        {!isClosing && (
          <motion.div
            className='fixed inset-0  z-50 flex flex-col h-screen'
            onKeyDown={handleKeyDown}
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          >
            {/* Top Toolbar */}
            <AnimatePresence>
              {
                <motion.div
                  className='flex items-center justify-between p-4 z-50 text-white flex-shrink-0'
                  style={{
                    opacity: opacityTransform,
                    y: topBarY,
                    scale: topBarScale,
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='text-lg font-medium'>
                    {currentIndex + 1} / {images.length}
                  </div>
                  <div className='flex gap-2'>
                    <button
                      type='button'
                      className='p-2 hover:bg-white/10 rounded-full'
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePreviewVisibility();
                      }}
                    >
                      {isPreviewVisible ?
                        <EyeIcon className='w-6 h-6' />
                      : <EyeOff className='w-6 h-6' />}
                    </button>
                    <button
                      type='button'
                      className='p-2 hover:bg-white/10 rounded-full'
                      onClick={handleClose}
                    >
                      <X className='w-6 h-6' />
                    </button>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
            {!isPreviewVisible && (
              <motion.div className='absolute inset-0  z-0 bg-black/50 backdrop-blur-sm'></motion.div>
            )}
            <motion.div
              className='absolute inset-0  z-0'
              style={{
                backgroundColor: useTransform(
                  opacityTransform,
                  (o) => `rgba(0, 0, 0, ${0.7 * o})`,
                ),
                backdropFilter: useTransform(
                  opacityTransform,
                  (o) => `blur(${10 * o}px)`,
                ),
              }}
            ></motion.div>
            {/* Draggable Image Area */}
            <div className='fixed inset-0 z-0 w-screen h-screen flex items-center justify-center pointer-events-none'>
              <motion.div
                className='w-full h-full flex items-center justify-center pointer-events-auto'
                style={motionStyle}
                drag='y'
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                dragMomentum={false}
                {...motionEventHandlers}
              >
                <ImageContainer
                  ref={swipeableRef}
                  pages={pages}
                  initialIndex={initialIndex}
                  onPageChange={handlePageChange}
                  className='w-full h-full'
                  // Disable internal features that we are handling externally
                  showIndicators={false}
                  showPageTabs={false}
                  showNavButtons={false}
                  showFloateNavButtons={opacityTransform.get() > 0.99}
                  showOverlay={false}
                  enableKeyboardNavigation={true}
                />
              </motion.div>
            </div>
            {/* Bottom Thumbnails */}
            {images.length > 1 && (
              <AnimatePresence>
                {isPreviewVisible && (
                  <motion.div
                    className=' absolute bottom-6 left-0 right-0 z-50'
                    style={{
                      opacity: opacityTransform,
                      y: bottomBarY,
                      scale: bottomBarScale,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      ref={thumbnailsContainerRef}
                      className='flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide'
                    >
                      {images.map((image, index) => (
                        <button
                          key={image.id}
                          type='button'
                          className={`relative flex-shrink-0 w-[60px] h-[60px] rounded-sm overflow-hidden border-2 transition-all hover:scale-105 ${
                            index === currentIndex ?
                              'border-primary-500 border-4 shadow-lg'
                            : 'border-transparent hover:border-white/50'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleThumbnailClick(index);
                          }}
                        >
                          <img
                            src={image.url}
                            alt={`Preview ${index + 1}`}
                            className='w-full h-full object-cover'
                            draggable={false}
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

ImagePreviewModal.displayName = 'ImagePreviewModal';
