/** @format */

import React, { useState, useEffect, useRef } from 'react';
import Database from '../data/Database.json';
import Navbar from '../conponent/NavBar/Navbar';
import { motion } from 'framer-motion'; // 导入 framer-motion
import { debounce } from 'lodash'; // 防抖函数

// 图片懒加载组件
const LazyImage = ({ src, alt, layoutId }) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={loaded ? src : ''}
      alt={alt}
      className='cursor-pointer'
      layoutId={src} // 使用 layoutId 来绑定图片
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

// 图片放大组件
const ImageModal = ({ src, onClose }) => {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
      onClick={onClose}
    >
      <motion.img
        src={src}
        layoutId={src}
        alt='Enlarged'
        className='object-contain'
      />
    </motion.div>
  );
};

const ImageGallery = () => {
  const imageUrls = Database.PersonalInfo.Picture.AllPicture;
  const [visibleImages, setVisibleImages] = useState(imageUrls.slice(0, 20)); // 初始加载前20张图片
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const loadMoreImages = () => {
    if (visibleImages.length < imageUrls.length) {
      setVisibleImages((prev) => [
        ...prev,
        ...imageUrls.slice(prev.length, prev.length + 20),
      ]);
    }
  };

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  const handleScroll = debounce(() => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    if (bottom) {
      loadMoreImages();
    }
  }, 700); // 防抖，延迟 0.7 秒

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleImages]);

  return (
    <div className='p-4'>
      <Navbar />

      <div className='grid gap-[20px] grid-cols-12 pt-[100px]'>
        {visibleImages.map((url, index) => {
          const fullImageUrl = url.replace('.md', ''); // 去掉 .md 后缀
          return (
            <div
              key={index}
              className='w-full cursor-pointer md:col-span-4 lg:col-span-2'
              onClick={() => handleImageClick(fullImageUrl)}
            >
              <LazyImage
                src={fullImageUrl}
                alt={`image-${index}`}
                layoutId={`image-${index}`} // 使用不同的 layoutId 连接动画
              />
            </div>
          );
        })}
      </div>

      {showModal && (
        <ImageModal src={currentImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ImageGallery;
