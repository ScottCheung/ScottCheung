/** @format */

import { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ src, isPlay }) => {
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
    if (videoRef.current) {
      if (isVisible && isPlay) {
        videoRef.current.play(); // 播放视频
      } else {
        videoRef.current.pause(); // 暂停视频
      }
    }
  }, [isVisible, isPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      autoPlay
      playsInline
      className='object-cover w-full h-full'
    />
  );
};

export default VideoPlayer;
