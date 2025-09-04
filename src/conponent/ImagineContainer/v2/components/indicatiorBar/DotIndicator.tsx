// v2/components/DotIndicator.tsx
'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { IndicatorProps } from '../../types';
import { useIndicatorLogic } from '../../hooks/useIndicatorLogic';

export const DotIndicator = ({
  index,
  goToPage,
  isOverlay,
  x,
  getContainerWidth,
  isActive,
  tabId,
  panelId,
  pagesLength,
}: IndicatorProps) => {
  const { createScaleTransform, createGoldColorTransform, containerWidth } =
    useIndicatorLogic({ index, getContainerWidth });

  const dotWidth = useTransform(x, createScaleTransform(50, 8));
  const bgColor = useTransform(
    x,
    createGoldColorTransform({ baseLightness: 70 })
  );
  const opacity = useTransform(x, createScaleTransform(1.5, 0.3, 1.5));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isOverlay) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPage(Math.max(0, index - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToPage(Math.min(pagesLength - 1, index + 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToPage(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToPage(pagesLength - 1);
    }
  };

  return (
    <motion.button
      key={index}
      disabled={isOverlay}
      role='tab'
      type='button'
      id={tabId}
      onClick={() => goToPage(index)}
      onKeyDown={handleKeyDown}
      aria-selected={isActive}
      aria-controls={panelId}
      aria-label={`go to page ${index + 1}`}
      tabIndex={isActive ? 0 : -1}
      className={`p-2 group  ${
        isOverlay ? 'pointer-events-none' : 'cursor-pointer '
      }`}
    >
      <motion.div
        className={`flex rounded-full h-2   ${
          isActive ? '' : 'group-hover:invert'
        }`}
        style={{ width: dotWidth, backgroundColor: bgColor, opacity: opacity }}
      />
    </motion.button>
  );
};
