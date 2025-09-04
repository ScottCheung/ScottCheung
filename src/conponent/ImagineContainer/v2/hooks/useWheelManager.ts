// v2/hooks/useWheelManager.ts
import { useEffect, useRef, useCallback, useState } from 'react';
import { MotionValue, animate } from 'framer-motion';

export interface UseWheelManagerOptions {
  x: MotionValue<number>;
  currentIndex: number;
  pagesLength: number;
  getContainerWidth: () => number;
  getTargetPosition: (index: number) => number;
  goToPage: (index: number) => void;
  threshold: number;
  onWheelStateChange?: (isWheeling: boolean) => void;
  debugMode?: boolean;
}

export interface UseWheelManagerResult {
  isWheeling: boolean;
  setupWheelListener: (container: HTMLElement) => () => void;
}

export function useWheelManager({
  x,
  currentIndex,
  pagesLength,
  getContainerWidth,
  getTargetPosition,
  goToPage,
  threshold,
  onWheelStateChange,
  debugMode = false,
}: UseWheelManagerOptions): UseWheelManagerResult {
  const [isWheeling, setIsWheeling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTimeRef = useRef(0);

  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debugMode) {
        console.log(`[WheelManager] ${message}`, data || '');
      }
    },
    [debugMode]
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      // 检测水平滚动
      const isHorizontalScroll =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) * 0.5;
      if (!isHorizontalScroll) {
        return;
      }

      event.preventDefault();

      // 频率限制
      const now = Date.now();
      if (now - lastWheelTimeRef.current < 16) {
        return;
      }
      lastWheelTimeRef.current = now;

      // 清除之前的定时器
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 设置滚轮状态
      if (!isWheeling) {
        setIsWheeling(true);
        onWheelStateChange?.(true);
      }

      // 延迟判断页面切换
      timeoutRef.current = setTimeout(() => {
        const containerWidth = getContainerWidth();
        const currentX = x.get();
        const currentPagePosition = getTargetPosition(currentIndex);
        const offset = currentX - currentPagePosition;
        const thresholdPixels = containerWidth * threshold;

        if (Math.abs(offset) > thresholdPixels) {
          let targetIndex = currentIndex;

          if (offset < 0) {
            targetIndex = Math.min(currentIndex + 1, pagesLength - 1);
          } else {
            targetIndex = Math.max(currentIndex - 1, 0);
          }

          if (targetIndex !== currentIndex) {
            logDebug(`滚轮页面切换`, { from: currentIndex, to: targetIndex });
            goToPage(targetIndex);
          } else {
            // 归位动画
            animate(x, currentPagePosition, {
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 0.5,
              duration: 0.2,
            });
          }
        }

        setIsWheeling(false);
        onWheelStateChange?.(false);
        timeoutRef.current = null;
      }, 100);
    },
    [
      isWheeling,
      currentIndex,
      pagesLength,
      x,
      getContainerWidth,
      getTargetPosition,
      goToPage,
      threshold,
      onWheelStateChange,
      logDebug,
    ]
  );

  const setupWheelListener = useCallback(
    (container: HTMLElement) => {
      logDebug(`设置滚轮监听器`);
      container.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        logDebug(`清理滚轮监听器`);
        container.removeEventListener('wheel', handleWheel);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    },
    [handleWheel, logDebug]
  );

  return {
    isWheeling,
    setupWheelListener,
  };
}
