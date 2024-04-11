import React, { useState, useRef } from 'react';

const ScrollableContainer = ({ children, Button_mt, container }) => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    const atStart = container.scrollLeft === 0;
    const atEnd =
      container.scrollLeft + container.offsetWidth + 1 >= container.scrollWidth;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  };
  const handleScrollLeft = () => {
    const container = containerRef.current;
    const childWidth = container.firstChild?.offsetWidth || 0;
    container.scrollBy({ left: 1 * -childWidth, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    const childWidth = container.firstChild?.offsetWidth || 0;
    container.scrollBy({ left: 1 * childWidth, behavior: 'smooth' });
  };

  const buttonStyle =
    'bg-black/20 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__zoomIn  flex rounded-full justify-center items-center transition-all transform duration-1000';

  const containerStyle = {
    paddingLeft: containerRef.current?.firstChild?.offsetWidth || 0,
    paddingRight: containerRef.current?.firstChild?.offsetWidth || 0,
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={`${container} w-[100vw] flex overflow-x-scroll overflow-y-hidden scrollbar-hide gap-x-[20px] justify-center  '`}
        style={containerStyle}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            containerRef: containerRef,
            isAtStart: isAtStart,
            isAtEnd: isAtEnd,
            handleScrollLeft: handleScrollLeft,
            handleScrollRight: handleScrollRight,
          }),
        )}
      </div>
      <div className={`flex ${Button_mt} `}>
        <div className='flex  justify-center  gap-x-[30px]'>
          <button
            onClick={handleScrollLeft}
            disabled={isAtStart}
            className={buttonStyle}
            style={{
              opacity: isAtStart ? 0.5 : 1,
              cursor: isAtStart ? 'not-allowed' : 'pointer',
            }}
          >
            <svg
              className='hover:fill-white rotate-180 fill-gray-200 w-[20px] h-[20px]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='8 8 20 20'
            >
              <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            disabled={isAtEnd}
            className={buttonStyle}
            style={{
              opacity: isAtEnd ? 0.5 : 1,
              cursor: isAtEnd ? 'not-allowed' : 'pointer',
            }}
          >
            <svg
              className='hover:fill-white rotate-0 fill-gray-200 w-[20px] h-[20px]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='8 8 20 20'
            >
              <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableContainer;
