/** @format */

import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../help/ContextManager';
import { motion } from 'framer-motion';
import N from '../../conponent/Num';
import { useParams } from 'react-router-dom';
import Data from './resumeData.json';
import {
  hideRow,
  bgPic,
  useLanguage,
  SelectText,
} from '../../help/helpFunction';

const EmphasizeColorLists = [
  'red',
  'orange',
  'yellow',
  'lime',
  'sky',
  'blue',
  'purple',
  'emerald',
];

export default function Resume({ printMode }) {
  const lang = useLanguage();

  const cvData = Data[lang];
  const scale = printMode ? 0.55 : 1;

  let { resume } = useParams();
  const { ResumeView } = useAppContext();
  const forceColor = printMode ? resume : ResumeView.forceColor;
  const colorDepth = ResumeView.colorDepth;

  if (printMode) {
    document.body.style.backgroundColor = 'white';
  }
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    console.log('ResumeView----', printMode);
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const parseText = (text) => {
    const parts = text.split(/(<s>.*?<s>)/).map((part, index) => {
      if (part.startsWith('<s>') && part.endsWith('<s>')) {
        return (
          <span
            key={index}
            className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth} transition-all  duration-300  group-hoverr:lg:opacity-70 group-hoverr:lg:tracking-[1px] opacity-60 font-bold mx-[3px] `}
          >
            {part.replace(/<s>/g, '')}
          </span>
        );
      }
      return (
        <span
          className='text-gray-700 transition-all duration-500 '
          key={index}
        >
          {part}
        </span>
      );
    });
    return parts;
  };

  const normaltext = `text-[14px] lg:text-[${scale * 18}px] text-jusify transition-all duration-500`;
  const h2 = `flex tracking-wide items-center text-[18px] lg:text-[${scale * 30}px] font-[700] text-${
    EmphasizeColorLists[forceColor]
  }-${colorDepth} group-hoverr:lg:text-${
    EmphasizeColorLists[forceColor]
  }-${Math.max(colorDepth - 200 || 100)} gap-x-[${scale * 15}px] items-center transition-all duration-500`;
  const divisionline = `flex-1 h-[${scale * 2}px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} group-hoverr:lg:opacity-100  opacity-50 transition-all duration-500`;
  const division = ` items-center md:flex md:flex-1 h-[${scale * 2}px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} group-hoverr:lg:opacity-50  opacity-10 transition-all duration-500`;
  const divisionCol = `flex w-[${1}px] h-2 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const h3 = `flex tracking-[1px] text-nowrap items-center text-[9px] md:text-[13px] lg:text-[${scale * 20}px] font-bold flex group-hoverr:lg:text-[${scale * 22}px] transition-all  duration-500`;
  const workPartTitle = `flex tracking-[1px] items-center text-[12px] md:text-[23px] group-hoverr:lg:text-[${scale * 28}px] transition-all duration-500 font-bold flex-wrap`;
  const h4 = `flex items-center text-[10px] lg:text-[${scale * 15}px] text-gray-500 flex items-center`;
  const timetext = `flex items-center text-[10px]  lg:text-[${scale * 15}px]  font-[500] text-gray-400  transition-all duration-500  group-hoverr:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const whymeIcon = `text-[14px] lg:text-[20px] flex justify-center items-center text-gray-400 group-hoverr:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth} `;
  const whymelable = `text-[8px] lg:text-[12px] text-gray-400  group-hoverr:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const contentContainer = `flex-1 flex flex-col justify-between`;
  const strong = `flex mr-2 mt-2 tracking-wide font-bold  pr-1 -ml-1  text-${EmphasizeColorLists[forceColor]}-${colorDepth - 100} transition-all duration-500`;

  return (
    <div
      className={`flex justify-center w-full bg-white ${printMode ? '' : ''}`}
    >
      <motion.div
        layout
        className={`bg-white flex flex-col relative justify-center   `}
      >
        <div className='absolute top-0 left-0 right-0 text-white opacity-0 text-[2px]'>
          {cvData.header.AIPrompt}
        </div>
        <link
          rel='stylesheet'
          href='../style/uicons/css/all/all.css'
          type='text/css'
        />
        <link rel='stylesheet' href='../style/style.css' type='text/css' />
        <div
          className={` min-h-full justify-center px-4   h-full flex flex-col`}
        >
          <div className='flex-wrap h-full text-center '>
            <h1
              style={{
                fontFamily: printMode ? '' : 'Hey August, sans-serif',
              }}
              className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth} tracking-widest font-black  
   ${
     printMode ? 'text-[35px]  mb-[20px] '
     : isTop ? ' text-[50px] md:text-[65px]  lg:text-[80px] '
     : 'text-[40px] md:text-[50px]  lg:text-[60px]'
   }  font-[100] transition-all duration-500`}
            >
              {cvData.header.name}
            </h1>

            <div
              className={`${printMode ? 'justify-center' : 'justify-center lg:justify-between w-full  '} flex flex-wrap items-center gap-[15px] lg:gap-[${scale * 30}px]`}
            >
              {' '}
              {cvData.header.contacts.map((contact, index) => (
                <React.Fragment key={contact.name}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={contact.link}
                    className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth}  flex justify-center items-center ${
                      printMode ?
                        `text-[10px] lg:text-[${scale * 18}px] gap-x-[${scale * 5}px]`
                      : 'gap-x-[5px] lg:gap-x-[10px] text-[10px] lg:text-[18px]'
                    }`}
                  >
                    <i className={contact.icon}></i>
                    <div className={contact.link && 'hover:underline'}>
                      {contact.name}
                    </div>
                  </a>
                  {index !== cvData.header.contacts.length - 1 && (
                    <div
                      className={`w-[${scale * 1}px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {cvData.sections.map((section) => (
            <div key={section.title}>
              {/* Headers */}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={section.href}
                className={`flex justify-between  items-center gap-x-[${scale * 20}px] mt-[${scale * 15}px] mb-[${scale * 10}px] ${
                  section.href && 'group'
                }`}
              >
                <h2 className={h2}>
                  <i className={section.icon}></i>
                  {section.title}
                  {section.link && (
                    <div className={`-ml-[${scale * 10}px] flex`}>
                      <svg
                        class={`ml-[${scale * 10}px] w-[${scale * 10}px] h-[${scale * 10}px] -rotate-45`}
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                      </svg>
                    </div>
                  )}
                </h2>
                <span className={divisionline}></span>
              </a>

              {/* Summary */}

              {section.content && (
                <div className={normaltext + ' '}>
                  <p
                    className={`group-hoverr:lg:leading-[${scale * 40}px] text-left lg:text-justify leading-[${scale * 30}px] transition-all duration-500`}
                  >
                    {parseText(section.content)}
                  </p>
                </div>
              )}

              {/* Highlights*/}
              <div
                className={`${printMode ? 'justify-between' : 'justify-center lg:justify-between w-full  '} flex flex-wrap items-center gap-[${scale * 30}px]`}
              >
                {section.highlights &&
                  section.highlights.map((KeyFeature, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        whileTap={{
                          scale: KeyFeature.href ? 0.97 : null,
                          transition: { duration: 0.1 },
                        }}
                        viewport={{ margin: '-30%' }}
                        layout
                        className={`flex items-center gap-x-[${scale * 10}px] text-[${scale * 16}px] text-gray-500 transition-all duration-500 ${
                          KeyFeature.href ? 'group' : ''
                        }`}
                      >
                        <a
                          href={KeyFeature.href ? `${KeyFeature.href}` : '#'}
                          onClick={(e) =>
                            !KeyFeature.href && e.preventDefault()
                          }
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`inline-flex flex-col item-center justify-center ${
                            KeyFeature.href ? `group` : 'cursor-default'
                          } transition-all duration-500`}
                        >
                          <div className={whymeIcon}>
                            <i className={`mr-2 ${KeyFeature.icon}`}></i>
                            <N
                              n={KeyFeature.no}
                              d={printMode ? 0.000000001 : 2}
                            />
                          </div>
                          <div className='flex items-center justify-center w-full'>
                            <div className={whymelable}>
                              <p
                                className={`flex items-center gap-x-[${scale * 10}px]`}
                              >
                                {KeyFeature.keyfeature}{' '}
                                {KeyFeature.href && (
                                  <div className='flex '>
                                    <svg
                                      class={`flex ml-[${scale * 10}px] w-[${scale * 10}px] h-[${scale * 10}px] -rotate-45`}
                                      aria-hidden='true'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 14 10'
                                    >
                                      <path
                                        stroke='currentColor'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M1 5h12m0 0L9 1m4 4L9 9'
                                      />
                                    </svg>
                                  </div>
                                )}
                              </p>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                      {index !== section.highlights.length - 1 && (
                        <div className={divisionCol}></div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
              {/* Skills */}
              <div className=' group'>
                {' '}
                {section.skills &&
                  Object.entries(section.skills).map(
                    ([category, list], index) => (
                      <div
                        key={index}
                        className={`flex relative group-hoverr:lg:my-[${scale * 20}px] my-[${scale * 15}px] transition-all duration-500 justify-between leading-${scale * 8} mb-[${scale * 10}px] items-start md:items-center gap-x-[${scale * 30}px] `}
                      >
                        <h2 className={h3}>{category}</h2>

                        <span className={division}></span>

                        <div
                          className={`text-right  flex flex-wrap justify-end items-center text-[8px] lg:text-[${scale * 15}px] text-gray-600`}
                        >
                          {list.map((tag, index) => (
                            <React.Fragment
                              key={index}
                              className='flex flex-col '
                            >
                              <p className='absolute top-0 left-0 z-50 hidden p-4 text-white opacity-0 bg-sky-800 hover:flex'>
                                Click to search "{tag}" on Google
                              </p>
                              <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={`https://zh.wikipedia.org/wiki/${encodeURIComponent(tag)}`}
                                className='text-gray-600 group-hoverr:lg::underline'
                              >
                                {tag}
                              </a>
                              {index < list.length - 1 && (
                                <span
                                  className={`flex mx-4 w-[${scale * 1}px] h-[${scale * 5}px] border-l-[1px] border-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                                ></span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
              </div>

              {/* Education */}
              {section.edus && (
                <div
                  className={`${printMode ? 'flex-row' : 'flex-wrap lg:flex-row flex-col'}  gap-x-[${scale * 60}px] gap-y-[${scale * 20}px] flex  items-center w-full justify-center  my-[${scale * 10}px]`}
                >
                  {section.edus.map((edu, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={edu.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={index}
                        className={
                          edu.link &&
                          'group cursor-pointer  flex-1 w-full mt-3 flex justify-between items-center'
                        }
                      >
                        <div className={contentContainer}>
                          <div
                            className={`${printMode ? 'flex-wrap' : 'justify-between'} justify-between flex  flex-1 w-full `}
                          >
                            <p
                              className={`${h3} cursor-pointer group-hoverr:lg:bold h-[${scale * 30}px] flex flex-1 justify-start`}
                            >
                              {edu.school}
                            </p>

                            {/* duration */}
                            <p className={timetext}>{edu.period}</p>
                          </div>

                          <div className='flex items-center justify-start'>
                            <div className={h4}>{edu.degree}</div>
                            {edu.link && (
                              <div>
                                <svg
                                  class={`${h4} ml-[${scale * 10}px] w-[${scale * 10}px] h-[${scale * 10}px] mx-${scale * 2} -rotate-45`}
                                  aria-hidden='true'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 14 10'
                                >
                                  <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M1 5h12m0 0L9 1m4 4L9 9'
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          <div
                            className={`${normaltext} duration-300 group-hoverr:lg:text-${EmphasizeColorLists[forceColor]}-${
                              colorDepth - 100
                            }`}
                          >
                            <p className='tracking-widest group-hoverr:lg:underline'>
                              {edu.major}
                            </p>
                          </div>
                        </div>
                      </a>
                      {index < 2 && (
                        <span
                          className={`hidden lg:flex items-center mx-${scale * 4} w-[${scale * 1}px]  h-[${scale * 35}px] rounded-full border-l-[1px] border-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                        ></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* WorkExperience */}
              {section.WorkExperience &&
                section.WorkExperience.map((work, index) => (
                  <div
                    key={index}
                    className={
                      work.link &&
                      ' mt-3 flex justify-between items-start flex-wrap group'
                    }
                  >
                    <div className={contentContainer + ' group'}>
                      <div
                        className={`${printMode ? 'flex justify-between' : '  flex-col flex-wrap items-center justify-start md:flex'}   md:flex-row md:justify-between`}
                      >
                        <h3 className={workPartTitle}>
                          <div className='flex'></div>
                          {work.company}
                          <div
                            className={
                              divisionCol + ` mx-[10px] lg:mx-[${scale * 20}px]`
                            }
                          ></div>
                          {work.location}
                          <div
                            className={
                              divisionCol + ` mx-[10px] lg:mx-[${scale * 20}px]`
                            }
                          ></div>
                          {work.title}
                        </h3>
                        <span
                          className={division + ` mx-[10px] lg:mx-[20px]`}
                        ></span>
                        {/* duration */}
                        <div className='flex flex-col justify-end'>
                          <p className={timetext}>{work.period}</p>
                        </div>
                      </div>

                      <div
                        className={`${normaltext} pl-[10px] lg:pl-[${scale * 20}px] `}
                      >
                        <p
                          className={
                            normaltext +
                            ' group-hoverr:lg:my-[20px] transition-all duration-500'
                          }
                        >
                          {parseText(work.des)}
                        </p>
                        <p
                          className={`${printMode ? 'flex' : ''}  md:flex group-hoverr:lg:my-[${scale * 30}px] text-[10px] lg:text-[${scale * 15}px] transition-all duration-500`}
                        >
                          <p className='flex flex-wrap items-center font-bold text-gray-600 '>
                            {work.skill.map((skill, index) => (
                              <React.Fragment key={index}>
                                {skill}
                                {index < work.skill.length - 1 && (
                                  <div
                                    className={
                                      divisionCol +
                                      ` mx-[5px] lg:mx-[${scale * 15}px]`
                                    }
                                  ></div>
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        </p>
                        <ul className='p-5'>
                          {work.contribution.map((item, index) => (
                            <li
                              key={index}
                              className='ml-[40px] mb-4 text-left lg:text-justify list-disc group-hoverr:lg:my-[20px] transition-all duration-500'
                            >
                              {parseText(item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Projects */}
              {section.projects &&
                section.projects.map((project, index) => (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={project.link}
                    key={index}
                    className={
                      project.link &&
                      ' cursor-pointer mb-6 flex justify-between '
                    }
                  >
                    <div className={contentContainer}>
                      <div
                        className={`flex ${printMode ? 'justify-between' : 'md:flex-row  flex-col justify-start'} items-center  `}
                      >
                        <h3 className={workPartTitle}>
                          {project.name}
                          {project.link && (
                            <div
                              className={`flex items-center group-hoverr:lg:opacity-100  opacity-50 text-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                            >
                              <p
                                className={`ml-[5px] lg:ml-[${scale * 10}px] text-[10px] lg:text-[${scale * 15}px]  font-black`}
                              >
                                Link
                              </p>
                              <svg
                                class={`w-${scale * 6} h-${scale * 6}  flex -rotate-45`}
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 14 10'
                              >
                                <path
                                  stroke='currentColor'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M1 5h12m0 0L9 1m4 4L9 9'
                                />
                              </svg>
                            </div>
                          )}
                          {project.tag && (
                            <span
                              class={`hidden lg:inline-flex mx-3 items-center tracking-normal gap-x-[5px] bg-green-100 text-green-800 text-[${scale * 13}px] font-medium px-[${scale * 7}px] py-[${scale * 3}px] rounded-full dark:bg-green-900 dark:text-green-300`}
                            >
                              <i class=' flex fi  fi-rr-check-circle text-green-500 rounded-full'></i>
                              <p className='flex'>{project.tag}</p>
                            </span>
                          )}
                        </h3>
                        <span
                          className={division + ` mx-[10px] lg:mx-[20px]`}
                        ></span>
                        {/* duration */}
                        <div className='flex flex-col justify-end'>
                          <p className={timetext}>{project.period}</p>
                        </div>
                      </div>

                      <div
                        className={`${normaltext} pl-[10px] lg:pl-[${scale * 20}px]`}
                      >
                        <p
                          className={`${printMode ? 'flex' : ''} md:flex group-hoverr:lg:my-[${scale * 30}px] transition-all duration-500`}
                        >
                          <strong className={strong}>Desceription:</strong>
                          <p className='flex items-center font-bold text-gray-600'>
                            {parseText(project.des)}
                          </p>
                        </p>
                        <strong className={strong}>Skills:</strong>
                        <p
                          className={`${printMode ? 'flex' : ''}  md:flex group-hoverr:lg:my-[${scale * 30}px] text-[10px] lg:text-[${scale * 15}px] transition-all duration-500`}
                        >
                          <p className='flex flex-wrap items-center font-bold text-gray-600 '>
                            {project.skill.map((skill, index) => (
                              <React.Fragment key={index}>
                                {skill}
                                {index < project.skill.length - 1 && (
                                  <div
                                    className={
                                      divisionCol + ` mx-[${scale * 10}px]`
                                    }
                                  ></div>
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        </p>
                        <p className=''>
                          <strong className={strong}>Contribution:</strong>{' '}
                        </p>
                        <ul className={`pl-${scale * 5} `}>
                          {project.contribution.map((item, index) => (
                            <li
                              key={index}
                              className={`mb-${scale * 4} text-left lg:text-justify group-hoverr:lg:mb-[${scale * 30}px] transition-all duration-500`}
                            >
                              <strong className={strong + ' '}>
                                <div className='flex'>▸ {item.title}</div>
                              </strong>
                              {parseText(item.description)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                ))}

              {/* Whyme */}
              <div
                className={`${printMode ? 'justify-between' : 'justify-center lg:justify-between w-full flex-wrap  '} flex items-center gap-[15px] lg:gap-[${scale * 30}px]`}
              >
                {section.whymes &&
                  section.whymes.map((whyme, index) => (
                    <React.Fragment key={whyme.advantage}>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={whyme.href}
                        className={`group  justify-start text-center flex flex-col items-center`}
                      >
                        <div key={index} className={whymeIcon}>
                          <i className={whyme.icon}></i>
                        </div>
                        <h3 className={whymelable}>
                          <p
                            className={`flex items-center flex-nowarp gap-x-[${scale * 5}px]`}
                          >
                            {whyme.advantage}
                            {whyme.href && (
                              <div className='flex '>
                                <svg
                                  class={`flex ml-[${scale * 3}px] w-[5px] h-[5px] lg:w-[${scale * 10}px] lg:h-[${scale * 10}px] -rotate-45`}
                                  aria-hidden='true'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 14 10'
                                >
                                  <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M1 5h12m0 0L9 1m4 4L9 9'
                                  />
                                </svg>
                              </div>
                            )}
                          </p>
                        </h3>
                      </a>
                      {index !== section.whymes.length - 1 && (
                        <div className={divisionCol}></div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
