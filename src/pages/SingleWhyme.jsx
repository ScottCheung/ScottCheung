import React, { useState, useEffect } from 'react';
import Navbar from '../conponent/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import database from '../Datebase.json';
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
    <div className='overflow-hidden'>
      <Navbar topTextColor={true} />
      {/* <link rel="stylesheet" href="../style/output.css" type="text/css"/> */}
      {/* <link rel="stylesheet" href="../style/style.css" type="text/css"/> */}
      <link
        rel='stylesheet'
        href='../style/appleStyleGrid/overview.built.css'
        type='text/css'
      />
      <script src='https://cdn.tailwindcss.com'></script>
      {/* <link rel="stylesheet" href="../style/work/main.built.css" type="text/css"/>
	<link rel="stylesheet" href="../style/work/overview.built.css" type="text/css"/>
	<link rel="stylesheet" href="../style/work/main.built2.css" type="text/css"/>
	<link rel="stylesheet" href="../style/work/overview.built2.css" type="text/css"/> */}
      <main
        className=''
        style={
          (windowWidth < 768 && {
            ...bgPic(selectedWhyMeItem.pic[0], '600px auto', 'bottom center'),
          }) ||
          null
        }
      >
        <section className='relative' style={{ height: '400px' }}>
          <motion.div
            initial={{ opacity: 0, y: '60px', scale: 0.95 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.9,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            className='absolute top-0 w-full h-full bgrid-colsenter bgrid-colsover'
            style={{
              backgroundImage:
                "url('https://3o.hk/images/2024/01/22/profilebg.jpg')",
            }}
          >
            <span
              // id="blackOverlay"
              className='w-full h-full absolute opacity-50 bg-black'
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
          className={`visblecontainer ${
            windowWidth > 768 ? 'mb-[100px]' : ''
          }  `}
        >
          <motion.div
            initial={{ opacity: 1, y: '30px', scale: 2 }}
            transition={{
              ease: [0.645, 0.045, 0.355, 1],
              duration: 0.9,
            }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            viewport={{ once: true }}
            className={`pb-[30px] relative flex flex-col min-w-0 break-words ${
              windowWidth > 768
                ? 'bg-white'
                : 'bg-gradient-to-br from-white via-white to-white/80 backdrop-blur-md'
            }  w-full mb-6 shadow-xl rounded-[28px] -mt-[150px] animate__animated animate__fadeInUp`}
            style={
              (windowWidth > 768 && {
                ...bgPic(selectedWhyMeItem.pic[1], '40% auto', 'bottom center'),
              }) ||
              null
            }
          >
            <div className='px-6'>
              <div className='flex  justify-center mb-15 -mt-[50px]'>
                <div className=' '>
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
                      } bg-gradient-to-br rounded-full w-[100px] h-[100px] border border-white border-[4px]`}
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
                className='text-center mt-12'
              >
                <h3
                  className={`text-[32px] font-semibold leading-normal mb-2 ${
                    selectedWhyMeItem.color1 + ' ' + selectedWhyMeItem.color2
                  } bg-clip-text text-transparent bg-gradient-to-br mb-2 animate__animated animate__zoomIn`}
                >
                  {selectedWhyMeItem.advantage}
                </h3>
              </motion.div>
              <div className='mt-10 py-10  text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className={`grid `}>
                    {/* row1-right-with-button */}
                    <div className='grid-item large-span-12 small-span-12 rounded-[14px]  '>
                      <div className='tile tile-rounded'>
                        <div className='tile-content'>
                          <div className='content-between'>
                            <div className='tile-header'>
                              <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                transition={{
                                  ease: [0.455, 0.03, 0.515, 0.955],
                                  duration: 1.2,
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`tile-headline typography-subsection-headline ${
                                  selectedWhyMeItem.color1 +
                                  ' ' +
                                  selectedWhyMeItem.color2
                                } bg-clip-text text-transparent bg-gradient-to-br text-[28px] animate__animated animate__zoomIn h-auto pb-[400px]`}
                              >
                                {selectedWhyMeItem.description
                                  .split('\n')
                                  .map((paragraph, index) => (
                                    <motion.div key={index}>
                                      <p className='mb-2 text-left'>
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
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <WhyMe hideTittle={true} />
      </main>

      <Contact />
    </div>
  );
}
