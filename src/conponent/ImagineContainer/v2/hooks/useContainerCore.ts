// 核心容器 Hook - 整合所有基础功能
'use client';

import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import {
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from 'framer-motion';
import { ContainerConfig } from '../config/containerConfig';
import { createDebugLogger } from '../utils/debugUtils';

export interface UseContainerCoreOptions {
  pagesLength: number;
  initialIndex?: number;
  config: ContainerConfig;
  onPageChange?: (index: number) => void;
}

export interface UseContainerCoreResult {
  // 状态
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  x: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement>;

  // 动画状态
  isMoving: boolean;
  isDragging: boolean;

  // 工具函数
  getContainerWidth: () => number;
  getTargetPosition: (index: number) => number;
  goToPage: (index: number) => void;

  // 拖拽处理函数
  handleDragStart: () => void;
  handleDragEnd: () => void;

  // 调试
  debug: ReturnType<typeof createDebugLogger>;
}

export function useContainerCore({
  pagesLength,
  initialIndex = 0,
  config,
  onPageChange,
}: UseContainerCoreOptions): UseContainerCoreResult {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMoving, setIsMoving] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);

  const debug = createDebugLogger(config, 'ContainerCore');

  const getContainerWidth = useCallback(() => {
    return containerRef.current?.offsetWidth || 0;
  }, []);

  const getTargetPosition = useCallback(
    (index: number) => {
      return -index * getContainerWidth();
    },
    [getContainerWidth]
  );

  const goToPage = useCallback(
    (index: number) => {
      if (index < 0 || index >= pagesLength || index === currentIndex) {
        return;
      }

      debug.log('导航到页面', { from: currentIndex, to: index });
      setIsMoving(true);

      // 停止之前的动画
      if (animationRef.current) {
        animationRef.current.stop();
      }

      const targetPosition = getTargetPosition(index);

      animationRef.current = animate(x, targetPosition, {
        type: 'spring',
        ...config.spring,
        onComplete: () => {
          setIsMoving(false);
          animationRef.current = null;
          setCurrentIndex(index);
          onPageChange?.(index);
          debug.log('页面切换完成', { index });
        },
        onStop: () => {
          setIsMoving(false);
          animationRef.current = null;
        },
      });
    },
    [
      currentIndex,
      pagesLength,
      x,
      getTargetPosition,
      config.spring,
      onPageChange,
      debug,
    ]
  );

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    debug.log('开始拖拽');
  }, [debug]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    debug.log('结束拖拽');
  }, [debug]);

  // 初始化位置
  useLayoutEffect(() => {
    const initialPosition = getTargetPosition(initialIndex);
    x.set(initialPosition);
    debug.log('初始化位置', { initialIndex, position: initialPosition });
  }, [initialIndex, getTargetPosition, x, debug]);

  return {
    currentIndex,
    setCurrentIndex,
    x,
    containerRef,
    isMoving,
    isDragging,
    getContainerWidth,
    getTargetPosition,
    goToPage,
    debug,
    // 拖拽处理函数
    handleDragStart,
    handleDragEnd,
  };
}
