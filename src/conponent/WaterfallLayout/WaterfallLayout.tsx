/** @format */

'use client';
/** @format */

import { cn } from '../../lib/utils';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export interface WaterfallLayoutProps {
  children: ReactNode[];
  gap?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  className?: string;
  itemClassName?: string;
  minColumnWidth?:
    | number
    | { sm?: number; md?: number; lg?: number; xl?: number };
  breakpoints?: { sm?: number; md?: number; lg?: number; xl?: number };
  debounceDelay?: number;
}

export const WaterfallLayout: React.FC<WaterfallLayoutProps> = ({
  children,
  gap = { sm: 16, md: 24, lg: 32, xl: 32 },
  className = '',
  itemClassName = '',
  minColumnWidth = { sm: 300, md: 300, lg: 300, xl: 300 },
  debounceDelay = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columnWrapperStyle, setColumnWrapperStyle] =
    useState<React.CSSProperties>({});
  const [itemStyles, setItemStyles] = useState<React.CSSProperties[]>([]);

  // 各种 ref 引用
  const resizeObserverRef = useRef<ResizeObserver>();
  const itemRefs = useRef<HTMLElement[]>([]);
  const itemObserversRef = useRef<ResizeObserver[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const rafId = useRef<number>();

  // 性能优化：缓存容器尺寸，避免重复计算
  const lastContainerSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const isLayouting = useRef(false);

  // 新增：尺寸变化阈值，避免微小变化触发重新布局
  const sizeChangeThreshold = 5; // 5px 的阈值
  const lastLayoutTime = useRef(0);
  const minLayoutInterval = 100; // 最小布局间隔 100ms

  // 追踪之前的子元素数量，用于判断新增元素
  const prevChildrenCountRef = useRef(0);
  // 记录已经完成动画的元素索引
  const animatedIndicesRef = useRef<Set<number>>(new Set());

  // 优化的防抖函数 - 添加时间间隔控制
  const createDebouncedFunction = useCallback(
    <T extends (...args: any[]) => void>(fn: T, delay: number) => {
      return (...args: Parameters<T>) => {
        const now = Date.now();

        // 检查是否在最小间隔内
        if (now - lastLayoutTime.current < minLayoutInterval) {
          return;
        }

        // 清除之前的定时器和动画帧
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }

        debounceTimerRef.current = setTimeout(() => {
          // 使用 requestAnimationFrame 确保在浏览器空闲时执行
          rafId.current = requestAnimationFrame(() => {
            if (!isLayouting.current) {
              lastLayoutTime.current = Date.now();
              fn(...args);
            }
          });
        }, delay);
      };
    },
    [],
  );

  // 计算列数和间隙 - 添加缓存优化
  const calculateLayout = useMemo(() => {
    return (width: number) => {
      const numericGap =
        typeof gap === 'number' ? gap
        : width >= 1280 ? gap.xl || 32
        : width >= 1024 ? gap.lg || 24
        : width >= 768 ? gap.md || 16
        : gap.sm || 8;

      const numericMinWidth =
        typeof minColumnWidth === 'number' ? minColumnWidth
        : width >= 1280 ? minColumnWidth.xl || 300
        : width >= 1024 ? minColumnWidth.lg || 300
        : width >= 768 ? minColumnWidth.md || 300
        : minColumnWidth.sm || 300;

      // 计算可用宽度
      const availableWidth = width;

      // 计算列数
      const columnCount = Math.max(
        1,
        Math.floor(
          (availableWidth + numericGap) / (numericMinWidth + numericGap),
        ),
      );

      // 计算实际列宽
      const columnWidth =
        (availableWidth - (columnCount - 1) * numericGap) / columnCount;

      return {
        columns: columnCount,
        gap: numericGap,
        columnWidth,
      };
    };
  }, [gap, minColumnWidth]);

  // 瀑布流布局核心算法 - 性能优化版
  const positionItems = useCallback(() => {
    if (!containerRef.current || isLayouting.current) return;

    // 设置布局标志，避免重复执行
    isLayouting.current = true;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // 性能优化：检查容器尺寸是否真的发生了显著变化
    const widthDiff = Math.abs(
      containerWidth - lastContainerSize.current.width,
    );
    const heightDiff = Math.abs(
      containerHeight - lastContainerSize.current.height,
    );
    const sizeChanged =
      widthDiff > sizeChangeThreshold || heightDiff > sizeChangeThreshold;

    // 如果尺寸没变化且不是新增元素，跳过布局计算
    const currentChildrenCount = children.length;
    const prevChildrenCount = prevChildrenCountRef.current;
    const hasNewChildren = currentChildrenCount !== prevChildrenCount;

    if (!sizeChanged && !hasNewChildren) {
      isLayouting.current = false;
      return;
    }

    // 更新缓存的容器尺寸
    lastContainerSize.current = {
      width: containerWidth,
      height: containerHeight,
    };

    const { columns, gap, columnWidth } = calculateLayout(containerWidth);

    const columnHeights = new Array(columns).fill(0);
    const newItemStyles: React.CSSProperties[] = [];

    // 批量处理样式计算
    const stylesToUpdate: Array<{ index: number; style: React.CSSProperties }> =
      [];
    const newItemsToAnimate: Array<{
      index: number;
      targetTransform: string;
      columnWidth: number;
    }> = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const itemHeight = item.offsetHeight;
      if (itemHeight === 0) return; // 跳过还没渲染完成的元素

      const minHeight = Math.min(...columnHeights);
      const columnIndex = columnHeights.indexOf(minHeight);

      const isNewItem = index >= prevChildrenCount;
      const hasBeenAnimated = animatedIndicesRef.current.has(index);

      const targetTransform = `translate3d(${
        columnIndex * (columnWidth + gap)
      }px, ${minHeight}px, 0)`;

      if (isNewItem && !hasBeenAnimated) {
        // 新增元素：收集需要动画的元素
        newItemsToAnimate.push({ index, targetTransform, columnWidth });

        newItemStyles[index] = {
          position: 'absolute',
          width: `${columnWidth}px`,
          transform: `translate3d(${
            columnIndex * (columnWidth + gap)
          }px, ${minHeight + 5}px, 0)`,
          opacity: 0,
          transition: 'none',
        };
      } else {
        // 已存在的元素
        newItemStyles[index] = {
          position: 'absolute',
          width: `${columnWidth}px`,
          transform: targetTransform,
          opacity: 1,
          transition: hasBeenAnimated ? 'transform 0.5s ease-out' : 'none',
        };

        if (!hasBeenAnimated) {
          animatedIndicesRef.current.add(index);
        }
      }

      columnHeights[columnIndex] += itemHeight + gap;
    });

    // 批量更新样式
    const maxHeight = Math.max(...columnHeights);
    setColumnWrapperStyle({
      position: 'relative',
      height: `${maxHeight}px`,
      transition: 'height 0.9s ease-out',
    });

    setItemStyles(newItemStyles);

    // 处理新增元素的动画
    if (newItemsToAnimate.length > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setItemStyles((prevStyles) => {
            const updatedStyles = [...prevStyles];
            newItemsToAnimate.forEach(({ index, targetTransform }) => {
              if (updatedStyles[index]) {
                updatedStyles[index] = {
                  ...updatedStyles[index],
                  transform: targetTransform,
                  opacity: 1,
                  transition: 'transform 0.7s ease-out, opacity 0.9s ease-out',
                };
                animatedIndicesRef.current.add(index);
              }
            });
            return updatedStyles;
          });
        });
      });
    }

    // 更新子元素计数
    if (hasNewChildren) {
      prevChildrenCountRef.current = currentChildrenCount;
    }

    // 重置布局标志
    isLayouting.current = false;
  }, [children, calculateLayout]);

  // 创建防抖版本的布局函数
  const debouncedPositionItems = useMemo(
    () => createDebouncedFunction(positionItems, debounceDelay),
    [createDebouncedFunction, positionItems, debounceDelay],
  );

  // 立即执行版本（用于图片加载等场景）
  const immediatePositionItems = useCallback(() => {
    // 清除防抖定时器，立即执行
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    positionItems();
  }, [positionItems]);

  // 响应式处理 - 优化版
  useEffect(() => {
    if (!containerRef.current) return;

    // 清理旧的 observers
    itemObserversRef.current.forEach((observer) => observer.disconnect());
    itemObserversRef.current = [];

    // 容器尺寸监听 - 优化版
    resizeObserverRef.current = new ResizeObserver((entries) => {
      // 只有容器尺寸真正变化时才触发防抖
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        const widthDiff = Math.abs(width - lastContainerSize.current.width);
        const heightDiff = Math.abs(height - lastContainerSize.current.height);
        const sizeChanged =
          widthDiff > sizeChangeThreshold || heightDiff > sizeChangeThreshold;

        if (sizeChanged) {
          debouncedPositionItems();
        }
      }
    });
    resizeObserverRef.current.observe(containerRef.current);

    // 子项尺寸监听 - 减少触发频率
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          const { width, height } = entry.contentRect;
          // 只有当子项尺寸变化超过阈值时才触发重新布局
          const sizeChanged = width > 0 && height > 0;
          if (sizeChanged) {
            // 子项尺寸变化使用较长的防抖延迟，避免频繁触发
            createDebouncedFunction(positionItems, debounceDelay * 3)();
          }
        }
      });
      observer.observe(item);
      itemObserversRef.current[index] = observer;
    });

    // 初始布局 - 延迟执行确保DOM准备就绪
    const initTimer = setTimeout(() => {
      immediatePositionItems();
    }, 0);

    // 图片加载监听 - 优化版
    const container = containerRef.current;
    const images = container.getElementsByTagName('img');
    const imageLoadHandler = () => {
      // 图片加载完成后使用防抖重新布局，而不是立即执行
      debouncedPositionItems();
    };

    Array.from(images).forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', imageLoadHandler, { once: true });
        img.addEventListener('error', imageLoadHandler, { once: true });
      }
    });

    return () => {
      clearTimeout(initTimer);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserverRef.current?.disconnect();
      itemObserversRef.current.forEach((observer) => observer.disconnect());
      Array.from(images).forEach((img) => {
        img.removeEventListener('load', imageLoadHandler);
        img.removeEventListener('error', imageLoadHandler);
      });
    };
  }, [
    debouncedPositionItems,
    immediatePositionItems,
    createDebouncedFunction,
    positionItems,
    debounceDelay,
  ]);

  // 重置动画状态
  useEffect(() => {
    const currentChildrenCount = children.length;
    if (currentChildrenCount < prevChildrenCountRef.current) {
      animatedIndicesRef.current.clear();
      prevChildrenCountRef.current = currentChildrenCount;
      // 子元素减少时立即重新布局
      immediatePositionItems();
    }
  }, [children, immediatePositionItems]);

  // 子项元素处理 - 优化渲染
  const itemsWithRef = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null;

      const isNewItem = index >= prevChildrenCountRef.current;

      return React.cloneElement(child as React.ReactElement, {
        style: { ...child.props.style, ...itemStyles[index] },
        ref: (el: HTMLElement) => {
          itemRefs.current[index] = el;
        },
        className: cn(child.props.className, itemClassName),
        'data-is-new': isNewItem ? 'true' : 'false',
      });
    });
  }, [children, itemStyles, itemClassName]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full', className)}
      style={columnWrapperStyle}
    >
      {itemsWithRef}
    </div>
  );
};
