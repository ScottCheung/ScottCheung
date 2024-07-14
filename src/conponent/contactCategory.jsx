import { useLayoutEffect, useState } from "react";
import Database from "../data/Database.json";
import { motion } from "framer-motion";
import { useLanguage } from "../help/helpFunction";

const data = Database.PersonalInfo.Contacts;

export default function Life() {
  const lang = useLanguage();
  const [HoverColor, setHoverColor] = useState(false);
  const [Index, setIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-[20px]  flex w-full">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-between w-full px-20 "
      >
        {data.items.map((type, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.001 }}
            whileTap={{ scale: 0.99 }}
            data-popover-target={`w-${index}`}
            layout
          >
            <a
              href={type.link}
              className="flex-shrink-0 welcomeanimation hover:text-sky-700"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col items-center justify-center ">
                <i
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className={`${type.icon}  text-5xl   `}
                ></i>
              </div>
              {
                <p
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className="lg:text-[15px]  text-center   "
                >
                  {type.type[lang]}
                </p>
              }
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
