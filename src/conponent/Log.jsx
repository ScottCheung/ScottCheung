import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import packageinfo from "../update-log.json";

const globalBradius = "lg:rounded-[28px] rounded-[14px]";
const globalradius = "lg:rounded-[14px] rounded-[12px]";
const globalBpadding = "lg:p-[28px] p-[14px]";
const globalpadding = "lg:p-[14px] p-[12px]";
const headerHeight =
  "h-[15px] -left-[7.5px] w-[15px]  lg:-left-[12.5px] lg:h-[25px]  lg:w-[25px] text-[23px]";

const LogEntry = ({ entry }) => (
  <motion.li
    className={`relative  border-gray-200 dark:border-gray-700  my-[30px] `}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span
      className={`absolute flex items-center justify-center ${headerHeight} bg-blue-100 rounded-full  ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900 `}
    >
      <svg
        className="text-blue-800 h-[7px]  w-[7px] lg:h-[10px] lg:w-[10px] dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
    <div className="flex flex-col pl-[30px]">
      <div
        className={`flex items-center  ${headerHeight} font-semibold text-gray-900 dark:text-white`}
      >
        <h3 className="flex">
          {/* {entry.description} */}
          {entry.version}{" "}
        </h3>
        <span className="inline-flex bg-blue-100 text-blue-800 text-sm font-medium ms-3 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Latest
        </span>
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {new Date(entry.time).toLocaleDateString()}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {entry.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <svg
          className="w-3.5 h-3.5 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
        Download ZIP
      </a>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-calendar-alt"></i>
      <span>{new Date(entry.time).toLocaleString()}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-map-marker"></i>
      <span>{`${entry.address.city}, ${entry.address.state}, ${entry.address.zipcode} (${entry.address.loc})`}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-info-circle"></i>
      <span>{entry.description}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-tags"></i>
      <span>{entry.version}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-plus-square"></i>
      <span>New: {entry.new}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-wrench"></i>
      <span>Fix: {entry.fix}</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="flex mr-2 text-gray-500 fi fi-ss-lightbulb"></i>
      <span>Feature: {entry.feature}</span>
    </div>
  </motion.li>
);

export default function Log() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const div = document.createElement("div");
    div.style.visibility = "hidden";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isOpen, scrollbarWidth]);

  if (!isOpen) return null;

  return (
    <div
      id="log-window"
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-[100vh] bg-gray-800 bg-opacity-75 backdrop-blur-md"
      onClick={handleClose}
    >
      <motion.div
        className={`relative w-3/4 max-w-7xl bg-white ${globalBradius} ${globalBpadding} shadow-lg`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[28px]">
          <h2 className="flex items-center mb-4 text-2xl font-bold">
            <i className="flex mr-2 text-gray-500 fi fi-ss-list-alt"></i>
            更新日志
          </h2>
          <button
            className="flex text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <i className="flex fi fi-ss-cross"></i>
          </button>
        </div>

        <div
          className="flex flex-col h-[70vh] w-full overflow-y-auto mt-[50px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          id="log-entries"
          style={{ imageMask: "transparent" }}
        >
          <ol className="relative border-gray-200 ml-[10px] lg:ml-[20px] border-s dark:border-gray-700">
            {Object.keys(packageinfo).map((key) => (
              <LogEntry key={key} entry={packageinfo[key]} />
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  );
}
