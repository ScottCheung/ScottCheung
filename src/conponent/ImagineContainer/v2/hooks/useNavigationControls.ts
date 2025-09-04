// v2/hooks/useNavigationControls.ts
'use client';

import { useMemo, useCallback } from 'react';

export const useNavigationControls = ({
  currentIndex,
  pagesLength,
  goToPage,
}: {
  currentIndex: number;
  pagesLength: number;
  goToPage: (index: number) => void;
}) => {
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < pagesLength - 1;

  const goPrev = useCallback(() => {
    if (!canGoPrev) return;
    goToPage(currentIndex - 1);
  }, [canGoPrev, currentIndex, goToPage]);

  const goNext = useCallback(() => {
    if (!canGoNext) return;
    goToPage(currentIndex + 1);
  }, [canGoNext, currentIndex, goToPage]);

  return useMemo(
    () => ({ currentIndex, pagesLength, canGoPrev, canGoNext, goPrev, goNext }),
    [currentIndex, pagesLength, canGoPrev, canGoNext, goPrev, goNext]
  );
};
