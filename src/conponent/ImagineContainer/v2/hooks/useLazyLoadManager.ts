// v2/hooks/useLazyLoadManager.ts
import { useMemo } from 'react';

/**
 * Custom hook to manage lazy loading of pages.
 * It determines which pages should be visible to optimize performance.
 * @param currentIndex The index of the currently active page.
 * @param totalPages The total number of pages.
 * @param buffer The number of pages to render on each side of the active page.
 * @returns A function to check if a page at a given index should be visible.
 */
export const useLazyLoadManager = (
  currentIndex: number,
  totalPages: number,
  buffer: number = 1
) => {
  const isPageVisible = useMemo(() => {
    return (index: number) => {
      const lowerBound = Math.max(0, currentIndex - buffer);
      const upperBound = Math.min(totalPages - 1, currentIndex + buffer);
      return index >= lowerBound && index <= upperBound;
    };
  }, [currentIndex, totalPages, buffer]);

  return { isPageVisible };
};
