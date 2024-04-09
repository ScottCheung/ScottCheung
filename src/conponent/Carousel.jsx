import React, { useState, useEffect, useRef } from 'react';
import CtButton from './ctButton';
import { motion, useTime, AnimatePresence } from "framer-motion";
import {useLanguage } from '../help/helpFunction';

const Carousel = ({ interval, children }) => {
  const lang = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const timeoutRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);  // 重置进度为 0
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + (100 * 10 / interval); // 根据间隔时间计算进度增量
        if (nextProgress > 100) {
          clearInterval(timer);
          return 0; // 重置进度为 0
        }
        return nextProgress;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [activeIndex, interval]); 

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };
  
  

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, interval);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [activeIndex, isPaused, interval]);
  

  return (
    <motion.div

      className="flex relative w-full h-[100vh] overflow-hidden"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex="0"
    >
      <span className='bg-black/50 w-full h-full absolute z-20'></span>
      <div className="relative object-cover z-0">
        {React.Children.map(children, (child, index) => (
          <div
            className={`carousel-slide ${
              index === activeIndex ? 'object cursor-pointer' : 'hidden'
            }`}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
        <div className='z-30'>
        <CtButton
                type={">"}
                key={"left"}
                position={"top-[50%] left-[30px]"}
                btnsize={"50px"}
                icon={"w-[16px] h-[16px] rotate-180"}
                className="z-50"
                onClick={prevSlide}
              />
              <CtButton
                type={">"}
                key={"right"}
                position={"top-[50%] right-[30px]"}
                btnsize={"50px"}
                icon={"w-[16px] h-[16px]"}
                className="z-50"
                onClick={nextSlide}
              />
        </div>

      <motion.div 
      layout
      
      className="w-full h-[30px]  rounded-lg absolute bottom-[170px] inline-flex justify-center items-center z-20  transition-all">
        <div className='w-auto flex gap-x-[20px]'>
        <motion.button 
        onMouseEnter={()=>{setIsPaused(true)}}
        onMouseLeave={()=>{setIsPaused(false)}}
              onClick={prevSlide}
              className={`bg-black/10 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__zoomIn  flex rounded-full justify-center items-center transition-all transform duration-1000`}>
                              <svg className='hover:fill-white rotate-180 fill-gray-400 w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="8 8 20 20" ><path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path></svg>
                             
              </motion.button>
              <motion.button 
onMouseEnter={()=>{setIsPaused(true)}}
onMouseLeave={()=>{setIsPaused(false)}}
                onClick={nextSlide}
              className={`bg-black/10 backdrop-blur-[5px] w-[45px] h-[45px] animate__animated animate__zoomIn  flex rounded-full justify-center items-center transition-all transform duration-1000`}>
                              <svg className='hover:fill-white fill-gray-400 w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="8 8 20 20" ><path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path></svg>
                             
              </motion.button>
        <motion.div 
        layout
        onMouseEnter={()=>{setIsPaused(true)}}
      onMouseLeave={()=>{setIsPaused(false)}}
        className='bg-black/10 p-[15px] backdrop-blur-[5px] flex rounded-full gap-x-[20px]  justify-center items-center transition-all'> 
        {React.Children.map(children, (_, index) => (
          
          <div>
            
            <div 
            onClick={() => goToSlide(index)}
            className={`bg-gray-400 hover:bg-gray-200  cursor-pointer h-[15px] overflow-hidden transition-all duration-500 rounded-full ${index === activeIndex ? 'w-[50px]' : 'w-[15px]'}`}>
             {index === activeIndex && progress >= 0 && isPaused===false&&<div
                className={`bg-white h-[15px] rounded-full`}
                style={{ width: `${progress}%` }}
              />}
            </div>
                </div>
        ))}
        
        </motion.div>
        <motion.button 
        layout
              onMouseEnter={()=>{setshowToast(true)}}
              onMouseLeave={()=>{setshowToast(false)}}
              onClick={()=>{setIsPaused(!isPaused)}}
              className={`bg-black/10 backdrop-blur-[5px] w-[45px] h-[45px]   flex rounded-full justify-center items-center transition-all transform duration-1000`}>
                              {showToast&&<motion.svg 
                              whileTap={{scale:1.1}}
                              whileHover={{scale:1.2}}
                              class={` w-[40px]  h-[40px] ${showToast? 'fill-white' : 'fill-gray-400'} ${isPaused? 'animate__zoomIn':'animate__zoomIn'} animate__animated  transition-all`} viewBox="0 0 56 56">
                                        {!isPaused&&<path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>}
                                        {isPaused&&<path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>}
                                    </motion.svg>}
                            {!showToast&&<motion.svg 
                            class={` ${isPaused? "animate__zoomIn":"animate-spin animate__slower animate__rotateIn"} animate__animated  w-[40px] h-[40px] ${showToast? 'fill-white' : 'fill-gray-400'}  transition-all`} viewBox="0 0 56 56">
                                {!isPaused&&<path className='' d="M37.3,26.7c-1,0.1-1.8,1-1.8,2c0,4.1-3.4,7.4-7.5,7.4c-4.1,0-7.4-3.4-7.4-7.5c0-4.1,3.3-7.4,7.5-7.4l0.1,0l0.2,0l0.5,0 l-2.2,2.2c-0.8,0.8-0.8,2.1,0,2.9c0.7,0.7,1.9,0.8,2.7,0.2l0.2-0.2l5.3-5.3c0.7-0.7,0.8-1.9,0.2-2.7l-0.2-0.2l-5.3-5.3 c-0.8-0.8-2.1-0.8-2.8,0c0,0,0,0,0,0c-0.7,0.7-0.8,1.9-0.1,2.7l0.1,0.2l1.4,1.4l-0.5,0c-6.4,0.2-11.3,5.6-11.1,11.9 S22,40.5,28.4,40.2c6.2-0.2,11.1-5.3,11.1-11.5c0-1-0.8-1.9-1.8-2l-0.2,0L37.3,26.7z"></path>}
                                {isPaused&&<path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>}
                            </motion.svg> }
                              {/* {showToast&&<motion.div  className='transition-all animate__animated animate__zoomIn pr-[20px] text-white '>{isPaused? ['Swith to Auto','自动轮播'][lang]:['Swith to Manual','手动切换'][lang]}</motion.div>} */}

                             
              </motion.button>
        </div>
        
              
      </motion.div>
    </motion.div>
  );
};

export default Carousel;