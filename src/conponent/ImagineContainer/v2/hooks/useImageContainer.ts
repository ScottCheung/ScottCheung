'use client';

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import { useMotionValue } from 'framer-motion';
import { debounce } from 'lodash';
import { ImageContainerProps } from '../types';
import { useLazyLoadManager } from './useLazyLoadManager';
import { useHeightManager } from './useHeightManager';
// import { useHeightManager } from './useDifferHeightManager';
import { useGestureManager } from './useGestureManager';
import { useNavigationControls } from './useNavigationControls';
import { useSwipeablePageNavigation } from './useSwipeablePageNavigation';
import { useMaskOverlayManager } from './useMaskOverlayManager';
import { useWheelManager } from './useWheelManager';
import { useThumbnailAnimation } from './useThumbnailAnimation';

export interface ImageContainerRef {
  goToPage: (index: number) => void;
  recalculateLayout: () => void;
}

export function useImageContainer(
  props: ImageContainerProps,
  ref: React.ForwardedRef<ImageContainerRef>
) {
  const {
    pages,
    initialIndex = 0,
    galleryMode = false,
    showIndicators = true,
    showPageTabs = true,
    showSwipeHint = false,
    className = '',
    showOverlay = false,
    onPageChange,
    onMainImageClick,
    springConfig = { stiffness: 400, damping: 30, mass: 0.5 },
    threshold = 0.15,
    velocityThreshold = 30,
    lazyLoadBuffer = 1,
    enableKeyboardNavigation = true,
    ariaLabel = 'Swipeable container',
    showFloateNavButtons = false,
    showNavButtons = true,
    renderNavButtons,
    navButtonsClassName = '',
    debugMode = false,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [debugModeState, setDebugModeState] = useState(debugMode);
  const [isReLayouting, setIsReLayouting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const bounceBuffer = 60;
  const idBase = React.useId();

  // 调试日志函数
  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debugModeState) {
        console.log(`[SwipeableContainer] ${message}`, data || '');
      }
    },
    [debugModeState]
  );

  const getContainerWidth = useCallback(
    () => containerRef.current?.offsetWidth || 0,
    []
  );

  const getTargetPosition = useCallback(
    (index: number) => -index * getContainerWidth(),
    [getContainerWidth]
  );

  // 重新计算布局函数
  const recalculateLayout = useCallback(() => {
    logDebug('开始重新计算布局');
    setTimeout(() => {
      const containerWidth = getContainerWidth();
      if (containerWidth > 0) {
        const targetPosition = getTargetPosition(currentIndex);
        x.set(targetPosition);
        logDebug('布局重新计算完成', {
          containerWidth,
          currentIndex,
          targetPosition,
        });
      }
    }, 50);
  }, [getContainerWidth, getTargetPosition, currentIndex, x, logDebug]);

  // 窗口大小变化处理
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const debouncedRecalculate = debounce(() => {
      logDebug('窗口大小变化，重新计算布局');
      recalculateLayout();
      setTimeout(() => {
        setIsReLayouting(false);
        logDebug('重新计算完成，设置重新布局状态为 false');
      }, 50);
    }, 100);

    const handleResize = () => {
      setIsReLayouting(true);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      logDebug('窗口大小变化，设置重新布局状态为 true');
      resizeTimeout = setTimeout(() => {
        debouncedRecalculate();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      debouncedRecalculate.cancel();
    };
  }, [recalculateLayout, logDebug]);

  // 使用各个 hooks
  const { isPageVisible } = useLazyLoadManager(
    currentIndex,
    pages.length,
    lazyLoadBuffer
  );

  const { animatedHeight, pageRefs, pageHeights } = useHeightManager({
    x,
    currentIndex,
    pagesLength: pages.length,
    getContainerWidth,
    springConfig,
    isPageVisible,
  });

  // const { animatedHeight, pageRefs, pageHeights } = useDifferHeightManager({
  //   x,
  //   currentIndex,
  //   pagesLength: pages.length,
  //   getContainerWidth,
  //   springConfig,
  //   isPageVisible,
  // });

  const { goToPage, handleKeyDown, isMoving } = useSwipeablePageNavigation({
    currentIndex,
    pagesLength: pages.length,
    x,
    getTargetPosition,
    onPageChange,
    springConfig,
    enableKeyboardNavigation,
    setCurrentIndex,
    debugMode: debugModeState,
  });

  const { isDragging, handleDragStart, handleDragEnd } = useGestureManager({
    x,
    currentIndex,
    pagesLength: pages.length,
    goToPage,
    getTargetPosition,
    getContainerWidth,
    threshold,
    velocityThreshold,
    debugMode: debugModeState,
  });

  const navControls = useNavigationControls({
    currentIndex,
    pagesLength: pages.length,
    goToPage,
  });

  const { isWheeling, setupWheelListener } = useWheelManager({
    x,
    currentIndex,
    pagesLength: pages.length,
    getContainerWidth,
    getTargetPosition,
    goToPage,
    threshold,
    debugMode: debugModeState,
  });

  const overlay = useMaskOverlayManager({ isDragging, isMoving, isWheeling });

  // 初始化处理
  React.useLayoutEffect(() => {
    const containerWidth = getContainerWidth();
    if (containerWidth > 0) {
      const targetPosition = getTargetPosition(initialIndex);
      x.set(targetPosition);
      logDebug(`初始化位置完成`, {
        initialIndex,
        containerWidth,
        position: targetPosition,
      });
    }
  }, [initialIndex, getTargetPosition, x, getContainerWidth, logDebug]);

  // 暴露方法给父组件
  useImperativeHandle(
    ref,
    () => ({
      goToPage: (index: number) => {
        goToPage(index);
      },
      recalculateLayout,
    }),
    [goToPage, recalculateLayout]
  );

  // 同步外部 debugMode 变化
  useEffect(() => {
    setDebugModeState(debugMode);
  }, [debugMode]);

  return {
    // 状态
    currentIndex,
    isReLayouting,
    debugModeState,
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
    getContainerWidth,
    getTargetPosition,

    // 导航控制
    navControls,

    // 遮罩层
    overlay,

    // 懒加载
    isPageVisible,

    // 调试
    logDebug,
  };
}
