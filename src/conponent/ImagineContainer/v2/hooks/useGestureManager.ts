// v2/hooks/useGestureManager.ts
'use client';

import { useState, useCallback, useEffect } from 'react';
import { MotionValue, PanInfo, animate } from 'framer-motion';

/**
 * Custom hook to manage drag gestures and page snapping logic.
 */
export const useGestureManager = ({
  x,
  currentIndex,
  pagesLength,
  goToPage,
  getTargetPosition,
  getContainerWidth,
  threshold,
  velocityThreshold,
  debugMode = false,
}: {
  x: MotionValue<number>;
  currentIndex: number;
  pagesLength: number;
  goToPage: (index: number) => void;
  getTargetPosition: (index: number) => number;
  getContainerWidth: () => number;
  threshold: number;
  velocityThreshold: number;
  debugMode?: boolean;
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debugMode) {
        console.log(`[GestureManager] ${message}`, data || '');
      }
    },
    [debugMode]
  );

  useEffect(() => {
    setIsDragging(false);
  }, []);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    logDebug(`开始拖拽`, { currentIndex, currentX: x.get() });
  }, [currentIndex, x, logDebug]);

  const handleDragEnd = useCallback(
    (event: any, info: PanInfo) => {
      setIsDragging(false);
      const containerWidth = getContainerWidth();
      if (!containerWidth) {
        logDebug(`警告：容器宽度为0`);
        return;
      }

      const offset = info.offset.x;
      const velocity = info.velocity.x;
      let newIndex = currentIndex;

      logDebug(`拖拽结束`, {
        offset,
        velocity,
        threshold: containerWidth * threshold,
        velocityThreshold,
        currentIndex,
        pagesLength,
        currentX: x.get(),
      });

      if (
        (offset < -containerWidth * threshold ||
          velocity < -velocityThreshold) &&
        currentIndex < pagesLength - 1
      ) {
        newIndex = currentIndex + 1;
        logDebug(`向右滑动到下一页`, {
          reason:
            offset < -containerWidth * threshold ? '距离阈值' : '速度阈值',
          offset: offset,
          threshold: -containerWidth * threshold,
          velocity: velocity,
          velocityThreshold: -velocityThreshold,
        });
      } else if (
        (offset > containerWidth * threshold || velocity > velocityThreshold) &&
        currentIndex > 0
      ) {
        newIndex = currentIndex - 1;
        logDebug(`向左滑动到上一页`, {
          reason: offset > containerWidth * threshold ? '距离阈值' : '速度阈值',
          offset: offset,
          threshold: containerWidth * threshold,
          velocity: velocity,
          velocityThreshold: velocityThreshold,
        });
      }

      if (newIndex !== currentIndex) {
        logDebug(`执行页面切换`, { from: currentIndex, to: newIndex });
        goToPage(newIndex);
      } else {
        // ✨ 优化：使用更快的回弹动画
        logDebug(`回弹到当前页面`, {
          currentIndex,
          targetPosition: getTargetPosition(currentIndex),
        });
        animate(x, getTargetPosition(currentIndex), {
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.5,
          duration: 0.2, // 减少回弹动画时长
        });
      }
    },
    [
      currentIndex,
      pagesLength,
      x,
      getContainerWidth,
      getTargetPosition,
      threshold,
      velocityThreshold,
      goToPage,
      logDebug,
    ]
  );

  return { isDragging, handleDragStart, handleDragEnd };
};
