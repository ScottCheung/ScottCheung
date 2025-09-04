// v2/components/IndicatorsBar.tsx
'use client';

import React from 'react';
import type { MotionValue } from 'framer-motion';
import { DotIndicator } from './DotIndicator';
import { FloateNavButtons } from '../floateNavButtons/floateNavButtons';
import NavButton from '../floateNavButtons/NavButton';

export interface IndicatorsBarProps {
  pagesLength: number;
  currentIndex: number;
  goToPage: (index: number) => void;
  isOverlay: boolean;
  x: MotionValue<number>;
  getContainerWidth: () => number;
  idBase: string;
  // nav controls
  canGoPrev: boolean;
  canGoNext: boolean;
  goPrev: () => void;
  goNext: () => void;
  // visibility controls
  showIndicators?: boolean;
  showNavButtons?: boolean;
  showSwipeHint?: boolean;
  // styles
  navButtonsClassName?: string;
  className?: string;
}

export const IndicatorsBar: React.FC<IndicatorsBarProps> = ({
  pagesLength,
  currentIndex,
  goToPage,
  isOverlay,
  x,
  getContainerWidth,
  idBase,
  canGoPrev,
  canGoNext,
  goPrev,
  goNext,
  showIndicators = true,
  showNavButtons = true,
  showSwipeHint = false,
  navButtonsClassName = '',
  className = '',
}) => {
  return (
    <div className={`flex relative flex-col justify-center ${className}`}>
      {/* Top drag gradient feedback */}
      <div
        className='absolute top-0 z-10  -mt-[50px] w-full h-[100px] bg-gradient-to-r from-transparent via-white  to-transparent'
        aria-hidden
        style={{
          opacity: isOverlay ? 1 : 0,
          transition: 'opacity 150ms ease',
          background:
            'linear-gradient(to top, transparent, white, transparent)',
        }}
      />

      <div className='inline-flex my-4 gap-4 justify-center items-center'>
        {showNavButtons && (
          <NavButton action={goPrev} disabled={!canGoPrev} direction='prev' />
        )}
        {/* Dot indicators */}
        {showIndicators && (
          <div
            className='inline-flex z-50  justify-center items-center p-2 text-xs text-center text-gray-500 bg-gray-100 rounded-lg md:p-4'
            role='tablist'
            aria-label='Swipeable pages dots'
          >
            {Array.from({ length: pagesLength }).map((_, index) => {
              const tabId = `swipe-tab-${idBase}-${index}`;
              const panelId = `swipe-panel-${idBase}-${index}`;
              return (
                <DotIndicator
                  key={index}
                  index={index}
                  goToPage={goToPage}
                  isOverlay={isOverlay}
                  x={x}
                  getContainerWidth={getContainerWidth}
                  isActive={index === currentIndex}
                  tabId={tabId}
                  panelId={panelId}
                  pagesLength={pagesLength}
                />
              );
            })}
          </div>
        )}{' '}
        {showNavButtons && (
          <NavButton action={goNext} disabled={!canGoNext} direction='next' />
        )}
      </div>

      {/* Swipe hint */}
      {showSwipeHint && (
        <span className='py-4 mx-auto text-xs text-center text-gray-500'>
          Swipe left or right to switch pages
        </span>
      )}
    </div>
  );
};
