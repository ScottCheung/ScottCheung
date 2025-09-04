import { useCallback, useRef, useEffect } from 'react';
import { MotionValue } from 'framer-motion';

interface UseThumbnailAnimationParams {
  x: MotionValue<number>;
  currentIndex: number;
  pagesLength: number;
  getContainerWidth: () => number;
  debugMode?: boolean;
}

export function useThumbnailAnimation({
  x,
  currentIndex,
  pagesLength,
  getContainerWidth,
  debugMode = false,
}: UseThumbnailAnimationParams) {
  const leftThumbnailsRef = useRef<HTMLDivElement>(null);
  const bottomThumbnailsRef = useRef<HTMLDivElement>(null);

  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debugMode) {
        console.log(`[ThumbnailAnimation] ${message}`, data || '');
      }
    },
    [debugMode]
  );

  // ✨ 简化：只在页面切换时更新缩略图位置
  const updateThumbnailPosition = useCallback(() => {
    logDebug('更新缩略图位置', { currentIndex });

    // 更新左侧缩略图位置
    if (leftThumbnailsRef.current) {
      const leftContainer = leftThumbnailsRef.current;
      const thumbnailHeight = 80;
      const gap = 16;
      const containerHeight = leftContainer.clientHeight;

      const targetScrollTop = currentIndex * (thumbnailHeight + gap);
      const centerOffset = (containerHeight - thumbnailHeight) / 2;
      const centeredScrollTop = Math.max(0, targetScrollTop - centerOffset);

      leftContainer.scrollTo({
        top: centeredScrollTop,
        behavior: 'smooth',
      });
    }

    // 更新底部缩略图位置
    if (bottomThumbnailsRef.current) {
      const bottomContainer = bottomThumbnailsRef.current;
      const thumbnailWidth = 80;
      const gap = 8;
      const containerWidth = bottomContainer.clientWidth;

      const targetScrollLeft = currentIndex * (thumbnailWidth + gap);
      const centerOffset = (containerWidth - thumbnailWidth) / 2;
      const centeredScrollLeft = Math.max(0, targetScrollLeft - centerOffset);

      bottomContainer.scrollTo({
        left: centeredScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, logDebug]);

  // ✨ 简化：只在页面索引变化时更新，移除实时跟随
  useEffect(() => {
    updateThumbnailPosition();
  }, [currentIndex, updateThumbnailPosition]);

  return {
    leftThumbnailsRef,
    bottomThumbnailsRef,
  };
}
