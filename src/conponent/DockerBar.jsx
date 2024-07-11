import React, { Fragment, useEffect, useState, useRef, navigate } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../help/ContextManager";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import N from "./Num";
import Toast from "./toast";
import { useLanguage } from "../help/helpFunction";

function DockerBar(props) {
  const lang = useLanguage();
  const laptopMode = window.innerWidth > 1024;
  const [hidebutton, setHidebutton] = useState(false);
  const navigate = useNavigate();
  const cancelButtonRef = useRef(null);
  const { ResumeView, setResumeView, setComponents } = useAppContext();
  const [DockerBarPosition, setDockerBarPosition] = useState("center");
  const [isColorPanelOpen, setIsColorPanelOpen] = useState(laptopMode);
  const [isColorDepthPanelOpen, setIsColorDepthPanelOpen] = useState(false);
  const EmphasizeColorLists = [
    "red",
    "orange",
    "yellow",
    "lime",
    "sky",
    "blue",
    "purple",
  ];

  const shortcuts = [
    {
      key: "D",
      description: "open / close this colorDepth panel.",
    },
    {
      key: "C",
      description: "open / close the color panel.",
    },
    {
      key: "V",
      description: "hide / show the DockerBar.",
    },
    {
      key: "L",
      description: "zoom in the view.",
    },
    {
      key: "S",
      description: "zoom out the view.",
    },
  ];

  const Tools = [
    {
      name: "Home",
      icon: "fi fi-sr-home pt-[5px] ",
      onClick: () => {
        (document.documentElement.style.zoom = 1),
          navigate("/"),
          setComponents((prevComponents) => ({
            ...prevComponents,
            NavBar: "visible",
          }));
      },
    },

    {
      name: "Setting (D)",
      icon: "fi fi-ss-settings pt-[5px] D",
      onClick: () => {
        setIsColorDepthPanelOpen(!isColorDepthPanelOpen);
        setCurrentIndex(-99);
        handleButtonClick(".V");
      },
    },
    {
      name: "Color Picker (C)",
      icon: "fi fi-rr-palette pt-[5px] C",
      onClick: () => {
        setIsColorPanelOpen(!isColorPanelOpen);
        setCurrentIndex(-99);
      },
    },
    {
      name: "Zoom In (L)",
      icon: "fi fi-rr-zoom-in pt-[5px] L",
      onClick: () =>
        (document.documentElement.style.zoom =
          parseFloat(document.documentElement.style.zoom || "1") + 0.1),
    },
    {
      name: "Zoom Out (S)",
      icon: "fi fi-rr-zoom-out pt-[5px] S",
      onClick: () =>
        (document.documentElement.style.zoom =
          parseFloat(document.documentElement.style.zoom || "1") - 0.1),
    },
    {
      name: "Download",
      icon: "fi fi-sr-disk pt-[5px] ",
      onClick: () => {
        const link = document.createElement("a");
        link.href = `https://github.com/Xianzhezhang97/CV/raw/main/CV%20%7C%20Scott%20Cheung%20%7C%20${EmphasizeColorLists[ResumeView.forceColor]}.pdf`;
        link.download = "Xianzhe's CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Toast(
          "success",
          `you have added ${type.type[0]} info into your clipboard`,
          3000,
        );
      },
    },
    {
      name: "Tool Visibility ( V )",
      icon: "fi fi-br-cross pt-[5px] V",
      onClick: () => {
        if (DockerBarPosition === "hide") {
          setDockerBarPosition("center");
          setComponents((prevComponents) => ({
            ...prevComponents,
            NavBar: "visible",
          }));
        } else if (laptopMode) {
          setDockerBarPosition("hide");
          setComponents((prevComponents) => ({
            ...prevComponents,
            NavBar: "hide",
          }));
        } else {
          setHidebutton(!hidebutton);
          setDockerBarPosition("right");
          setComponents((prevComponents) => ({
            ...prevComponents,
            NavBar: "hide",
          }));
        }
      },
    },
  ];
  useEffect(() => {
    const handleKeyDown = (event) => {
      // 根据按下的键执行相应的操作
      switch (event.keyCode) {
        case 86:
          handleButtonClick(".V");
          break;
        case 67:
          handleButtonClick(".C");
          break;
        case 68:
          handleButtonClick(".D");
          break;
        case 76:
          handleButtonClick(".L");
          break;
        case 83:
          handleButtonClick(".S");
          break;
        default:
          break;
      }
    };

    // 添加事件监听器
    window.addEventListener("keydown", handleKeyDown);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleButtonClick = (selector) => {
    // 找到对应的按钮元素
    const button = document.querySelector(selector);
    // 如果按钮存在，则模拟点击
    if (button) {
      button.click();
      console.log("Button clicked");
    }
  };

  const handleClick = (position) => {
    setDockerBarPosition(position);
    console.log("Button clicked");
  };

  const [currentIndex, setCurrentIndex] = useState(-99);
  const [hasEntered, setHasEntered] = useState(0);

  // ===== Animation Feature of DockerBar Component =====
  // === Please do not modify the following numbers without Xianzhe‘s permission ===
  const Distance = (currentIndex, index) => {
    return Math.abs(currentIndex - index);
  };
  const InitialOpacity = 1.5;
  const baseOpacity = 0.5;
  const OpacityFadeFeature = 0.5;
  const InitialMargin = 20;
  const MarginFadeFeature = 4;
  const baseMargin = 0;
  const InitialY = 45;
  const baseY = 0;
  const YFadeFeature = 15;
  const ScaleFadeFeature = 0.3;
  const BaseScale = 1;
  const InitialScale = 1.7;
  const AnimationDelay = 0.06;

  // === Animation Feature of DockerBar Component ===
  // === Please do not modify the following numbers without Xianzhe‘s permission ===
  const dockerbarContainer =
    "inline-flex justify-center items-center bg-gray-200/95 darrk:bg-gray-600/80 backdrop-blur-[25px]   rounded-[20px] ";
  const DockerButtonStyle =
    "flex transition-all duration-50 justify-center items-center w-[45px] h-[45px]   bg-gray-400  darrk:bg-gray-100/50  backdrop-blur-[5px] rounded-[10px] ";
  const PanelButtonStyle =
    "flex transition-all duration-50 justify-center items-center w-[45px] h-[45px]  bg-gray-200 overflow-hidden    darrk:bg-gray-100/50  backdrop-blur-[5px] rounded-[10px] ";
  const iconStyle = "text-[20px] text-center text-gray-700 darrk:text-gray-500";

  const Keyboard =
    "flex p-[10px] justify-center items-center  w-[40px] h-[40px] text-[12px] font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg darrk:bg-gray-600 darrk:text-gray-100 darrk:border-gray-500 ";

  const settingModal = isColorDepthPanelOpen && (
    <Transition.Root show={isColorDepthPanelOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={() => {
          setIsColorDepthPanelOpen(false);
          handleButtonClick(".V");
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity backdrop-blur-[20px]" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen scrollbar-hide">
          <div className="flex items-start justify-center w-full min-h-full p-4 text-center md:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-500"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
            >
              <Dialog.Panel className="animate__animated animate__zoomIn relative transform overflow-hidden rounded-[28px] bg-white text-left shadow-xl transition-all my-8 w-full  md:max-w-[800px]">
                <div className=" p-[14px] md:p-[40px]">
                  <div className="flex items-start">
                    <div className="text-center sm:ml-4 sm:mt-0 md:text-left w-full max-h-[100vh] overflow-y-auto">
                      <div className="flex justify-between w-full ">
                        <Dialog.Title
                          as="h3"
                          className="text-[20px] md:text-[25px] font-[400] text-gray-900"
                        >
                          Setting and Instruction
                        </Dialog.Title>

                        <button
                          className="D p-[7px] flex justify-center items-center rounded-full w-[30px] h-[30px] bg-gray-200 darrk:bg-gray-800/50 hover:bg-gray-300 darrk:hover:bg-gray-700 transition-all duration-300"
                          onClick={() => {
                            setIsColorDepthPanelOpen(false);
                            handleButtonClick(".V");
                          }}
                        >
                          <i className="fi fi-rr-cross pt-[5px]"></i>{" "}
                        </button>
                      </div>

                      <div className="mt-8 ">
                        <div className="flex justify-between w-full ">
                          <label
                            htmlFor="steps-range"
                            className="block mb-2 text-[20px] font-medium text-gray-900 darrk:text-white "
                          >
                            Emphasize Color
                          </label>
                          <label
                            htmlFor="steps-range"
                            className={`block mb-2 text-[20px] font-medium text-${
                              EmphasizeColorLists[ResumeView.forceColor]
                            }-${
                              ResumeView.colorDepth
                            } transition-all duration-1000`}
                          >
                            <div className="bg-black rounded-full w-14"></div>
                            {EmphasizeColorLists[ResumeView.forceColor]}
                          </label>
                        </div>
                        <p className="text-[20px] text-left text-gray-500">
                          Choose the color you like to emphasize and adjust
                        </p>
                        {/* Color Panel */}
                        <div className="grid gap-[20px] grid-cols-7 py-[20px]">
                          {EmphasizeColorLists.map((label, index) => (
                            <motion.div
                              key={index + Tools.length}
                              onClick={() => {
                                setResumeView({
                                  ...ResumeView,
                                  forceColor: index,
                                });
                                // setIsColorDepthPanelOpen(false);
                              }}
                              className={`flex flex-col justify-center items-center transition-all duration-50 `}
                            >
                              <motion.div
                                style={{
                                  animationDelay: ` ${index * AnimationDelay}s`,
                                }}
                                className={`${
                                  hasEntered === 0
                                    ? "animate__animated animate__fadeInUp"
                                    : ""
                                } ${PanelButtonStyle} 
                                transition-all duration-50
                                
                                `}
                              >
                                <motion.div
                                  layout
                                  className={` ${
                                    EmphasizeColorLists[
                                      ResumeView.forceColor
                                    ] === label
                                      ? ` w-[45px] h-[45px] rounded-[10px]`
                                      : `w-[30px] h-[30px] rounded-full`
                                  }    cursor-pointer  text-gray-500 darrk:text-white  bg-${label}-${ResumeView.colorDepth} darrk:bg-${label}-900/50`}
                                ></motion.div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                        <>
                          <div className="flex justify-between w-full ">
                            <label
                              htmlFor="steps-range"
                              className=" mb-2 text-[20px] font-medium block text-gray-900 darrk:text-white"
                            >
                              Color Depth
                            </label>
                            <label
                              htmlFor="steps-range"
                              className=" mb-2 text-[20px] block font-medium text-gray-900 darrk:text-white"
                            >
                              <N n={ResumeView.colorDepth} d={1} />
                            </label>
                          </div>
                          <p className="text-[20px] text-left text-gray-500">
                            Choose the color depth you like, higher colorDepth
                            is more visiible for high performance display.
                          </p>

                          <motion.input
                            layout
                            whileTap={{
                              borderRadius: "10px",
                              height: "30px",
                            }}
                            type="range"
                            min={100}
                            max={900}
                            defaultValue={ResumeView.colorDepth}
                            onChange={(e) => {
                              e.preventDefault();
                              setResumeView({
                                ...ResumeView,
                                colorDepth: e.target.value,
                              });
                            }}
                            step="100"
                            className="w-full h-8 bg-gray-200 appearance-none cursor-pointer darrk:bg-gray-700 my-[20px] rounded-full overflow-hidden"
                          />
                        </>
                        <div className="flex flex-wrap items-center justify-start md:justify-between">
                          <p className="flex text-left">
                            Your Final Color is{" "}
                            {" " +
                              EmphasizeColorLists[ResumeView.forceColor] +
                              " "}
                            with color depth
                            {" " + ResumeView.colorDepth + " "}, Enjoy! When you
                            download or read the PDF, the color will be applied
                            to the PDF. Be like:
                          </p>

                          <p
                            className={`text-${
                              EmphasizeColorLists[ResumeView.forceColor]
                            }-${ResumeView.colorDepth} font-black text-[25px]`}
                          >
                            Emphasize Color
                          </p>
                        </div>

                        {laptopMode && (
                          <div className="mt-[40px]">
                            <p className="text-[20px] text-left text-gray-500">
                              Here are some convenient keyboard shortcuts for
                              you to control dockerbar and the view settings.
                            </p>
                            <div className="grid grid-cols-2 text-left gap-y-[30px] my-[20px] ">
                              {shortcuts.map((shortcut, index) => (
                                <div key={index} className="flex gap-x-[30px]">
                                  <div className="flex-0">
                                    <kbd className={Keyboard}>
                                      {shortcut.key}
                                    </kbd>
                                  </div>
                                  <p>
                                    Press the key{" "}
                                    <span className="font-bold">
                                      {shortcut.key}
                                    </span>{" "}
                                    to {shortcut.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );

  const DockerBar = (
    <AnimatePresence>
      <motion.div
        layout
        onMouseEnter={() => setHasEntered(true)}
        onMouseLeave={() => {
          setCurrentIndex(-99);
          setHasEntered(false);
        }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1.2 } }}
        exit={{ y: 30, opacity: 0, transition: { duration: 0.3 } }}
        className={`flex  justify-center items-center fixed z-40  
      ${
        DockerBarPosition === "left" &&
        " left-[50px] right-[400px]  bottom-[45px] "
      }
      ${DockerBarPosition === "center" && " left-0 right-0  bottom-[45px] "}
      ${
        DockerBarPosition === "right" &&
        " left-[400px] right-[50px]  bottom-[45px] "
      }
      ${
        DockerBarPosition === "hide" &&
        "scale-0 left-0 right-0 -bottom-[100px] opacity-0"
      }
      }   `}
      >
        <motion.div
          layout
          onClick={() => {
            if (hidebutton) {
              setHidebutton(false);
              if (DockerBarPosition !== "center") {
                setDockerBarPosition("center");
                setComponents((prevComponents) => ({
                  ...prevComponents,
                  NavBar: "visible",
                }));
              }
            }
          }}
          transition={{ duration: 0.7 }}
          className={` ${dockerbarContainer}  ${
            currentIndex === -99
              ? `px-[7.5px]   ${
                  DockerBarPosition === "center"
                    ? "h-[70px]"
                    : "h-[40px] flex items-center justify-center opacity-40"
                }`
              : `h-[80px]  px-[20px] rounded-full `
          }`}
        >
          <motion.div
            layout
            className="inline-flex items-center justify-center"
          >
            {/* Tools */}
            <AnimatePresence>
              <motion.div
                layout
                exit={{ width: 0 }}
                className="inline-flex items-center justify-center "
              >
                {!hidebutton &&
                  Tools.map((tool, index) => {
                    return (
                      <motion.div
                        key={tool.name}
                        className={
                          "flex  flex-col justify-center items-center transition-all duration-50 " +
                          (!laptopMode && tool.name === "Color Picker (C)"
                            ? " hidden"
                            : "")
                        }
                      >
                        <motion.div
                          layout
                          exit={{ width: 0 }}
                          style={{
                            animationDelay: ` ${
                              hasEntered === 0
                                ? `${index * AnimationDelay}s`
                                : undefined
                            }`,
                          }}
                          onMouseEnter={() => setCurrentIndex(index)}
                          className={`p-[7.5px] ${
                            hasEntered === 0
                              ? "animate__animated animate__fadeInUp"
                              : ""
                          } `}
                        >
                          <motion.div
                            onClick={tool.onClick}
                            whileTap={{
                              backgroundColor: "rgba(100, 100, 100, 0.4)",
                              backdropFilter: "blur(5px)",
                              transition: { duration: 0.3 },
                            }}
                            style={{
                              zIndex:
                                laptopMode && currentIndex === index ? 50 : 10,
                              scale:
                                laptopMode &&
                                Math.max(
                                  InitialScale -
                                    Distance(currentIndex, index) *
                                      ScaleFadeFeature,
                                  BaseScale,
                                ),
                              boxShadow:
                                laptopMode && currentIndex === index
                                  ? "0px 0px 20px 0px rgba(0,0,0,0.1)"
                                  : "0px 0px 0px 0px rgba(0,0,0,0)",
                              y:
                                laptopMode &&
                                -Math.max(
                                  InitialY -
                                    Distance(currentIndex, index) *
                                      YFadeFeature,
                                  baseY,
                                ),
                              margin:
                                laptopMode &&
                                Math.max(
                                  InitialMargin -
                                    Distance(currentIndex, index) *
                                      MarginFadeFeature,
                                  baseMargin,
                                ),
                              opacity:
                                laptopMode &&
                                Math.max(
                                  InitialOpacity -
                                    Distance(currentIndex, index) *
                                      OpacityFadeFeature,
                                  baseOpacity,
                                ),
                            }}
                            className={`cursor-pointer flex transition-all duration-50 justify-center items-center ${DockerButtonStyle} `}
                          >
                            {tool.icon && (
                              <i className={`${iconStyle} ${tool.icon}`}></i>
                            )}
                            {tool.img && (
                              <motion.div
                                layoutId="Query"
                                layout="position"
                                className={`p-[7px] bg-gray-900/10  darrk:bg-gray-100/50 backdrop-blur-[5px]   w-full h-full  flex justify-center items-center rounded-[10px]`}
                              >
                                <motion.img
                                  layoutId="QueryComponentCaptureAnimation"
                                  layout
                                  className="darrk:invert"
                                  src={tool.img}
                                ></motion.img>
                              </motion.div>
                            )}
                          </motion.div>
                        </motion.div>
                        {tool.name === "Color Picker (C)" &&
                          isColorPanelOpen &&
                          laptopMode && (
                            <motion.span
                              layout
                              className={`bg-${
                                EmphasizeColorLists[ResumeView.forceColor]
                              }-${
                                ResumeView.colorDepth
                              } w-[20px] h-[3px] rounded-full animate-pulse `}
                            ></motion.span>
                          )}

                        {currentIndex === index && laptopMode && (
                          <AnimatePresence>
                            <motion.div
                              layout
                              key={tool.name + "-label"}
                              initial={{ opacity: 0, y: -40, scale: 0 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.31 },
                              }}
                              exit={{
                                opacity: 0,
                                y: -15,
                                scale: 0,
                                transition: { duration: 0.3 },
                              }}
                              id={tool.name}
                              className="flex z-10 -mt-[53px]  px-[7px] py-[2px] text-[12px] font-medium text-white bg-gray-900/60 rounded-full shadow-lg darrk:bg-gray-700"
                            >
                              {tool.name}
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </motion.div>
                    );
                  })}
                {hidebutton && (
                  <div className="w-[20px] h-[20px] p-[10px] flex justify-center items-center">
                    <i className="fi fi-rr-eye"></i>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            {/* division */}
            <AnimatePresence>
              {isColorPanelOpen && laptopMode && (
                <motion.div
                  layout
                  onMouseEnter={() => setCurrentIndex(Tools.length + 1)}
                  style={{
                    zIndex: currentIndex === Tools.length + 1 ? 50 : 40,
                    scaleY: Math.max(
                      InitialScale -
                        Distance(currentIndex, Tools.length + 1) * InitialScale,
                      BaseScale,
                    ),
                    animationDelay: ` ${
                      hasEntered === 0
                        ? `${(Tools.length + 1) * AnimationDelay}s`
                        : undefined
                    }`,
                  }}
                  className={`${
                    hasEntered === 0
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  } w-[2px] h-[35px] border-[1px] darrk:border-gray-500  border-gray-300 mx-[10px] transition-all duration-50`}
                ></motion.div>
              )}
            </AnimatePresence>
            {/* Label */}

            {isColorPanelOpen &&
              laptopMode &&
              EmphasizeColorLists.map((label, index) => (
                <motion.div
                  onMouseEnter={() => setCurrentIndex(index + Tools.length)}
                  key={index + Tools.length}
                  onClick={() =>
                    setResumeView({
                      ...ResumeView,
                      forceColor: index,
                    })
                  }
                  className="flex flex-col items-center justify-center transition-all duration-50"
                >
                  <motion.div
                    layout
                    style={{
                      animationDelay: ` ${
                        hasEntered === 0
                          ? `${(index + Tools.length) * AnimationDelay}s`
                          : undefined
                      }`,
                    }}
                    className={`p-[7.5px] ${
                      hasEntered === 0
                        ? "animate__animated animate__fadeInUp"
                        : ""
                    } `}
                  >
                    <motion.div
                      draggable={false}
                      style={{
                        zIndex: currentIndex === index + Tools.length ? 50 : 40,
                        scale: Math.max(
                          InitialScale -
                            Distance(currentIndex, index + Tools.length) *
                              ScaleFadeFeature,
                          BaseScale,
                        ),
                        boxShadow:
                          currentIndex === index + Tools.length
                            ? "0px 0px 20px 0px rgba(0,0,0,0.1)"
                            : "0px 0px 0px 0px rgba(0,0,0,0)",
                        y: -Math.max(
                          InitialY -
                            Distance(currentIndex, index + Tools.length) *
                              YFadeFeature,
                          baseY,
                        ),
                        margin: Math.max(
                          InitialMargin -
                            Distance(currentIndex, index + Tools.length) *
                              MarginFadeFeature,
                          baseMargin,
                        ),
                        opacity: Math.max(
                          InitialOpacity -
                            Distance(currentIndex, index + Tools.length) *
                              OpacityFadeFeature,
                          baseOpacity,
                        ),
                      }}
                      className={`
                ${hasEntered ? "rounded-full" : ""}
                 
                 ${DockerButtonStyle}                  
                    `}
                    >
                      <motion.div
                        className={` ${
                          currentIndex === index + Tools.length
                            ? "w-[30px] h-[30px]"
                            : `${
                                label ===
                                  EmphasizeColorLists[ResumeView.forceColor] ||
                                hasEntered
                                  ? ""
                                  : "blur-[5px] "
                              } rounded-full   w-[20px] h-[20px] `
                        } 
                      
                      cursor-pointer rounded-full text-gray-500 darrk:text-white duration-300 transition-all bg-${label}-${
                        ResumeView.colorDepth
                      } darrk:bg-${label}-900/50`}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                  {label === EmphasizeColorLists[ResumeView.forceColor] && (
                    <motion.span
                      layout
                      layoutId="selectedColor"
                      className={`bg-${label}-${ResumeView.colorDepth} w-[20px] h-[3px] rounded-full animate-pulse `}
                    ></motion.span>
                  )}
                  {/* Label Tag */}
                  {currentIndex === +index + Tools.length && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -40, scale: 0 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.31 },
                        }}
                        exit={{
                          opacity: 0,
                          y: -15,
                          scale: 0,
                          transition: { duration: 0.3 },
                        }}
                        id={label}
                        className="  z-10 -mt-[53px] flex px-[7px] py-[2px] text-[12px] font-medium text-white  bg-gray-900/60 rounded-full shadow-sm   darrk:bg-gray-700"
                      >
                        {label}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence>{settingModal}</AnimatePresence>
    </AnimatePresence>
  );

  return <div>{DockerBar}</div>;
}

export default DockerBar;
