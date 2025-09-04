// v2/hooks/useHeightManager.ts

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

  getContainerWidth,

  springConfig,

  isPageVisible,
}: {
  x: MotionValue<number>;

  currentIndex: number;

  pagesLength: number;

  getContainerWidth: () => number;

  springConfig: object;

  isPageVisible: (index: number) => boolean;
}) => {
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pageHeights = useRef<number[]>(new Array(pagesLength).fill(0));

  const animatedHeight = useMotionValue<number | string>('auto');

  const isFirstRender = useRef(true);

  const heightAnimationRef = useRef<any>(null);

  const previousIndexRef = useRef(currentIndex);

  // ✨ 简化：调试日志函数

  const logDebug = useCallback((message: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).__DEBUG_HEIGHT__) {
      console.log(`[HeightManager] ${message}`, data || '');
    }
  }, []);

  // ✨ 简化：直接设置高度

  const setHeight = useCallback(
    (height: number) => {
      if (height > 0) {
        animatedHeight.set(height);

        logDebug(`设置高度`, { height });
      }
    },

    [animatedHeight, logDebug]
  );

  // ✨ 简化：快速高度动画

  const animateHeight = useCallback(
    (fromHeight: number, toHeight: number) => {
      if (fromHeight <= 0 || toHeight <= 0) {
        if (toHeight > 0) {
          setHeight(toHeight);
        }

        return;
      }

      // 停止之前的动画

      if (heightAnimationRef.current) {
        heightAnimationRef.current.stop();
      }

      logDebug(`开始高度动画`, { fromHeight, toHeight });

      // ✨ 优化：使用更快的动画配置

      heightAnimationRef.current = animate(animatedHeight, toHeight, {
        type: 'spring',

        stiffness: 350,

        damping: 40,

        mass: 0.6,

        duration: 0.25, // 减少动画时长

        onComplete: () => {
          heightAnimationRef.current = null;

          logDebug(`高度动画完成`, { finalHeight: toHeight });
        },

        onStop: () => {
          heightAnimationRef.current = null;

          logDebug(`高度动画被停止`);
        },
      });
    },

    [animatedHeight, setHeight, logDebug]
  );

  useLayoutEffect(() => {
    const measureHeights = () => {
      pageRefs.current.forEach((el, i) => {
        if (el) {
          const newHeight = el.scrollHeight;

          if (newHeight > 0) {
            pageHeights.current[i] = newHeight;

            logDebug(`测量页面高度`, {
              index: i,

              height: newHeight,

              isVisible: isPageVisible(i),
            });
          }
        }
      });

      // 初始化当前页面高度

      if (isFirstRender.current && pageHeights.current[currentIndex] > 0) {
        setHeight(pageHeights.current[currentIndex]);

        isFirstRender.current = false;

        logDebug(`初始化高度`, { height: pageHeights.current[currentIndex] });
      }
    };

    measureHeights();

    // ✨ 移除：X轴变化监听，避免频繁触发

    // 这个监听器是导致抽搐的主要原因

    // ✨ 简化：只对当前页面使用ResizeObserver

    const resizeObservers: ResizeObserver[] = [];

    pageRefs.current.forEach((ref, index) => {
      if (ref && index === currentIndex) {
        // 只监听当前页面

        const observer = new ResizeObserver(() => {
          if (ref) {
            const newHeight = ref.scrollHeight;

            const oldHeight = pageHeights.current[index];

            if (newHeight > 0 && newHeight !== oldHeight) {
              pageHeights.current[index] = newHeight;

              logDebug(`当前页面高度变化`, {
                index,

                oldHeight,

                newHeight,
              });

              // 只有当前页面高度变化时才立即更新

              const currentHeight = animatedHeight.get();

              if (
                typeof currentHeight === 'number' &&
                currentHeight !== newHeight
              ) {
                animateHeight(currentHeight, newHeight);
              } else if (typeof currentHeight !== 'number') {
                setHeight(newHeight);
              }
            }
          }
        });

        observer.observe(ref);

        resizeObservers.push(observer);
      }
    });

    window.addEventListener('resize', measureHeights);

    return () => {
      window.removeEventListener('resize', measureHeights);

      resizeObservers.forEach((observer) => observer.disconnect());

      if (heightAnimationRef.current) {
        heightAnimationRef.current.stop();
      }
    };
  }, [
    currentIndex, // ✨ 关键：只在currentIndex变化时重新设置监听器

    pagesLength,

    animatedHeight,

    springConfig,

    isPageVisible,

    animateHeight,

    setHeight,

    logDebug,
  ]);

  // ✨ 简化：页面切换时的高度处理

  useLayoutEffect(() => {
    if (isFirstRender.current) return;

    const previousIndex = previousIndexRef.current;

    if (previousIndex !== currentIndex) {
      logDebug(`页面索引变化`, { from: previousIndex, to: currentIndex });

      const toHeight = pageHeights.current[currentIndex];

      const fromHeight = pageHeights.current[previousIndex];

      if (fromHeight > 0 && toHeight > 0 && fromHeight !== toHeight) {
        animateHeight(fromHeight, toHeight);
      } else if (toHeight > 0) {
        setHeight(toHeight);
      }

      previousIndexRef.current = currentIndex;
    }
  }, [currentIndex, animateHeight, setHeight, logDebug]);

  return { animatedHeight, pageRefs, pageHeights };
};

