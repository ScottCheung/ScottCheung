/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import database from '../data/Database.json';
import Contact from '../conponent/Contact';
import WhyMe from '../conponent/WhyMe';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { useParams } from 'react-router';

const infos = database.PersonalInfo.Infos;
const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = database.Animation.Transition.LeftappearBar;
const item = database.Animation.Variant.LeftWelcomeItem;

export default function WhyM() {
  const lang = useLanguage();
  const { whyme } = useParams();
  const selectedWhyMeItem = database.PersonalInfo.WhyMe[lang].find(
    (item) => item.id === whyme,
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-col overflow-hidden'>
      <Navbar topTextColor={true} />

      <link
        rel='stylesheet'
        href='../style/appleStyleGrid/overview.built.css'
        type='text/css'
      />
      <link
        rel='stylesheet'
        href='../style/uicons/css/all/all.css'
        type='text/css'
      />
      <script src='https://cdn.tailwindcss.com'></script>

      <main
        className=''
        style={
          (windowWidth < 768 && {
            ...bgPic(selectedWhyMeItem.pic[0], '600px auto', 'bottom center'),
          }) ||
          null
        }
      >
        <section
          style={{
            height: '400px',
            maskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
          }}
          className='relative'
        >
          <motion.div
            initial={{ opacity: 0, y: '60px', scale: 0.95 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.9,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            className='absolute top-0 bottom-0 left-0 w-full h-full bg-left bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                "url('https://img.picgo.net/2024/12/08/long-banner6b6fc2858fd99033.jpg')",
            }}
          >
            <span
              // id="blackOverlay"
              className='absolute w-full h-full bg-black opacity-50'
            ></span>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 1, y: '30px' }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.9,
          }}
          whileInView={{ opacity: 1, y: '0px' }}
          viewport={{ once: true }}
          className={` flex ${windowWidth > 768 ? 'mb-[50vh]' : 'mx-4'}  `}
          style={{
            paddingInline:
              windowWidth > 1024 ?
                'calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)'
              : '0',
          }}
        >
          <motion.div
            initial={{ opacity: 1, y: '30px', scale: 2 }}
            transition={{
              ease: [0.645, 0.045, 0.355, 1],
              duration: 0.9,
            }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            viewport={{ once: true }}
            className={`pb-[35vw] relative flex flex-col  break-words bg-white w-full shadow-xl rounded-[28px] -mt-[150px] animate__animated animate__fadeInUp`}
            style={
              {
                ...bgPic(
                  selectedWhyMeItem.pic[0],
                  windowWidth > 768 ? '30vw auto' : '50vw auto',
                  'bottom right',
                ),
              } || null
            }
          >
            <div className='px-6'>
              <div className='flex  justify-center mb-15 -mt-[50px]'>
                <div className=''>
                  <motion.div
                    initial={{ opacity: 1, scale: 0 }}
                    transition={{
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 0.9,
                    }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className='flex-shrink-0 '
                  >
                    <div
                      className={`flex justify-center items-center ${
                        selectedWhyMeItem.color1 +
                        ' ' +
                        selectedWhyMeItem.color2
                      } bg-gradient-to-br rounded-full w-[100px] h-[100px]  border-white border-[4px]`}
                    >
                      <i
                        className={`fi text-white text-[50px] mt-[10px] ${selectedWhyMeItem.icon}`}
                      ></i>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: '-60px' }}
                transition={{
                  ease: [0.455, 0.03, 0.515, 0.955],
                  duration: 0.9,
                }}
                whileInView={{ opacity: 1, y: '0px' }}
                viewport={{ once: true }}
                className='mt-12 text-center'
              >
                <h3
                  className={`text-[32px] md:text-[42px] lg:text-[50px] font-semibold leading-normal mb-2 ${
                    selectedWhyMeItem.color1 + ' ' + selectedWhyMeItem.color2
                  } bg-clip-text text-transparent bg-gradient-to-br mb-2 animate__animated animate__zoomIn`}
                >
                  {selectedWhyMeItem.advantage}
                </h3>
              </motion.div>
              <div className='py-10 mt-10 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className={` `}>
                    {/* row1-right-with-button */}
                    <div className=''>
                      <div className='content-between '>
                        <motion.div
                          // initial={{ opacity: 0, y: 300 }}
                          transition={{
                            ease: [0.455, 0.03, 0.515, 0.955],
                            duration: 1.2,
                          }}
                          // whileInView={{ opacity: 1, y: 0 }}
                          // viewport={{ once: true }}
                          className={`${
                            selectedWhyMeItem.color1 +
                            ' ' +
                            selectedWhyMeItem.color2
                          }  bg-clip-text text-transparent bg-gradient-to-br font-[600] text-[15px] md:text-[20px] h-auto p-[14px] lg:p-[28px]`}
                        >
                          {selectedWhyMeItem.description
                            .split('\n')
                            .map((paragraph, index) => (
                              <motion.div key={index}>
                                <p
                                  // style={{
                                  //   textAlign: "justify",
                                  //   textJustify: "inter-word",
                                  //   width: "100%",
                                  // }}
                                  className={`  mb-2 text-left  bg-clip-text text-transparent bg-gradient-to-br   animate__animated animate__fadeInUp`}
                                >
                                  {SelectText(paragraph)}
                                </p>
                                <br className='border-b' />
                              </motion.div>
                            ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className='pb-[500px] lg:pb-0 '>
          {' '}
          <WhyMe hideTittle={true} />
        </div>
      </main>

      <Contact />
    </div>
  );
}
