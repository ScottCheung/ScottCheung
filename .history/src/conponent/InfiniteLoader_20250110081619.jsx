/** @format */
import { useEffect, useRef, useMemo, useCallback } from 'react';
import debounce from 'lodash/debounce';

const InfiniteLoader = ({ isLoading, onLoadMore, loader }) => {
  const loaderRef = (useRef < HTMLDivElement) | (null > null);

  // 创建防抖后的 onLoadMore 函数
  const debouncedOnLoadMore = useMemo(
    () => debounce(onLoadMore, 500),
    [onLoadMore],
  );

  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLoading) {
        debouncedOnLoadMore(); // 使用防抖后的函数
      }
    },
    [isLoading, debouncedOnLoadMore],
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.25,
        rootMargin: '100px',
      }),
    [handleIntersection],
  );

  useEffect(() => {
    const currentLoaderRef = loaderRef.current;

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [observer]);

  return (
    <div ref={loaderRef} className='flex items-center justify-center min-h-48'>
      {loader ? loader : 'Scroll down to load more...'}
    </div>
  );
};

export default InfiniteLoader;
