/** @format */

import { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ src, isPlay, onError }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 监听视频是否在视口内
      },
      { threshold: 0.5 }, // 50% 可见时触发
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && isPlay) {
      // play() can reject when the browser blocks autoplay; the muted video
      // remains available for the explicit play interaction in that case.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, isPlay]);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      preload='none'
      loop
      muted
      playsInline
      onError={onError}
      className='object-cover w-full h-full '
    />
  );
};

export default VideoPlayer;
