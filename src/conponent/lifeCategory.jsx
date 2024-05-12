import { useLayoutEffect, useEffect, useState } from "react";
import database from "../Database.json";
import { motion } from "framer-motion";
import { useLanguage } from "../help/helpFunction";

const Lifes = database.PersonalInfo.Lifes;

export default function Life() {
  const lang = useLanguage();
  const [HoverColor, setHoverColor] = useState(false);
  const [Index, setIndex] = useState(null);

  return (
    <section className="p-[20px] my-[20px]">
      <div className="">
        <div className={`animate__animated animate__fadeIn grid w-full`}>
          {Lifes.map((life, index) => (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={life.link}
              onMouseEnter={() => {
                setHoverColor(true);
                setIndex(index);
              }}
              onMouseLeave={() => setHoverColor(false)}
              className="welcomeanimation grid-item large-span-3 medium-span-6 small-span-12 w-full duration-500 smoothchange pt-[200px] text-center rounded-[12px] overflow-visible"
              style={{
                backgroundImage: `url(${life.pic})`,
                backgroundSize: "70% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className={`relative transition-all duration-500 flex flex-col min-w-0 break-words  ${
                  HoverColor && Index == index
                    ? "bg-gray-950/70"
                    : " bg-white/50"
                }  w-full rounded-[12px] overflow-visible`}
                style={{
                  backgroundImage: `url(${life.pic})`,
                  backgroundSize: "70% auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom",
                }}
              >
                <div className="flex-auto px-6 py-6 text-gray-750 hover:text-white/50">
                  <div className="flex justify-end">
                    <div className="flex flex-col">
                      <div className="flex-shrink-0 ">
                        <div
                          className={`flex justify-end w-18 h-18 rounded-full items-center `}
                        >
                          <i
                            className={`fi text-[25px] ${
                              HoverColor && Index == index
                                ? "text-white/50"
                                : "text-gray-750"
                            } fi-sr-${life.icon}`}
                          />
                        </div>
                      </div>
                      <h6
                        className={`text-3xl ${
                          HoverColor && Index == index
                            ? "text-white/50"
                            : "text-gray-750"
                        } font-semibold text-right`}
                      >
                        {life.label[lang]}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
