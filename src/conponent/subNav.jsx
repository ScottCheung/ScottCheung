import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hideRow, useLanguage } from "../help/helpFunction";
import data from "../Database.json";
import { Link } from "react-router-dom";
const navLocation = data.Navbar.Location;

export function more() {
  const lang = useLanguage();
  const [isTop, setIsTop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bgStyle, setBgStyle] = useState("bg-white/10 backdrop-blur-[40px]");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 1) {
        setIsTop(true);
        setTimeout(() => {
          setBgStyle("bg-white/10 backdrop-blur-[40px] ");
        }, 1000);
      } else {
        setIsTop(false);
        setBgStyle("bg-sky-900  backdrop-blur-[40px] -z-50");
      }
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // 注册事件监听器
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // 在组件卸载时取消事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 空数组表示该 effect 仅在组件挂载和卸载时运行

  return (
    <AnimatePresence>
      {isTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 600 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className={`items-center justify-center  z-30 flex md:px-[10%] mx-auto  container  `}
        >
          <motion.div
            // layout
            // transition={{ type: 'spring', duration: 0.3 }}
            className={`w-full  animate__animated flex justify-between md:rounded-full rounded-[12px] items-center  shadow-xl animate__slideInUp transition-all  ${bgStyle}`}
          >
            {navLocation.map((item, index) => (
              <a
                key={index}
                href={item.id}
                style={{ animationDelay: `${index * 0.17}s` }}
                className={` flex  w-full h-full bg-black/20  justify-center animate__zoomIn text-gray-50 ${
                  index === 0 ? "md:rounded-l-full rounded-l-[12px]" : ""
                } ${
                  index === navLocation.length - 1
                    ? "md:rounded-r-full rounded-r-[12px]"
                    : ""
                } animate__animated   font-medium bg-transparent hover:bg-sky-900 ${
                  item.color1
                } ${
                  item.color2
                }  hover:shadow-xl hover:text-white hover:backdrop-blur-[5px] overflow-hidden `}
              >
                <motion.div
                  layout
                  key="modal"
                  // style={{ borderRadius: 20 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1 }}
                  className="w-full"
                >
                  <div className="text-center content-center py-2 my-3">
                    {isTop ? (
                      <i
                        className={` flex fi justify-center  py-1 text-[15px]  ${item.logo}`}
                      ></i>
                    ) : (
                      <></>
                    )}
                    <div className="w-full h-full flex text-center justify-center lg:text-full text-[12px] md:text-[15px]">
                      {!isTop ? (
                        windowWidth > 784 && (
                          <i
                            className={` flex fi justify-center mt-1 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] mr-2 ${item.logo}`}
                          ></i>
                        )
                      ) : (
                        <></>
                      )}{" "}
                      {item.label[lang]}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default more;
