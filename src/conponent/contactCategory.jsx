import { useLayoutEffect, useState } from 'react';
import Database from "../Datebase.json";
import { motion } from "framer-motion"
import { useLanguage } from '../help/helpFunction';

const data = Database.PersonalInfo.Contacts

export default function Life() {
  const lang = useLanguage();
  const [HoverColor, setHoverColor] = useState(false);
  const [Index, setIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
                  <div className="p-[20px] my-[20px]">
                      <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" flex justify-between items-center px-20">
                        {data.items.map((type, index) => (
                          <motion.li
                            key={index}

                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            data-popover-target={`w-${index}`}
                            layout>
                            <a 
                            href={type.link}
                            className="flex-shrink-0 welcomeanimation hover:text-pink-900"
                            style={{
                              animationDelay: `${index * 0.1}s`
                            }}>
                                
                              <div className="items-center flex justify-center flex-col ">
                                <i style={{
                              animationDelay: `${index * 0.1}s`
                            }} className={`${type.icon}  text-5xl animate__animated  animate__zoomIn  `}></i></div>
                              {<p style={{
                              animationDelay: `${index * 0.1}s`
                            }} className='lg:text-[15px]  text-center animate__animated  animate__zoomIn  '>{type.type[lang]}</p>}
                            </a>
                          </motion.li>
                        ))}
                        
                      </motion.ul>
                  </div>
  );
}
