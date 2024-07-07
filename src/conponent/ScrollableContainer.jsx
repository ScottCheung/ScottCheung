import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const item = Database.Animation.Variant.WelcomeItem;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

const ScrollableContainer = ({ children, gridMode }) => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const atStart = container.scrollLeft === 0;
    const atEnd =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  };

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    const childWidth = container.firstChild?.offsetWidth || 0;
    container.scrollBy({ left: -childWidth, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const childWidth = container.firstChild?.offsetWidth || 0;
    container.scrollBy({ left: childWidth, behavior: "smooth" });
  };

  const buttonStyle =
    "group bg-black/70 group-hover:bg-black/30 backdrop-blur-[5px] w-[50px] h-[50px] animate__animated animate__zoomIn flex rounded-full justify-center items-center transition-all transform duration-300";
  const svg = "group-hover:fill-white  fill-gray-300 w-[25px] h-[25px]";
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{
          paddingInline:
            windowWidth > 1024
              ? "calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)"
              : "0",
        }}
        className={` ${
          windowWidth > 1024
            ? "flex w-full justify-end pt-[28px] px-[10px]"
            : "hidden"
        } `}
      >
        <div className=" flex items-center justify-center gap-x-[20px]">
          <button
            onClick={handleScrollLeft}
            disabled={isAtStart}
            className={buttonStyle}
            style={{
              opacity: isAtStart ? 0.2 : 1,
              cursor: isAtStart ? "" : "pointer",
            }}
          >
            <svg
              className={svg + " rotate-180"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="8 8 20 20"
            >
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            disabled={isAtEnd}
            className={buttonStyle}
            style={{
              opacity: isAtEnd ? 0.2 : 1,
              cursor: isAtEnd ? "" : "pointer",
            }}
          >
            <svg
              className={svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="8 8 20 20"
            >
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        layout
        variants={Welcomevisblecontainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-30%" }}
        style={{
          paddingInline:
            windowWidth > 1024
              ? "calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)"
              : "0",
        }}
        className={`${
          windowWidth > 1024
            ? "flex overflow-x-auto gap-[28px] overflow-hidden lg:pb-[10vh]"
            : "grid  w-full p-[20px] px-[10px]"
        }  w-full pt-[50px]  scroll-smooth  scrollbar-hide   flex-shrink-0 `}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollableContainer;
