/** @format */

// v2/hooks/useSwipeableContainer.ts
import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { ImageContainerProps } from '../types';
import { useLazyLoadManager } from './useLazyLoadManager';
import { useHeightManager } from './useHeightManager';
import { useGestureManager } from './useGestureManager';
import { useNavigationControls } from './useNavigationControls';
import { useSwipeablePageNavigation } from './useSwipeablePageNavigation';
import { useMaskOverlayManager } from './useMaskOverlayManager';
import { useWheelManager } from './useWheelManager';

export interface UseSwipeableContainerOptions extends ImageContainerProps {
  onPageChange?: (index: number) => void;
}

export interface UseSwipeableContainerResult {
  // 状态
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  x: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement>;

  // 高度管理
  animatedHeight: any;
  pageRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  pageHeights: React.MutableRefObject<number[]>;

  // 手势管理
  isDragging: boolean;
  handleDragStart: () => void;
  handleDragEnd: (event: any, info: any) => void;

  // 导航控制
  navControls: ReturnType<typeof useNavigationControls>;

  // 页面导航
  goToPage: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  isMoving: boolean;

  // 懒加载
  isPageVisible: (index: number) => boolean;

  // 遮罩管理
  overlay: ReturnType<typeof useMaskOverlayManager>;

  // 工具函数
  getContainerWidth: () => number;
  getTargetPosition: (index: number) => number;
  isWheeling: boolean;
}

export function useSwipeableContainer({
  pages,
  initialIndex = 0,
  springConfig = { stiffness: 500, damping: 600, mass: 1000 },
  threshold = 0.25,
  velocityThreshold = 50,
  lazyLoadBuffer = 1,
  enableKeyboardNavigation = true,
  onPageChange,
}: UseSwipeableContainerOptions): UseSwipeableContainerResult {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const getContainerWidth = useCallback(
    () => containerRef.current?.offsetWidth || 0,
    [],
  );

  const getTargetPosition = useCallback(
    (index: number) => -index * getContainerWidth(),
    [getContainerWidth],
  );

  const { isPageVisible } = useLazyLoadManager(
    currentIndex,
    pages.length,
    lazyLoadBuffer,
  );

  const { animatedHeight, pageRefs, pageHeights } = useHeightManager({
    x,
    currentIndex,
    pagesLength: pages.length,
    getContainerWidth,
    springConfig,
    isPageVisible,
  });

  const { goToPage, handleKeyDown, isMoving } = useSwipeablePageNavigation({
    currentIndex,
    pagesLength: pages.length,
    x,
    getTargetPosition,
    onPageChange,
    enableKeyboardNavigation,
    setCurrentIndex,
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
  });

  const navControls = useNavigationControls({
    currentIndex,
    pagesLength: pages.length,
    goToPage,
  });

  // 触控板滚动管理
  const { isWheeling, setupWheelListener } = useWheelManager({
    x,
    currentIndex,
    pagesLength: pages.length,
    getContainerWidth,
    getTargetPosition,
    goToPage,
    threshold,
  });

  // 遮罩管理
  const overlay = useMaskOverlayManager({
    isDragging,
    isMoving,
    isWheeling,
  });

  // 设置初始位置
  useLayoutEffect(() => {
    x.set(getTargetPosition(initialIndex));
  }, [initialIndex, getTargetPosition, x]);

  // 设置触控板监听器
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanup = setupWheelListener(container);
    return cleanup;
  }, [setupWheelListener]);

  return {
    // 状态
    currentIndex,
    setCurrentIndex,
    x,
    containerRef,

    // 高度管理
    animatedHeight,
    pageRefs,
    pageHeights,

    // 手势管理
    isDragging,
    handleDragStart,
    handleDragEnd,

    // 导航控制
    navControls,

    // 页面导航
    goToPage,
    handleKeyDown,
    isMoving,

    // 懒加载
    isPageVisible,

    // 遮罩管理
    overlay,

    // 工具函数
    getContainerWidth,
    getTargetPosition,
    isWheeling,
  };
}