// 上面是差值直接计算到指定高度

// 'use client';

// import { useRef, useLayoutEffect } from 'react';

// import { MotionValue, useMotionValue, animate } from 'framer-motion';

// /**

// * Custom hook to manage adaptive height animation.

// * It measures the height of each page and smoothly animates the container's

// * height during page transitions.

// */

// export const useHeightManager = ({
//   x,

//   currentIndex,

//   pagesLength,

//   getContainerWidth,

//   springConfig,

//   isPageVisible,
// }: {
//   x: MotionValue<number>;

//   currentIndex: number;

//   pagesLength: number;

//   getContainerWidth: () => number;

//   springConfig: object;

//   isPageVisible: (index: number) => boolean;
// }) => {
//   const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const pageHeights = useRef<number[]>(new Array(pagesLength).fill(0));

//   const animatedHeight = useMotionValue<number | string>('auto');

//   const isFirstRender = useRef(true);

//   useLayoutEffect(() => {
//     const measureHeights = () => {
//       pageRefs.current.forEach((el, i) => {
//         if (el && isPageVisible(i)) {
//           pageHeights.current[i] = el.scrollHeight;
//         }
//       });

//       if (isFirstRender.current && pageHeights.current[currentIndex] > 0) {
//         animatedHeight.set(pageHeights.current[currentIndex]);

//         isFirstRender.current = false;
//       }
//     };

//     measureHeights();

//     const unsubscribeX = x.on('change', (latestX) => {
//       const containerWidth = getContainerWidth();

//       if (containerWidth === 0) return;

//       const pageIndexFloat = -latestX / containerWidth;

//       const fromIndex = Math.max(0, Math.floor(pageIndexFloat));

//       const toIndex = Math.min(pagesLength - 1, Math.ceil(pageIndexFloat));

//       const fromHeight = pageHeights.current[fromIndex];

//       const toHeight = pageHeights.current[toIndex];

//       if (fromHeight === undefined || toHeight === undefined) return;

//       const progress = pageIndexFloat - fromIndex;

//       const newHeight = fromHeight + (toHeight - fromHeight) * progress;

//       animatedHeight.set(newHeight);
//     });

//     const resizeObservers: ResizeObserver[] = [];

//     pageRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const observer = new ResizeObserver(() => {
//           if (ref) {
//             const newHeight = ref.scrollHeight;

//             pageHeights.current[index] = newHeight;

//             if (index === currentIndex) {
//               // 直接设置高度，不使用动画，避免一跳一跳的效果

//               animatedHeight.set(newHeight);
//             }
//           }
//         });

//         observer.observe(ref);

//         resizeObservers.push(observer);
//       }
//     });

//     window.addEventListener('resize', measureHeights);

//     return () => {
//       unsubscribeX();

//       window.removeEventListener('resize', measureHeights);

//       resizeObservers.forEach((observer) => observer.disconnect());
//     };
//   }, [
//     x,

//     currentIndex,

//     pagesLength,

//     getContainerWidth,

//     animatedHeight,

//     springConfig,

//     isPageVisible,
//   ]);

//   return { animatedHeight, pageRefs, pageHeights };
// };
