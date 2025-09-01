/** @format */

import { cn } from '../../lib/utils';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

export interface WaterfallLayoutProps {
  children: ReactNode[];
  gap?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  className?: string;
  itemClassName?: string;
  minColumnWidth?:
    | number
    | { sm?: number; md?: number; lg?: number; xl?: number };
}

export const WaterfallLayout: React.FC<WaterfallLayoutProps> = ({
  children,
  gap = { sm: 16, md: 24, lg: 32, xl: 32 },
  className = '',
  itemClassName = '',
  minColumnWidth = { sm: 300, md: 300, lg: 300, xl: 300 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{
    columnWrapperStyle: React.CSSProperties;
    itemStyles: React.CSSProperties[];
  }>({ columnWrapperStyle: {}, itemStyles: [] });

  const resizeObserverRef = useRef<ResizeObserver>();
  const itemRefs = useRef<HTMLElement[]>([]);
  const animationEnabled = useRef(true); // 控制是否启用动画

  // 动态计算 gap 和最小列宽
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

      const columnCount = Math.max(
        1,
        Math.floor((width + numericGap) / (numericMinWidth + numericGap)),
      );

      const columnWidth =
        (width - (columnCount - 1) * numericGap) / columnCount;

      return { columns: columnCount, gap: numericGap, columnWidth };
    };
  }, [gap, minColumnWidth]);

  // 核心布局函数
  const positionItems = () => {
    if (!containerRef.current) return;

    const { columns, gap, columnWidth } = calculateLayout(
      containerRef.current.offsetWidth,
    );

    const columnHeights = new Array(columns).fill(0);
    const newItemStyles: React.CSSProperties[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemHeight = item.offsetHeight;
      const minHeight = Math.min(...columnHeights);
      const columnIndex = columnHeights.indexOf(minHeight);

      newItemStyles[index] = {
        position: 'absolute',
        width: `${columnWidth}px`,
        transform: `translate3d(${
          columnIndex * (columnWidth + gap)
        }px, ${minHeight}px, 0)`,
        transition:
          animationEnabled.current ?
            'transform 2s cubic-bezier(0.22, 1, 0.36, 1)'
          : 'none',
      };

      columnHeights[columnIndex] += itemHeight + gap;
    });

    setLayout({
      columnWrapperStyle: {
        position: 'relative',
        height: `${Math.max(...columnHeights)}px`,
        transition:
          animationEnabled.current ?
            'height 0.9s cubic-bezier(0.22, 1, 0.36, 1)'
          : 'none',
      },
      itemStyles: newItemStyles,
    });
  };

  // 初始化与响应式
  useEffect(() => {
    if (!containerRef.current) return;

    // 只监听容器大小
    resizeObserverRef.current = new ResizeObserver(
      debounce(() => {
        animationEnabled.current = false; // 频繁 resize 关闭动画
        requestAnimationFrame(positionItems);
      }, 100),
    );
    resizeObserverRef.current.observe(containerRef.current);

    // 等图片加载完成后再排布
    const images = containerRef.current.getElementsByTagName('img');
    const promises = Array.from(images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true });
          }),
      );

    Promise.all(promises).then(() => {
      animationEnabled.current = true; // 图片加载后再启用动画
      positionItems();
    });

    // 初始布局
    const timer = setTimeout(() => {
      animationEnabled.current = true;
      positionItems();
    }, 0);

    return () => {
      clearTimeout(timer);
      resizeObserverRef.current?.disconnect();
    };
  }, [children]);

  const itemsWithRef = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null;

      return React.cloneElement(child as React.ReactElement, {
        style: { ...child.props.style, ...layout.itemStyles[index] },
        ref: (el: HTMLElement) => (itemRefs.current[index] = el),
        className: cn(child.props.className, itemClassName),
      });
    });
  }, [children, layout.itemStyles, itemClassName]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full', className)}
      style={layout.columnWrapperStyle}
    >
      {itemsWithRef}
    </div>
  );
};

// 改进版防抖
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), delay);
  };
}
