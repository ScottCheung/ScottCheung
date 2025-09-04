import React from 'react';

export default function NavButton({
  action,
  disabled,
  direction,
}: {
  action: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
}) {
  return (
    <button
      type='button'
      className='inline-flex justify-center z-10 items-center w-10 h-10 md:w-[56px] md:h-[56px] rounded-full   pointer-events-auto text-gray-500 bg-gray-100 lg:hover:border lg:hover:bg-white disabled:opacity-20 disabled:hover:bg-gray-100 disabled:cursor-not-allowed'
      aria-label={direction}
      onClick={action}
      disabled={disabled}
    >
      {direction === 'prev' && (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M15 18L9 12L15 6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
      {direction === 'next' && (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M9 6L15 12L9 18'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  );
}
