import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useTime, AnimatePresence } from "framer-motion";
import data from "../Database.json";
import { useAppContext } from "../help/ContextManager";
import {
  hideRow,
  bgPic,
  useLanguage,
  SelectText,
  scrollToHash,
} from "../help/helpFunction";
import LifeCate from "./lifeCategory";
import ContactCate from "./contactCategory";

import Toast from "./toast";

// import { Trans } from "@lingui/macro";

const navbarItem = data.Navbar.navbarItem;
const navLocation = data.Navbar.Location;
const updateLog = data.Navbar.UpdateLog;

function Navbar({ topTextColor, BG, ExpandElement, onHeightChange }) {
  const { Components } = useAppContext();
  const [currentVersion, setCurrentVersion] = useState(
    localStorage.getItem("Current version") || null,
  );
  const [lang, setLang] = useState(parseInt(localStorage.getItem("lang")) || 0);
  const [bgwhite, setBgwhite] = useState(false);
  const isTopTextColorWhite = topTextColor;
  const scrollTo = scrollToHash();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isShowVersion, setIsShowVersion] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);
  const currentPage = window.location.pathname;
  const isHomeOrRoot = currentPage === "/" || currentPage === "/home";
  const [selectedTab, setSelectedTab] = useState(null);
  const [ShowProfile, setShowProfile] = useState(false);
  const hideExpandElement = ExpandElement || false;
  const buttonStyles = {
    "--scrim-background-color": "rgb(66, 66, 66)",
    "--scrim-hover-background-color": "#37373a",
    "--scrim-active-background-color": "#2f2f32",
    "--icon-color": "#f7f7f7",
    "--icon-interaction-color": "rgb(255, 255, 255)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    height: "36px",
    width: "36px",
    outline: "none",
    position: "absolute",
    zIndex: 1,
    right: "20px",
    bottom: "20px",
    margin: 0,
    padding: 0,
    border: 0,
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 100ms linear, color 100ms linear",
    backgroundColor: "var(--scrim-background-color)",
    color: "var(--icon-color)",
  };
  const iconStyles = {
    fill: "currentColor",
    pointerEvents: "none",
  };

  const handleLangToggle = () => {
    const newLang = lang === 0 ? 1 : 0;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.location.reload();
  };

  useEffect(() => {
    // if (isExpanded === false) {
    //   setSelectedTab(null);
    // }
    // if (selectedTab === "Home"||"Life") {
    //   setIsExpanded(true);
    // }

    function handleScroll1() {
      if (window.scrollY < 1) {
        setIsExpanded(true);
        setIsTop(true);
      } else {
        setIsExpanded(false);
        setIsTop(false);
        setSelectedTab(null);
      }
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    let scrollTimer;
    function handleScrollStatus(event) {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (event.deltaY > 50) {
          setIsScrolling(true);
        } else if (event.deltaY < 0) {
          setIsScrolling(false);
        }
      }, []);
    }

    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("wheel", handleScrollStatus);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll1);
      window.removeEventListener("wheel", handleScrollStatus);
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded, selectedTab]);

  const navbar = (
    <AnimatePresence>
      <motion.div
        // layoutId="navbar"
        className={`z-50 transition-all duration-700 fixed  ${
          isScrolling || Components.NavBar === "hide" ? "  -top-[100px]" : "  "
        }  `}
      >
        <nav
          onMouseEnter={() => setBgwhite(true)}
          onMouseLeave={() => setBgwhite(false)}
          className={` fixed w-full flex flex-col`}
        >
          <motion.div
            onMouseLeave={() => setSelectedTab(null)}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            layout
            transition={{ duration: 0.5 }}
            className={`flex flex-col w-full ${BG} py-[10px] 
        ${
          windowWidth < 768
            ? "h-auto p-[15px] "
            : `${
                isTop
                  ? `${isHomeOrRoot ? "px-[5%] pt-[12vh] " : "pt-3"} h-auto `
                  : ""
              }  md:px-10`
        }
        ${
          isScrolling
            ? `${isTop ? "" : " backdrop-blur-[20px]"}`
            : `${
                isTop
                  ? isOpened
                    ? "backdrop-blur-[20px] "
                    : ""
                  : `backdrop-blur-[20px]  shadow-xl ${
                      bgwhite ? "bg-white/90" : "bg-white/50"
                    }`
              }`
        }`}
          >
            <div className="flex items-center justify-center w-full ">
              <div className="container lg:px-[10%] relative">
                {/* 最主要的内容 */}
                <div className="flex items-center justify-between w-full h-full ">
                  <motion.button
                    whileHover={{ scale: 1.03, transition: { duration: 1 } }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3 }}
                    data-popover-target={`version`}
                    layout
                    // onMouseEnter={() => {
                    //   setShowProfile(true);
                    // }}
                    // onMouseLeave={() => {
                    //   setShowProfile(false);
                    // }}
                    className="z-50 flex"
                  >
                    <Link
                      to="/info"
                      style={{ animationDelay: `${0.5}s` }}
                      classname="animate__animated animate__fadeInRight animate_slow"
                    >
                      <div className="flex item-center ">
                        <div className="relative flex items-center justify-center">
                          <img
                            className={`smoothchange animate__animated animate__zoomIn  ${
                              isTop ? "w-20" : "w-16"
                            }  rounded-md shadow-lg`}
                            src={
                              "https://3o.hk/images/2024/01/14/avatar.th.jpg"
                            }
                            alt="Xianzhe's Page"
                            width="100"
                            height="100"
                          ></img>
                          {currentVersion != updateLog[0].version && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 1, duration: 0.5 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className={`${
                                isTop
                                  ? "-top-3 -right-4 w-10 h-10"
                                  : "-top-3 -right-3 w-7 h-7 text-[10px]"
                              } absolute bg-sky-400 border-2 border-white dark:border-gray-800 rounded-full flex justify-center items-center text-white font-black p-2`}
                            >
                              {updateLog[0].opints[0].length}
                            </motion.span>
                          )}
                        </div>
                        {/* <span className="relative flex h-7 w-7">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
                                <span className="relative inline-flex rounded-full h-7 w-7 bg-sky-500"></span>
                              </span> */}
                        <div className="flex flex-col ml-6">
                          <motion.div
                            transition={{ duration: 0.7 }}
                            style={{ animationDelay: `${0.3}s` }}
                            className={`text-left smoothchange animate__animated animate__zoomIn  hover:animate__pulse  font-semibold ${
                              isTop
                                ? `${
                                    isTopTextColorWhite ? "text-white" : ""
                                  } mb-[10px] text-[15px]  md:mb-[8px] md:text-[17px] lg:mb-0 lg:text-[25px]`
                                : "text-xl py-2"
                            }`}
                          >
                            {data.Navbar.Avatar.Webname[lang]}
                          </motion.div>
                          <motion.div
                            transition={{ duration: 0.7 }}
                            href="/info"
                            style={{ animationDelay: `${0.5}s` }}
                            className={`smoothchange animate__animated animate__zoomIn hover:animate__pulse text-left ${
                              isTop
                                ? `${
                                    isTopTextColorWhite ? "text-white" : ""
                                  }  text-lg`
                                : "text-base"
                            }`}
                          >
                            {" "}
                            {data.Navbar.Avatar.helloword[lang]}
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.button>
                  <AnimatePresence>
                    {ShowProfile && (
                      <motion.div
                        onMouseEnter={() => {
                          setShowProfile(true);
                        }}
                        onMouseLeave={() => {
                          setShowProfile(false);
                        }}
                        layout
                        layoutId="version"
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 300 }}
                        type="popover"
                        id="version"
                        data-popover
                        transition={{ duration: 0.5 }}
                        className={`w-[500px]  absolute m-[40px] hidden   z-50  flex flex-col   `}
                      >
                        <motion.div
                          className={`p-[28px] absolute top-0 left-0 right-0 bottle-0 rounded-[20px] text-gray-500 bg-white border border-gray-200 shadow-sm  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600`}
                        >
                          <motion.div
                            layoutId="version2"
                            className={`flex space-x-4  pb-[28px]`}
                          >
                            <a
                              href="/info"
                              className="flex items-center justify-between"
                            >
                              <img
                                className="w-24 h-24 rounded-full"
                                src={
                                  "https://3o.hk/images/2024/01/14/avatar.jpg"
                                }
                              />
                              <div></div>
                            </a>
                            <div>
                              <a
                                href="/info"
                                className="text-base font-semibold leading-none text-gray-900 dark:text-white"
                              >
                                <div className="text-3xl">
                                  {lang == "0" &&
                                    "Click Avatar to know me better"}
                                  {lang == "1" && "点击头像了解更多资料"}
                                </div>
                              </a>
                              <p className="mb-3 text-sm font-normal">
                                <a
                                  href="/info"
                                  className="text-2xl duration-300 hover:underline"
                                >
                                  @Scottt1110
                                  <span class="inline-flex items-center justify-center w-7 h-7 ml-2 text-sm font-semibold text-blue-800 bg-sky-100 rounded-full dark:bg-sky-700 dark:text-sky-400">
                                    <svg
                                      class="w-6 h-6"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                                      />
                                      <path
                                        fill="#fff"
                                        d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                                      />
                                    </svg>
                                    <span class="sr-only">
                                      Icon description
                                    </span>
                                  </span>
                                </a>
                              </p>
                            </div>
                          </motion.div>

                          <div
                            class="p-4 text-sky-800 border border-sky-300 rounded-[14px] bg-sky-50 dark:bg-gray-800 dark:text-sky-400 dark:border-sky-800"
                            role="alert"
                          >
                            <div className="flex justify-between ">
                              <div class="flex items-center">
                                <svg
                                  class="flex-shrink-0 w-8 h-8 me-2"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <h3 class="text-[15px] font-medium text-sky-800">
                                  {lang == "0" && "Version ："}
                                  {lang == "1" && "版本号 ："}

                                  {updateLog[0].version}
                                </h3>
                              </div>
                              <div class="bg-gray-100 text-gray-800 text-[10px] font-medium inline-flex items-center ml-4 px-3 justify-center py-1 rounded-[14px] dark:bg-gray-700 dark:text-blue-400 border border-gray-400">
                                <svg
                                  class="w-4 h-4 me-1.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                {updateLog[0].time}
                              </div>
                            </div>
                            {/* 欢迎第一次访问 */}
                            <div class="mt-8 mb-4 text-[12px]">
                              {currentVersion == null && (
                                <>
                                  {" "}
                                  {lang == "0" &&
                                    "Welcome to visit my page first time!"}
                                  {lang == "1" && "感谢您第一次访问我的网页！"}
                                </>
                              )}
                            </div>
                            {/* 消息 */}
                            <div class="mt-8 mb-4 text-[12px]">
                              {updateLog[0].content[lang]}
                            </div>
                            <ul
                              role="list"
                              class="marker:text-sky-700 list-disc pl-5 space-y-3 text-sky-700 text-[12px]"
                            >
                              {updateLog[0].opints[lang].map((item, index) => (
                                <li>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div class="flex text-[15px] pt-[28px] space-x-4">
                            <button
                              onClick={() => {
                                Toast(
                                  "attention",
                                  lang == 0
                                    ? "Sorry, you are not owner of this website, you can not get access to the fully database at present."
                                    : "抱歉，您不是管理者，您暂时无法访问所有数据库。",
                                  10000,
                                );
                              }}
                              type="button"
                              class="text-white bg-sky-800 hover:bg-sky-900 focus:ring-2 focus:outline-none focus:ring-sky-300 font-medium rounded-[12px] px-6 py-3 me-2 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                            >
                              <svg
                                class="me-4 h-6 w-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 14"
                              >
                                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                              </svg>

                              {lang == "0" && "View more"}
                              {lang == "1" && "展示更多"}
                            </button>
                            <button
                              onClick={() => {
                                setIsShowVersion(!isShowVersion);
                                setShowProfile(false);
                                setCurrentVersion(updateLog[0].version);
                                localStorage.setItem(
                                  "Current version",
                                  updateLog[0].version,
                                );
                              }}
                              type="button"
                              class="text-sky-800 bg-transparent border border-sky-800 hover:bg-sky-900 hover:text-white focus:ring-2 focus:outline-none focus:ring-sky-300 font-medium rounded-[12px] px-6 py-3 text-center dark:hover:bg-sky-600 dark:border-sky-600 dark:text-sky-400 dark:hover:text-white dark:focus:ring-sky-800"
                              data-dismiss-target="#alert-additional-content-3"
                              aria-label="Close"
                            >
                              {lang == "0" && "I know"}
                              {lang == "1" && "我知道了"}
                            </button>
                          </div>
                        </motion.div>
                        <div data-popper-arrow></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    layout
                    className={`flex items-center h-full ${
                      windowWidth < 876 ? "w-[30%]" : "w-[70%]"
                    } gap-[30px] justify-end `}
                  >
                    <AnimatePresence className="flex">
                      {windowWidth > 876 && (
                        <motion.div
                          layout
                          key="navbarItem"
                          transition={{ duration: 0.3 }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                            x: -100,
                            transition: { duration: 1 },
                          }}
                          className="flex overflow-hidden "
                          // style={{
                          //   mask: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
                          //   WebkitMaskImage:
                          //     'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
                          // }}
                        >
                          {navbarItem.map((item, index) => (
                            <motion.button
                              layout
                              key={item.name}
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.7 },
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => {
                                document.documentElement.style.zoom = 1;
                              }}
                              onMouseEnter={() => setSelectedTab(item.name[0])}
                            >
                              <Link
                                to={item.href}
                                key={index}
                                style={{
                                  animationDelay: `${index * 0.2}s`,
                                }}
                                data-popover-target={`nav-des-${item.name[0]}`}
                                type="button"
                                className={`rounded-[5px] smoothchange items-center  ${
                                  isTop
                                    ? `${
                                        index === navbarItem.length - 1
                                          ? `ml-4`
                                          : `mx-4`
                                      }`
                                    : ` ${
                                        index === navbarItem.length - 1
                                          ? `ml-1`
                                          : `mx-1`
                                      }`
                                } animate__animated animate__fadeInUp relative inline-flex items-center  px-6 py-3 text-[20px] font-medium text-center ${
                                  isTopTextColorWhite & isTop
                                    ? "text-white"
                                    : ""
                                } rounded-lg hover:bg-gray-900/20  `}
                              >
                                <div className="items-center mr-3 w-11 h-11">
                                  <div className="flex-shrink-0">
                                    <i
                                      className={`${
                                        isTopTextColorWhite & isTop
                                          ? "text-white text-[20px]"
                                          : "text-gray-900 text-[17px]"
                                      }  fi ${item.icon} `}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className={`${
                                    isTopTextColorWhite & isTop
                                      ? "text-white text-[20px]"
                                      : "text-gray-900 text-[15px]"
                                  } md:hidden lg:flex `}
                                >
                                  {item.name[lang]}
                                </div>
                              </Link>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* 切换语言按钮 */}
                    {
                      <motion.button
                        key={"language"}
                        whileHover={
                          isTop
                            ? { scale: 1.1, transition: { duration: 0.7 } }
                            : { scale: 1.1, transition: { duration: 0.7 } }
                        }
                        whileTap={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        data-popover-target="lang"
                        style={{
                          animationDelay: `${(navbarItem.length + 1) * 0.2}s`,
                        }}
                        className="animate__animated animate__fadeInUp"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLangToggle();
                        }}
                      >
                        <span
                          className={`${
                            windowWidth < 768 ? "" : ""
                          } ExpandButton`}
                        >
                          <i
                            className={` mt-3 fi fi-rr-globe ${
                              isTopTextColorWhite & isTop
                                ? "text-white text-[20px]"
                                : "text-gray-900 text-[17px]"
                            } `}
                          />
                        </span>
                      </motion.button>
                    }
                    {/* 切换语言按钮提示 */}
                    <div
                      data-popover
                      role="tooltip"
                      className="absolute z-10 invisible justify-center flex w-auto text-gray-500 text-center transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                    >
                      <div className="flex flex-col items-center px-6 py-4">
                        <span className="text-center text-[15px] font-semibold">
                          {lang == 0 && "点击切换中文"}
                          {lang == 1 && "Switch to English"}
                        </span>
                        <span className="text-[14px] text-center font-semibold">
                          {lang == 1 && "点击切换英文"}
                          {lang == 0 && "Switch to Chinese"}
                        </span>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                    {/* 主页下拉菜单 */}
                    {windowWidth > 1024 && !isTop && (
                      <motion.button
                        initial={{ rotate: 180 }}
                        whileHover={
                          isExpanded
                            ? { scale: 1.1, rotate: 360 }
                            : { scale: 1.1, rotate: 540 }
                        }
                        animate={isExpanded ? { rotate: 0 } : { rotate: 180 }}
                        whileTap={{ scale: 0.8 }}
                        // transition={{ duration: 0.3 }}
                        type="button"
                        layout
                        onClick={(e) =>
                          e.preventDefault() &
                          setIsExpanded(!isExpanded) &
                          (isTop && setIsOpened(!isOpened))
                        }
                      >
                        <span
                          className={`${
                            windowWidth < 768 ? "mx-5" : "hover:bg-gray-900/10"
                          } ExpandButton `}
                        >
                          <i
                            style={{
                              animationDelay: isTop
                                ? `${(navbarItem.length + 2) * 0.2}s`
                                : null,
                            }}
                            className={`animate__animated animate__fadeInUp smoothchange mt-1 ${
                              windowWidth < 768
                                ? "text-[20px] "
                                : "text-3xl p-5"
                            } ${
                              isTop ? "text-white text-bold" : ""
                            } fi fi-br-angle-up`}
                          />
                        </span>
                      </motion.button>
                    )}
                    {/* 下拉菜单按钮 */}
                    {windowWidth < 1024 && (
                      <button
                        style={{
                          animationDelay: `${navbarItem.length * 0.2}s`,
                        }}
                        type="button"
                        className={`mx-[10px] transition-none animate__animated animate__fadeInUp `}
                        onClick={(e) =>
                          e.preventDefault() &
                          setIsOpened(!isOpened) &
                          (isTop && setIsExpanded(!isExpanded))
                        }
                      >
                        <motion.svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          transition={{ duration: 0.5 }}
                          style={{
                            color: isTop
                              ? "fill-white text-bold"
                              : "fill-gray-700 ",
                          }}
                        >
                          <motion.polyline
                            fill={isTop ? "white" : "gray"}
                            stroke={isTop ? "white" : "currentColor"}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="2 12, 16 12"
                            animate={{
                              points: !isOpened
                                ? "2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                                : "3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12",
                            }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.polyline
                            fill={isTop ? "white" : "gray"}
                            stroke={isTop ? "white" : "currentColor"}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="2 5, 16 5"
                            animate={{
                              points: !isOpened
                                ? "2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                                : "3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5",
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.svg>
                      </button>
                    )}
                  </motion.div>
                </div>
                {/* menu button */}
                {windowWidth <= 1024 && isOpened && (
                  <div className={`w-full mx-[10px]`}>
                    <div className="z-20 w-full rounded-lg shadow "></div>
                    <div
                      className={`rounded-2xl pt-[30px] ${isTop ? " " : ""}`}
                    >
                      {navbarItem.map((item, index) => (
                        <AnimatePresence>
                          <motion.div
                            layout
                            key={item.name}
                            exit={{
                              opacity: 0,
                              scale: 0,
                              transition: { duration: 0.7 },
                            }}
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                          >
                            <a
                              style={{ animationDelay: `${index * 0.2}s` }}
                              key={index}
                              href={item.href}
                              className={`flex py-5 animate__animated animate__zoomIn  place-items-center items-center px-4 ${
                                isTop
                                  ? "hover:bg-gray-900/50 rounded-l-full"
                                  : "hover:bg-gray-300/50 rounded-l-full "
                              }`}
                            >
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-24 h-24 rounded-full">
                                  <i
                                    className={`${
                                      isTopTextColorWhite & isTop
                                        ? "text-white"
                                        : "text-gray-900"
                                    } text-5xl fi ${item.icon}`}
                                  ></i>
                                </div>
                              </div>
                              <div className="w-full ps-2">
                                <div
                                  className={`${
                                    isTopTextColorWhite & isTop
                                      ? "text-white"
                                      : "text-gray-900"
                                  } font-bold text-4xl`}
                                >
                                  {item.name[lang]}
                                </div>
                                <div
                                  className={`${
                                    isTopTextColorWhite & isTop
                                      ? "text-white"
                                      : "text-gray-900"
                                  } text-xs text-blue-500 `}
                                >
                                  {item.des[lang]}
                                </div>
                              </div>
                            </a>
                          </motion.div>
                        </AnimatePresence>
                      ))}
                    </div>
                  </div>
                )}

                {/* 二级NavbarLocation */}
                {(selectedTab == "Home" || isExpanded == true) && (
                  <motion.div
                    onMouseLeave={() => setSelectedTab(null)}
                    key={"isExpanded"}
                    layoutId="isExp"
                    // transition={{ type: 'spring', duration: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={`w-full my-[20px] ${
                      !isExpanded && !selectedTab == "Home"
                        ? "hidden items-center justify-center"
                        : ` items-center justify-center ${
                            isTop ? "hidden" : ""
                          }  `
                    }`}
                  >
                    <motion.div
                      className={`w-full animate__animated   justify-between flex rounded-full items-center ${
                        isExpanded ? "my-8" : ``
                      }  ${
                        isTop
                          ? "backdrop-blur-md bg-white/50 shadow-xl animate__slideInUp"
                          : `border divide-x  border-gray-900  divide-gray-900 animate__zoomIn`
                      }`}
                    >
                      {navLocation.map((item, index) => (
                        <a
                          key={index}
                          href={item.id}
                          style={{ animationDelay: `${index * 0.17}s` }}
                          className={`flex  w-full h-full  justify-center animate__zoomIn ${
                            isTop ? "text-black  " : "text-gray-900  "
                          } ${index === 0 ? "rounded-s-full" : ""} ${
                            index === navLocation.length - 1
                              ? "rounded-e-full"
                              : ""
                          } animate__animated  opacity-80 hover:opacity-100 font-medium hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-sky-500 focus:bg-sky-900 focus:text-white :border-white `}
                        >
                          <motion.div
                            layout
                            style={{ borderRadius: 20 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            whileFocus={{ scale: 1 }}
                            className="w-full"
                          >
                            <div className="content-center py-2 my-3 text-center icon">
                              {isTop ? (
                                <i
                                  className={` flex fi justify-center  py-1 text-[15px]  ${item.logo}`}
                                ></i>
                              ) : (
                                <></>
                              )}
                              <div className="w-full h-full flex text-center justify-center lg:text-full text-[15px]">
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
                {/* lifeCategory */}
                {selectedTab == "Life" && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                    layout
                    layoutId="isExp"
                    onMouseLeave={() => setSelectedTab(null)}
                    className={`${
                      isTop ? "backdrop-blur-md bg-white/70" : " bg-sky-200/20 "
                    } rounded-[28px]  `}
                  >
                    <LifeCate />
                  </motion.div>
                )}
                {selectedTab == "Contact" && (
                  <motion.div
                    layout
                    layoutId="isExp"
                    onMouseLeave={() => setSelectedTab(null)}
                    className={`${
                      isTop
                        ? "backdrop-blur-md bg-white/70 "
                        : " bg-sky-200/30 "
                    } ${
                      isTopTextColorWhite & isTop ? "text-sky-950" : ""
                    }   rounded-[14px]  `}
                  >
                    <ContactCate />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          <motion.div layout children="container flex ">
            {navbarItem.map(
              (item, index) =>
                selectedTab == item.name[0] && (
                  <motion.div
                    key={item.name[0] + index + "introduction"}
                    className="md:mx-[10%] mt-[30px] flex flex-col gap-1 my-[5px] transition-all duration-200 "
                  >
                    <div className="bg-sky-900 flex rounded-e-[28px] rounded-es-[28px] max-w-[320px] overflow-hidden  backdrop-blur-[20px] ">
                      <div className="p-[28px] flex rounded-e-[28px] rounded-es-[28px] flex-col w-full  leading-1.5    dark:bg-gray-700/20">
                        <p className="text-[25px] font-normal dark:text-gray-900 text-white  ">
                          {item.des[lang]}
                        </p>
                        <span className="text-center text-[30px] dark:text-gray-900 text-white ">
                          {item.expression}{" "}
                        </span>
                        <div className="group relative my-2.5 hidden">
                          <div className="absolute flex items-center justify-center w-full h-full transition-opacity duration-300 rounded-lg opacity-0 bg-gray-900/50 group-hover:opacity-100">
                            <button
                              data-tooltip-target="download-image"
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                            >
                              <svg
                                className="w-5 h-5 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                />
                              </svg>
                            </button>
                          </div>
                          <img
                            src="/docs/images/blog/image-1.jpg"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </motion.div>
        </nav>
      </motion.div>
      {/* toTop buttom */}
      {!isTop && Components.NavBar === "visible" && (
        <motion.button
          key="toTop"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.55, type: "easeInOut" },
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.7 }}
          whileTap={{ scale: 0.9, opacity: 1 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          onClick={() => window.scrollTo(0, 0)}
          className={` anz-card-modal-link fixed bottom-10 lg:right-20 right-10 z-50 drop-shadow-2xl `}
        >
          <div className="px-4 py-2 text-white rounded-full card-modal-trigger modal-trigger card-cta-modal-button lg:scale-150">
            <div className="modal-trigger-visblecontainer ">
              <motion.span
                initial={{ rotate: 90 }}
                whileTap={{ scale: 0.9, opacity: 0.8, rotate: 270 }}
                className="bg-white shadow-xl opacity-70 card-cta-modal-button-icon hover:opacity-100 drop-shadow-md "
                style={buttonStyles}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="8 8 20 20"
                  style={iconStyles}
                  className="card-cta-modal-button-small-icon card-modal-button-small-icon w-[18px] h-[18px] text-white rotate-180"
                >
                  <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                </svg>
              </motion.span>
            </div>
          </div>
        </motion.button>
      )}
      <div className="relative z-50 ">
        <div
          id="toast-root"
          className="fixed flex flex-col top-40 right-20 "
        ></div>
      </div>
      <AnimatePresence>
        {selectedTab !== null && !isTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            // transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 z-40 w-full h-full backdrop-blur-[20px] bg-black/40"
          ></motion.div>
        )}
      </AnimatePresence>{" "}
    </AnimatePresence>
  );

  return navbar;
}

export default Navbar;
