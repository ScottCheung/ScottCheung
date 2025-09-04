'use client';

import { useRef, useLayoutEffect, useCallback } from 'react';
import { MotionValue, useMotionValue, animate } from 'framer-motion';

/**
 * Custom hook to manage adaptive height animation.
 * It measures the height of each page and smoothly animates the container's
 * height during page transitions.
 */
export const useHeightManager = ({
  x,
  currentIndex,
  pagesLength,
  springConfig,
}: {
  x: MotionValue<number>;
  currentIndex: number;
  pagesLength: number;
  springConfig: object;
}) => {
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pageHeights = useRef<number[]>(new Array(pagesLength).fill(0));
  const animatedHeight = useMotionValue<number | string>('auto');
  const heightAnimationRef = useRef<any>(null);
  const previousIndexRef = useRef(currentIndex);

  const setHeight = useCallback(
    (height: number) => {
      if (height > 0) {
        animatedHeight.set(height);
      }
    },
    [animatedHeight]
  );

  const animateHeight = useCallback(
    (fromHeight: number, toHeight: number) => {
      if (heightAnimationRef.current) {
        heightAnimationRef.current.stop();
      }

      if (fromHeight <= 0 || toHeight <= 0) {
        if (toHeight > 0) setHeight(toHeight);
        return;
      }

      // 使用提供的 springConfig 进行动画
      heightAnimationRef.current = animate(animatedHeight, toHeight, {
        ...springConfig,
        onComplete: () => {
          heightAnimationRef.current = null;
        },
        onStop: () => {
          heightAnimationRef.current = null;
        },
      });
    },
    [animatedHeight, setHeight, springConfig]
  );

  useLayoutEffect(() => {
    // 第一次渲染或 currentIndex 变化时，测量所有可见页面高度
    const measureHeights = () => {
      pageRefs.current.forEach((el, i) => {
        if (el) {
          const newHeight = el.scrollHeight;
          if (newHeight > 0) {
            pageHeights.current[i] = newHeight;
          }
        }
      });
    };

    measureHeights();

    // 监听当前页面高度变化
    const resizeObservers: ResizeObserver[] = [];
    pageRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new ResizeObserver(() => {
          if (ref) {
            const newHeight = ref.scrollHeight;
            const oldHeight = pageHeights.current[index];

            if (newHeight > 0 && newHeight !== oldHeight) {
              pageHeights.current[index] = newHeight;
              if (index === currentIndex) {
                // 如果是当前页面高度变化，直接更新高度以避免抖动
                setHeight(newHeight);
              }
            }
          }
        });
        observer.observe(ref);
        resizeObservers.push(observer);
      }
    });

    // 清理函数
    return () => {
      resizeObservers.forEach((observer) => observer.disconnect());
      if (heightAnimationRef.current) {
        heightAnimationRef.current.stop();
      }
    };
  }, [currentIndex, setHeight]);

  // 当 currentIndex 变化时，触发高度动画
  useLayoutEffect(() => {
    // 确保组件已挂载且完成了首次高度测量
    const currentHeight = pageHeights.current[currentIndex];
    const previousHeight = pageHeights.current[previousIndexRef.current];

    if (currentHeight > 0 && previousHeight > 0) {
      // 触发平滑动画
      animateHeight(previousHeight, currentHeight);
    } else if (currentHeight > 0) {
      // 如果前一个页面高度不可用，直接设置新高度
      setHeight(currentHeight);
    }

    // 更新上一个索引
    previousIndexRef.current = currentIndex;
  }, [currentIndex, animateHeight, setHeight]);

  return { animatedHeight, pageRefs };
};
