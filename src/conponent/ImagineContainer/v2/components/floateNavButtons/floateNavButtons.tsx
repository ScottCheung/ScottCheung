'use client';

import React from 'react';

export interface FloateNavButtonsProps {
  className?: string;
  canGoPrev: boolean;
  canGoNext: boolean;
  goPrev: () => void;
  goNext: () => void;
  onLeftHoverChange?: (hovered: boolean) => void;
  onRightHoverChange?: (hovered: boolean) => void;
}

interface NavButtonProps {
  direction: 'prev' | 'next';
  canNavigate: boolean;
  onClick: () => void;
  onHoverChange?: (hovered: boolean) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  direction,
  canNavigate,
  onClick,
  onHoverChange,
}) => {
  const isPrev = direction === 'prev';

  return (
    <button
      type='button'
      className={`
        group w-32 h-full flex justify-center items-center pointer-events-auto
        transition-all duration-300 ease-out disabled:cursor-not-allowed
        
      `}
      aria-label={isPrev ? 'Previous' : 'Next'}
      onClick={onClick}
      disabled={!canNavigate}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div
        className={`
          w-12 h-12 flex justify-center items-center rounded-full
          transition-all duration-300 ease-out transform
          ${
            canNavigate
              ? `opacity-20 group-hover:opacity-100 group-hover:scale-110 
               bg-white
               shadow-md  group-hover:shadow-white/10
               ${isPrev ? 'translate-x-4' : '-translate-x-4'}`
              : 'bg-white/50 opacity-0 group-hover:opacity-0'
          }
        `}
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          className='text-gray-600 group-hover:text-gray-800 transition-colors duration-200'
          aria-hidden='true'
        >
          <path
            d={isPrev ? 'M15 18L9 12L15 6' : 'M9 6L15 12L9 18'}
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </button>
  );
};

export const FloateNavButtons: React.FC<FloateNavButtonsProps> = ({
  className = '',
  canGoPrev,
  canGoNext,
  goPrev,
  goNext,
  onLeftHoverChange,
  onRightHoverChange,
}) => {
  return (
    <div
      className={`
        absolute hidden md:flex  inset-0 z-30 justify-between items-center 
        pointer-events-none ${className}
      `}
    >
      <NavButton
        direction='prev'
        canNavigate={canGoPrev}
        onClick={goPrev}
        onHoverChange={onLeftHoverChange}
      />

      <NavButton
        direction='next'
        canNavigate={canGoNext}
        onClick={goNext}
        onHoverChange={onRightHoverChange}
      />
    </div>
  );
};
