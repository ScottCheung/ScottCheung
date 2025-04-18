/** @format */

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './videoPlayer';
import Slider from 'react-slick';
import SubNav from '../conponent/subNav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { debounce } from 'lodash';

const Carousel = ({ interval = 5000, HomeCarousel, isPaused, setIsPaused }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [debounceTime, setDebounceTime] = useState(1000);
  // 添加交互类型状态
  const [interactionType, setInteractionType] = useState('none'); // 'none', 'click', 'swipe'

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const view = useRef(null);

  // 错误状态管理
  const [mediaErrors, setMediaErrors] = useState({});
  // 性能监控
  const [frameRate, setFrameRate] = useState(60);
  const frameRateRef = useRef({ lastTime: performance.now(), frames: 0 });
  // 触摸事件跟踪
  const touchStartRef = useRef(null);
  const touchMoveCountRef = useRef(0);
  const touchDistanceRef = useRef(0);
  const touchTimeRef = useRef(0);

  // 虚拟列表优化 - 根据索引计算应该渲染哪些幻灯片
  const visibleSlidesIndices = useMemo(() => {
    const indices = [];
    if (HomeCarousel.length <= 3)
      return Array.from({ length: HomeCarousel.length }, (_, i) => i);

    const prevIndex =
      (activeIndex - 1 + HomeCarousel.length) % HomeCarousel.length;
    const nextIndex = (activeIndex + 1) % HomeCarousel.length;

    indices.push(prevIndex, activeIndex, nextIndex);
    return indices;
  }, [activeIndex, HomeCarousel.length]);

  // 视口大小监听
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 可见性检测
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
        setIsTop(entry.isIntersecting);
      },
      { threshold: 0.7 },
    );

    if (view.current) {
      observer.observe(view.current);
    }

    return () => {
      if (view.current) {
        observer.unobserve(view.current);
      }
    };
  }, []);

  // 帧率监控
  useEffect(() => {
    let frameId;

    const checkFrameRate = () => {
      const now = performance.now();
      frameRateRef.current.frames++;

      // 每秒更新帧率
      if (now - frameRateRef.current.lastTime >= 1000) {
        setFrameRate(frameRateRef.current.frames);
        frameRateRef.current.frames = 0;
        frameRateRef.current.lastTime = now;
      }

      frameId = requestAnimationFrame(checkFrameRate);
    };

    // 只在组件可见时监控帧率
    if (isTop) {
      frameId = requestAnimationFrame(checkFrameRate);
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isTop]);

  // 更智能的触摸事件处理
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: performance.now(),
      };
      touchMoveCountRef.current = 0;
      touchDistanceRef.current = 0;
      touchTimeRef.current = 0;
    };

    const handleTouchMove = (e) => {
      if (!touchStartRef.current) return;

      touchMoveCountRef.current += 1;

      const currentX = e.touches[0].clientX;
      const deltaX = Math.abs(currentX - touchStartRef.current.x);
      touchDistanceRef.current = Math.max(touchDistanceRef.current, deltaX);
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current) return;

      touchTimeRef.current = performance.now() - touchStartRef.current.time;

      // 结合移动次数、距离和时间来更智能地判断交互类型
      const isSwipe =
        touchMoveCountRef.current > 3 &&
        touchDistanceRef.current > 30 &&
        touchTimeRef.current < 300;

      const isTap =
        touchMoveCountRef.current < 3 &&
        touchDistanceRef.current < 10 &&
        touchTimeRef.current < 200;

      if (isSwipe) {
        setInteractionType('swipe');
        setDebounceTime(1000); // 滑动用长防抖
      } else if (isTap) {
        setInteractionType('click');
        setDebounceTime(0); // 点击不用防抖

        // 短暂延迟后恢复
        setTimeout(() => {
          setDebounceTime(1000);
          setInteractionType('none');
        }, 500);
      }

      // 重置触摸状态
      touchStartRef.current = null;
    };

    // 添加键盘导航支持
    const handleKeyDown = (e) => {
      if (!isTop) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        e.preventDefault();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        setIsPaused(!isPaused);
        e.preventDefault();
      }
    };

    const element = view.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      element.addEventListener('touchmove', handleTouchMove, { passive: true });
      element.addEventListener('touchend', handleTouchEnd);
      // 添加后监听键盘事件
      element.setAttribute('tabindex', '0'); // 使元素可聚焦以接收键盘事件
      element.addEventListener('keydown', handleKeyDown);
    }

    // 全局键盘事件支持
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
        element.removeEventListener('keydown', handleKeyDown);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTop, isPaused]);

  const delayTime = 0.17;

  const iconVariants = {
    paused:
      'M27,33 L27,15 Q27,12 30,12 L30,12 Q33,12 33,15 L33,33 Q33,36 30,36 L30,36 Q27,36 27,33 M15,33 L15,15 Q15,12 18,12 L18,12 Q21,12 21,15 L21,33 Q21,36 18,36 L18,36 Q15,36 15,33',
    playing:
      'M15,33 L15,15 Q15,11 18,12 L24,16 Q24,16 24,16 L24,32 Q24,32 24,32 L18,36 Q15,37 15,33 M24,32 L24,16 Q24,16 24,16 L33,22 Q35,23.3 35,24 L35,24 Q35,24.7 33,26 L24,32 Q24,32 24,32',
  };

  const prevDurationRef = useRef(null);
  const duration = useMemo(() => {
    const newDuration =
      (HomeCarousel[activeIndex]?.duration || interval) * 1000;
    if (prevDurationRef.current !== newDuration) {
      prevDurationRef.current = newDuration;
    }
    return prevDurationRef.current;
  }, [activeIndex]);

  // 导航函数增强，添加ARIA支持
  const nextSlide = useCallback(() => {
    setInteractionType('click');
    setDebounceTime(0);

    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }

    // 提供反馈给屏幕阅读器
    const announcement = document.getElementById('carousel-announcement');
    if (announcement) {
      const nextIndex = (activeIndex + 1) % HomeCarousel.length;
      announcement.textContent = `已移动到幻灯片 ${nextIndex + 1}，共 ${HomeCarousel.length} 张`;
    }

    setTimeout(() => {
      setDebounceTime(1000);
      setInteractionType('none');
    }, 500);
  }, [activeIndex, HomeCarousel.length]);

  const prevSlide = useCallback(() => {
    setInteractionType('click');
    setDebounceTime(0);

    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }

    // 提供反馈给屏幕阅读器
    const announcement = document.getElementById('carousel-announcement');
    if (announcement) {
      const prevIndex =
        (activeIndex - 1 + HomeCarousel.length) % HomeCarousel.length;
      announcement.textContent = `已移动到幻灯片 ${prevIndex + 1}，共 ${HomeCarousel.length} 张`;
    }

    setTimeout(() => {
      setDebounceTime(1000);
      setInteractionType('none');
    }, 500);
  }, [activeIndex, HomeCarousel.length]);

  const goToSlide = useCallback(
    (index) => {
      setInteractionType('click');
      setDebounceTime(0);

      if (sliderRef.current) {
        sliderRef.current.slickGoTo(index);
      }

      // 提供反馈给屏幕阅读器
      const announcement = document.getElementById('carousel-announcement');
      if (announcement) {
        announcement.textContent = `已移动到幻灯片 ${index + 1}，共 ${HomeCarousel.length} 张`;
      }

      setTimeout(() => {
        setDebounceTime(1000);
        setInteractionType('none');
      }, 500);
    },
    [HomeCarousel.length],
  );

  // 处理媒体错误
  const handleMediaError = useCallback((index) => {
    setMediaErrors((prev) => ({
      ...prev,
      [index]: true,
    }));

    // 可以在这里添加错误报告逻辑
    console.error(`Media at index ${index} failed to load`);
  }, []);

  // 进度条逻辑
  useEffect(() => {
    if (isPaused) return;
    let startTime = performance.now();
    let frame;

    const updateProgress = (timestamp) => {
      let elapsed = timestamp - startTime;
      let progress = (elapsed / duration) * 100;
      if (progress >= 100) {
        nextSlide();
      } else {
        setProgress(progress);
        frame = requestAnimationFrame(updateProgress);
      }
    };

    frame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frame);
  }, [activeIndex, duration, isPaused, nextSlide]);

  // 优化 beforeChange 处理
  const handleBeforeChange = useCallback(
    (_, next) => {
      setActiveIndex(next);
    },
    [setActiveIndex],
  );

  // 根据交互方式创建不同的 beforeChange 处理函数
  const debouncedBeforeChange = useMemo(() => {
    return debounce(handleBeforeChange, debounceTime);
  }, [handleBeforeChange, debounceTime]);

  // 性能优化：当帧率较低时降级动画效果
  const reducedMotion = frameRate < 30;

  // 滑块设置
  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: reducedMotion ? 700 : 500, // 低帧率时增加过渡时间使动画更平滑
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      beforeChange:
        interactionType === 'click' ? handleBeforeChange : (
          debouncedBeforeChange
        ),
      pauseOnHover: false,
      lazyLoad: 'ondemand', // 懒加载图片
      // 添加无障碍支持
      accessibility: true,
    }),
    [handleBeforeChange, debouncedBeforeChange, interactionType, reducedMotion],
  );

  return (
    <div
      ref={view}
      className={`relative h-[${viewportHeight * 0.4}px] lg:h-[${viewportHeight * 1.1}px] w-full overflow-hidden bg-[#f5f5f7]`}
      role='region'
      aria-label='图片轮播'
      aria-roledescription='carousel'
      tabIndex='0'
    >
      {/* 无障碍公告区域 - 供屏幕阅读器使用 */}
      <div
        id='carousel-announcement'
        className='sr-only'
        aria-live='polite'
      ></div>

      <svg
        data-v-226d292e=''
        viewBox='0 0 1440 62'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-0 left-0 right-0 z-30 scale-105 '
        aria-hidden='true'
      >
        <path
          data-v-226d292e=''
          d='M0 0c106.167 13.333 399.8 62 725 62s612.17-48.667 715-62v62H0V0z'
          fill='#f5f5f7'
        ></path>
      </svg>

      <Slider ref={sliderRef} {...sliderSettings}>
        {HomeCarousel.map((item, index) => (
          <div
            key={index}
            className={`object-cover h-[${viewportHeight * 0.4}px] lg:h-[${viewportHeight * 1.1}px] relative w-full `}
            role='group'
            aria-roledescription='slide'
            aria-label={`幻灯片 ${index + 1}，共 ${HomeCarousel.length} 张`}
            aria-hidden={activeIndex !== index}
          >
            <AnimatePresence>
              {item.type !== 'image' && isPaused && (
                <span
                  onClick={() => isTop && setIsPaused(false)}
                  className={`absolute z-20 w-full h-full flex justify-center ${isTop ? 'cursor-pointer' : 'cursor-not-allowed'} items-center bg-black/50`}
                  role='button'
                  aria-label='播放视频'
                  tabIndex={isTop && activeIndex === index ? 0 : -1}
                >
                  <motion.button
                    disabled={!isTop}
                    layoutId='pause button'
                    className={`bg-black/20 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] flex rounded-full justify-center items-center ring-0 outline-none ${isTop ? 'cursor-pointer' : 'pointer-events-none cursor-not-allowed'}`}
                    aria-hidden='true' // 因为外层span已经有按钮角色
                  >
                    <motion.svg
                      whileTap={{ scale: isTop ? 1.1 : 1 }}
                      whileHover={{
                        scale: isTop ? 1.2 : 1,
                      }}
                      transition={{
                        duration: reducedMotion ? 0.4 : 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`w-[45px] lg:w-[70px] lg:h-[70px] fill-white ring-0 outline-none`}
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <AnimatePresence>
                        {item.type !== 'image' && isPaused && (
                          <motion.path
                            d={
                              !isPaused ?
                                iconVariants.playing
                              : iconVariants.paused
                            }
                            animate={{
                              d:
                                isPaused ?
                                  iconVariants.playing
                                : iconVariants.paused,
                            }}
                            exit={{
                              d:
                                isPaused ?
                                  iconVariants.playing
                                : iconVariants.paused,
                            }}
                            transition={{
                              duration: reducedMotion ? 0.4 : 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.svg>
                  </motion.button>
                </span>
              )}
            </AnimatePresence>

            <span
              className='z-20 hidden md:flex h-[20vh] absolute w-full bg-gradient-to-b from-black/40 via-black/30 via-[10vh] to-transparent overflow-hidden'
              aria-hidden='true'
            ></span>
            <a
              className='w-full h-full overflow-hidden'
              tabIndex={activeIndex === index ? 0 : -1}
              aria-label={`查看幻灯片 ${index + 1} 的详情`}
            >
              {item.type === 'image' ?
                <>
                  <img
                    src={item.src}
                    alt={item.alt || `幻灯片 ${index + 1}`}
                    className='object-cover w-full h-full'
                    onError={() => handleMediaError(index)}
                    loading='lazy'
                  />
                  {mediaErrors[index] && (
                    <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
                      <span className='text-gray-500'>图片加载失败</span>
                    </div>
                  )}
                </>
              : <>
                  <VideoPlayer
                    src={item.src}
                    isPlay={!isPaused && activeIndex === index}
                    onError={() => handleMediaError(index)}
                  />
                  {mediaErrors[index] && (
                    <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
                      <span className='text-gray-500'>视频加载失败</span>
                    </div>
                  )}
                </>
              }
            </a>
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        {isTop && (
          <motion.div
            className={`w-full h-[30px] rounded-lg absolute bottom-[50px] lg:bottom-[200px] gap-x-[10px] gap-[30px] flex flex-col justify-center items-center z-30`}
            role='group'
            aria-label='轮播控制'
          >
            <motion.div
              transition={{
                duration: reducedMotion ? 0.8 : 1.2,
                delay: isTop ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ opacity: 0, y: 115 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 30 }}
              className={`w-full h-[30px] rounded-lg gap-x-[10px] lg:gap-x-[20px] flex justify-center items-center z-50`}
            >
              {/* Navigation Controls */}
              <div className='bg-white/200 hover:bg-black/30 hidden lg:flex transition-all rounded-full backdrop-blur-[5px]'>
                <motion.button
                  disabled={!isTop}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setDebounceTime(1000);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setDebounceTime(300);
                  }}
                  onClick={prevSlide}
                  className='bg-black/20 w-[45px] h-[45px] animate_animated animate__zoomIn flex rounded-full justify-center items-center transition-all transform duration-1000'
                  aria-label='上一张幻灯片'
                >
                  <svg
                    className='hover:fill-white rotate-180 fill-gray-200 w-[20px] h-[20px]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='8 8 20 20'
                    aria-hidden='true'
                  >
                    <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                  </svg>
                </motion.button>
              </div>
              <div className='bg-white/200 hover:bg-black/30 hidden lg:flex transition-all rounded-full backdrop-blur-[5px]'>
                <motion.button
                  disabled={!isTop}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setDebounceTime(1000);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setDebounceTime(300);
                  }}
                  onClick={nextSlide}
                  className='bg-black/20 w-[45px] h-[45px] animate_animated animate__zoomIn flex rounded-full justify-center items-center transition-all duration-1000'
                  aria-label='下一张幻灯片'
                >
                  <svg
                    className='hover:fill-white fill-gray-200 w-[20px] h-[20px]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='8 8 20 20'
                    aria-hidden='true'
                  >
                    <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                  </svg>
                </motion.button>
              </div>
              {/* Indicators */}
              <div
                className='bg-white/200 hover:bg-black/30 transition-all rounded-full backdrop-blur-[5px]'
                role='tablist'
                aria-label='幻灯片指示器'
              >
                <motion.div
                  layout
                  className='bg-black/20 p-[15px] flex rounded-full gap-x-[16px] lg:gap-x-[20px] justify-center items-center transition-all'
                >
                  {HomeCarousel.map((item, index) => (
                    <motion.button
                      key={index}
                      disabled={!isTop}
                      onClick={() => goToSlide(index)}
                      style={{ animationDelay: `${(index + 3) * 0.11}s` }}
                      className={`bg-gray-200/50 hover:bg-gray-50/50 animate_animated animate__zoomIn cursor-pointer overflow-hidden transition-all duration-500 rounded-full h-[10px] lg:h-[15px] ${index === activeIndex ? 'w-[30px] lg:w-[50px]' : 'w-[10px] lg:w-[15px]'}`}
                      role='tab'
                      aria-label={`转到幻灯片 ${index + 1}`}
                      aria-selected={index === activeIndex}
                      tabIndex={isTop ? 0 : -1}
                    >
                      {index === activeIndex && isPaused === false && (
                        <div
                          className='h-full bg-white rounded-full'
                          style={{ width: `${progress}%` }}
                          aria-hidden='true'
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
              {/* Play/Pause button */}
              <div
                className='bg-white/200 hover:bg-black/30 transition-all rounded-full backdrop-blur-[5px]'
                style={{ animationDelay: '0.45s' }}
              >
                <motion.button
                  layout
                  disabled={!isTop}
                  onClick={() => setIsPaused(!isPaused)}
                  className='bg-black/20 w-[37.5px] h-[37.5px] lg:w-[45px] lg:h-[45px] animate_animated animate__fadeIn flex rounded-full justify-center items-center transition-all ring-0 outline-none duration-1000'
                  aria-label={isPaused ? '播放轮播' : '暂停轮播'}
                  aria-pressed={!isPaused}
                >
                  <motion.svg
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      duration: reducedMotion ? 0.8 : 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`w-[22px] h-[22px] lg:w-[35px] lg:h-[35px] fill-white ${isPaused ? 'animate__rotateIn' : 'animate__rotateIn'} animate_animated transition-all ring-0 outline-none`}
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <motion.path
                      d={!isPaused ? iconVariants.playing : iconVariants.paused}
                      animate={{
                        d:
                          isPaused ? iconVariants.playing : iconVariants.paused,
                      }}
                      transition={{
                        duration: reducedMotion ? 0.8 : 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              transition={{
                duration: reducedMotion ? 0.8 : 1.2,
                delay: isTop ? 0.2 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 30 }}
              className='hidden w-full lg:flex'
            >
              <SubNav isTop={isTop} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
