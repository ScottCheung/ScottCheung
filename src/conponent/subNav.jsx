import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { hideRow,useLanguage } from '../help/helpFunction';
import data from '../Datebase.json';
import { Link } from 'react-router-dom';
const navLocation = data.Navbar.Location;

export function more() {
const lang = useLanguage();
const [isTop, setIsTop] = useState(true);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  function handleScroll() {
    if (window.scrollY < 5) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  // 注册事件监听器
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // 在组件卸载时取消事件监听器
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);  // 空数组表示该 effect 仅在组件挂载和卸载时运行


  return (
    <AnimatePresence>
    {isTop && <motion.div
    initial={{opacity: 0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{ opacity: 0,scale:0 }}
    transition={{ type: "spring", duration: 1 }}
    className={`items-center justify-center  mb-[-30px] z-50 flex px-[10%]  container flex`}>
    <motion.div
      layout
      transition={{ type: "spring", duration: 0.3 }}
      class={`w-full animate__animated flex justify-between rounded-full items-center  shadow-xl animate__slideInUp bg-white`} >
      {navLocation.map((item, index) => (

        <Link key={index} to={item.id} style={{ animationDelay: `${index * 0.17}s` }} className={`bg-white flex  w-full h-full  justify-center animate__zoomIn ${isTop ? 'text-black  ' : 'text-gray-900  '} ${index === 0 ? 'rounded-s-full' : ''} ${index === (navLocation.length - 1) ? 'rounded-e-full' : ''} animate__animated  hover:opacity-100 font-medium hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-sky-500 focus:bg-sky-900 focus:text-white :border-white `}>
          <motion.div
            layout
            key="modal"
            // style={{ borderRadius: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1 }}
            className='w-full'>
            <div className='icon  text-center  content-center  py-2 my-3'>
              {isTop ? (<i className={` flex fi justify-center  py-1 text-[15px]  ${item.logo}`}></i>) : (<></>)}
              <div className='w-full h-full flex text-center justify-center lg:text-full text-[15px]'>{!isTop ? (windowWidth > 784 && <i className={` flex fi justify-center mt-1 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] mr-2 ${item.logo}`}></i>) : (<></>)} {item.label[lang]}</div>
            </div>
          </motion.div>
        </Link>

      ))}
    </motion.div>
  </motion.div>}
  </AnimatePresence>
  );
}

export default more
