import React, { useState, useEffect, useRef } from "react";
import Database from "../Database.json";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from "framer-motion";
import N from "./Num";
import { hideRow, useLanguage } from "../help/helpFunction";
import ScrollableContainer from "./ScrollableContainer";

const KeyFeatures = Database.PersonalInfo.KeyFeature1;
const bg = Database.PersonalInfo.KeyFeaturebg;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function KeyFeature() {
  const lang = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100%", "0%"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["50vw", "100vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const KeyFeature = (
    <motion.div
      ref={ref}
      style={{
        width,
        y,
        borderRadius,
      }}
      className={`w-full flex h-[80vh]  md:h-[150vh]   overflow-hidden  `}
    >
      <motion.section className="flex items-center w-full md:h-[150vh] relative overflow-hidden bg-gradient-to-r   from-lime-500  to-emerald-500 ">
        <img
          className="absolute top-0 left-0 object-cover object-bottom w-full h-full transition-all"
          src={bg[0]}
        />

        <motion.span
          className={`w-full h-full absolute  transition-all bg-black/60  z-0`}
        ></motion.span>
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            variants={Welcomevisblecontainer}
            initial="hidden"
            whileInView="visible"
            transition={StagerFadeInUp}
            style={{
              paddingInline:
                windowWidth > 1024
                  ? "calc(50vw - min(1680px, var(--global-viewport-content-responsive)) / 2)"
                  : "10px",
            }}
            // viewport={{ once: true }}

            className="z-50 grid w-full grid-cols-12 gap-8 "
          >
            {KeyFeatures.map((KeyFeature, index) => (
              <motion.div
                key={index}
                variants={WelcomeItem}
                // whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                transition={StagerFadeInUp}
                viewport={{ margin: "-30%" }}
                layout
                className=" px-[20px] rounded-[28px]  hover:bg-gradient-to-t   from-lime-500/20  to-emerald-500/20  hover:backdrop-blur-md  hover:shadow-2xl focus:shadow-2xl relative col-span-6 md:col-span-4 lg:col-span-4 "
              >
                <a
                  href={`${KeyFeature.href}`}
                  className="flex flex-col items-center justify-center p-[28px] w-full item-center md:justify-center"
                >
                  <div
                    style={{ fontFamily: "Hey August, sans-serif" }}
                    className="flex items-center text-[100px] lg:text-[150px]  text-white "
                  >
                    <N n={KeyFeature.no} d={1.5} />
                  </div>
                  <div className="flex items-center justify-center w-full -mt-[30px]">
                    <div className="flex gap-[20px] items-center text-transparent  bg-gradient-to-br bg-clip-text from-lime-500 to-emerald-500">
                      <i
                        className={`text-[30px] md:text-[40px]  lg:text-[50px]  fi  ${KeyFeature.icon}`}
                      ></i>
                      <p className="flex text-[15px] md:text-[20px] lg:text-[30px] font-[600]">
                        {KeyFeature.keyfeature[lang]}
                      </p>
                    </div>
                  </div>
                </a>

                <div
                  data-popover
                  id={`keyFeatureDes-${index}`}
                  role="tooltip"
                  className="absolute z-10 invisible inline-flex w-96 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800"
                >
                  <div className="px-6 py-4">
                    <p className="text-[13px] text-left font-mono">
                      {KeyFeature.description[lang]}
                    </p>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );

  return <div className="flex justify-center">{KeyFeature}</div>;
}

export default KeyFeature;
