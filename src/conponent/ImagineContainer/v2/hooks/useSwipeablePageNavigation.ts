import React, { useCallback, useState, useRef } from 'react';
import { animate } from 'framer-motion';

interface UseSwipeablePageNavigationParams {
  currentIndex: number;
  pagesLength: number;
  x: any;
  getTargetPosition: (index: number) => number;
  onPageChange?: (index: number) => void;
  springConfig?: { stiffness?: number; damping?: number; mass?: number };
  enableKeyboardNavigation?: boolean;
  setCurrentIndex: (index: number) => void;
  debugMode?: boolean;
}

export function useSwipeablePageNavigation({
  currentIndex,
  pagesLength,
  x,
  getTargetPosition,
  onPageChange,
  springConfig = { stiffness: 300, damping: 50, mass: 0.8 },
  enableKeyboardNavigation = true,
  setCurrentIndex,
  debugMode = false,
}: UseSwipeablePageNavigationParams) {
  const [isMoving, setIsMoving] = useState(false);
  const animationRef = useRef<any>(null);

  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debugMode) {
        console.log(`[SwipeableNavigation] ${message}`, data || '');
      }
    },
    [debugMode]
  );

  const goToPage = useCallback(
    (index: number) => {
      // 如果目标页面就是当前页面，直接返回
      if (index === currentIndex) {
        logDebug(`跳过页面切换：目标页面 ${index} 就是当前页面`);
        return;
      }

      // 停止之前的动画
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current = null;
      }

      logDebug(`开始页面切换`, {
        from: currentIndex,
        to: index,
        totalPages: pagesLength,
      });

      setCurrentIndex(index);
      onPageChange?.(index);
      const targetPosition = getTargetPosition(index);
      setIsMoving(true);

      // ✨ 优化：使用更稳定、更简单的动画配置
      const stableSpringConfig = {
        type: 'spring' as const,
        stiffness: 300, // 适中的刚度
        damping: 35, // 适中的阻尼
        mass: 0.8, // 适中的质量
        duration: 0.4, // 适中的动画时长
      };

      logDebug(`开始动画到位置`, {
        targetPosition,
        springConfig: stableSpringConfig,
      });

      // 创建新的动画
      animationRef.current = animate(x, targetPosition, {
        ...stableSpringConfig,
        onComplete: () => {
          animationRef.current = null;
          setIsMoving(false);
          logDebug(`页面切换动画完成`, {
            finalIndex: index,
            finalPosition: x.get(),
          });
        },
        onStop: () => {
          animationRef.current = null;
          setIsMoving(false);
          logDebug(`页面切换动画被停止`);
        },
      });
    },
    [
      currentIndex,
      x,
      getTargetPosition,
      onPageChange,
      springConfig,
      setCurrentIndex,
      logDebug,
    ]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!enableKeyboardNavigation) return;
      if (e.defaultPrevented) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      const isInteractive = !!(
        target &&
        (target.isContentEditable ||
          target.closest('[contenteditable="true"]') ||
          tag === 'INPUT' ||
          tag === 'TEXTAREA' ||
          tag === 'SELECT' ||
          target.getAttribute('role') === 'textbox')
      );
      if (isInteractive) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          logDebug(`键盘导航：向左箭头`, {
            from: currentIndex,
            to: currentIndex - 1,
          });
          goToPage(currentIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < pagesLength - 1) {
          logDebug(`键盘导航：向右箭头`, {
            from: currentIndex,
            to: currentIndex + 1,
          });
          goToPage(currentIndex + 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        logDebug(`键盘导航：Home键`, { from: currentIndex, to: 0 });
        goToPage(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        logDebug(`键盘导航：End键`, {
          from: currentIndex,
          to: pagesLength - 1,
        });
        goToPage(pagesLength - 1);
      }
    },
    [enableKeyboardNavigation, currentIndex, pagesLength, goToPage, logDebug]
  );

  return { goToPage, handleKeyDown, isMoving: isMoving };
}
