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
];

export default function Resume({ print }) {
  const printMode = print || null;
  const lang = useLanguage();

  const cvData = Data[lang];

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
            className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth} transition-all duration-300  group-hover:lg:opacity-70 group-hover:lg:tracking-[1px] opacity-60 font-bold mx-[3px] `}
          >
            {part.replace(/<s>/g, '')}
          </span>
        );
      }
      return (
        <span className='text-gray-700 transition-all duration-500' key={index}>
          {part}
        </span>
      );
    });
    return parts;
  };

  const normaltext = ' text-[18px] text-jusify transition-all duration-500';
  const h2 = `flex tracking-wide items-center text-[30px] font-[700] text-${
    EmphasizeColorLists[forceColor]
  }-${colorDepth} group-hover:lg:text-${
    EmphasizeColorLists[forceColor]
  }-${Math.max(colorDepth - 200 || 100)} gap-x-[15px] items-center transition-all duration-500`;
  const divisionline = `flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} group-hover:lg:opacity-100  opacity-50 transition-all duration-500`;
  const division = ` items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} group-hover:lg:opacity-50  opacity-10 transition-all duration-500`;
  const divisionCol = `flex w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const h3 = `flex tracking-[1px] items-center text-[22px] font-bold flex group-hover:lg:text-[28px] transition-all duration-500`;
  const workPartTitle = `flex tracking-[1px] items-center text-[23px] group-hover:lg:text-[28px] transition-all duration-500 font-bold flex`;
  const h4 = `flex items-center text-[15px] text-gray-500 flex items-center`;
  const timetext = `flex items-center text-2xl font-[500] text-gray-400  transition-all duration-500  group-hover:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth} `;
  const whymelable = `text-[15px] text-gray-400  group-hover:lg:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const contentContainer = `flex-1 flex flex-col justify-between`;
  const strong = `flex mr-2 tracking-wide font-bold pr-1 -ml-1  text-${EmphasizeColorLists[forceColor]}-${colorDepth - 100} transition-all duration-500`;

  return (
    <div className='flex justify-center bg-white'>
      <motion.div
        layout
        className={`bg-white flex flex-col relative justify-center `}
      >
        <div className='absolute top-0 left-0 right-0 text-white text-[1px]'>
          {cvData.header.AIPrompt}
        </div>
        <link
          rel='stylesheet'
          href='../style/uicons/css/all/all.css'
          type='text/css'
        />
        <link rel='stylesheet' href='../style/style.css' type='text/css' />
        <div className={` min-h-[100vh] w-full h-full flex flex-col`}>
          <div className='h-full text-center '>
            <h1
              style={
                {
                  // fontFamily: 'Hey August, sans-serif',
                }
              }
              className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth} tracking-widest font-black 
   ${printMode ? 'text-[70px]  mb-[20px]' : isTop ? ' text-[50px] md:text-[65px]  lg:text-[80px]' : 'text-[30px] md:text-[50px]  lg:text-[50px]'}  font-[100] transition-all duration-500`}
            >
              {cvData.header.name}
            </h1>
            <div
              className={`flex justify-center items-center gap-x-[15px] flex-nowrap  ${printMode ? '' : 'mt-[25px]'}`}
            >
              {cvData.header.contacts.map((contact, index) => (
                <React.Fragment key={contact.name}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={contact.link}
                    className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth} text-nowrap flex justify-center items-center ${
                      printMode
                        ? 'text-[18px] gap-x-[5px]'
                        : 'gap-x-[10px] text-[18px]'
                    }`}
                  >
                    <i className={contact.icon}></i>
                    <div className={contact.link && 'hover:underline'}>
                      {contact.name}
                    </div>
                  </a>
                  {index !== cvData.header.contacts.length - 1 && (
                    <div
                      className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
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
                className={`flex justify-between items-center gap-x-[20px] mt-[20px] mb-[10px] ${
                  section.href && 'group'
                }`}
              >
                <h2 className={h2}>
                  <i className={section.icon}></i>
                  {section.title}
                  {section.link && (
                    <div className='-ml-[10px] flex'>
                      <svg
                        class='w-[20px] h-[20px] -rotate-45'
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
                <div
                  style={{
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                    width: '100%',
                  }}
                  className={normaltext + ' group'}
                >
                  <p className='group-hover:lg:leading-[40px] leading-[30px] transition-all duration-500'>
                    {parseText(section.content)}
                  </p>
                </div>
              )}
              {/* Highlights*/}
              <div className='flex flex-nowrap items-center w-full justify-center md:justify-between gap-[30px]'>
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
                      >
                        <a
                          href={KeyFeature.href ? `${KeyFeature.href}` : '#'}
                          onClick={(e) =>
                            !KeyFeature.href && e.preventDefault()
                          }
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`flex flex-col w-full item-center justify-center ${
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
                              <p className='flex items-center gap-x-[10px]'>
                                {KeyFeature.keyfeature}{' '}
                                {KeyFeature.href && (
                                  <div className='flex '>
                                    <svg
                                      class='flex w-[10px] h-[10px] -rotate-45'
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
              <div className='group'>
                {' '}
                {section.skills &&
                  Object.entries(section.skills).map(
                    ([category, list], index) => (
                      <div
                        key={index}
                        className='flex  group-hover:lg:my-[30px] transition-all duration-500 justify-between leading-8 mb-2 items-start md:items-center gap-x-[30px] py-[15px] md:py-[3px]'
                      >
                        <h2 className={h3}>{category}</h2>

                        <span className={division}></span>

                        <div
                          className={`text-right  flex flex-wrap justify-end items-center text-[15px] text-gray-600`}
                        >
                          {list.map((tag, index) => (
                            <React.Fragment key={index} className=' group'>
                              <p className='hidden hover:flex animate-animated animate-zoomIn'>
                                Click to search "{tag}" on Google
                              </p>
                              <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={`https://zh.wikipedia.org/wiki/${encodeURIComponent(tag)}`}
                                className='text-gray-600 group-hover:lg::underline'
                              >
                                {tag}
                              </a>
                              {index < list.length - 1 && (
                                <span
                                  className={`flex mx-4 w-[1px] h-[5px] border-l-[1px] border-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
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
                <div className='flex justify-between items-center gap-x-[60px]'>
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
                          <div className='flex justify-between flex-1 w-full'>
                            <p
                              className={`${h3} cursor-pointer group-hover:lg:bold h-[30px] flex flex-1 justify-start`}
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
                                  class={`${h4} w-4 h-4 mx-2 -rotate-45`}
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
                            className={`${normaltext} duration-300 group-hover:lg:text-${EmphasizeColorLists[forceColor]}-${
                              colorDepth - 100
                            }`}
                          >
                            <p className='tracking-widest group-hover:lg:underline'>
                              {edu.major}
                            </p>
                          </div>
                        </div>
                      </a>
                      {index < 2 && (
                        <span
                          className={`flex items-center mx-4 w-[1px]  h-[35px] rounded-full border-l-[1px] border-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                        ></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* WorkExperience */}
              {section.WorkExperience &&
                section.WorkExperience.map((work, index) => (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={work.link}
                    key={index}
                    className={
                      work.link &&
                      ' cursor-pointer mt-3 flex justify-between items-start'
                    }
                  >
                    <div className={contentContainer + ' group'}>
                      <div className='flex-col items-center justify-start md:flex md:flex-row md:justify-between'>
                        <h3 className={workPartTitle}>
                          <div className='flex'></div>
                          {work.company}
                          <div className={divisionCol + ' mx-[20px]'}></div>
                          {work.title}
                          {work.link && (
                            <div
                              className={`flex items-center group-hover:lg:opacity-100  opacity-70 text-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                            >
                              <p
                                className={`ml-[10px] text-[15px] mb-[5px]  font-black group-hover:lg:my-[30px]  transition-all duration-500`}
                              >
                                Link
                              </p>
                              <svg
                                class='w-6 h-6  flex -rotate-45'
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
                        </h3>
                        <span className={division + ' mx-[20px]'}></span>
                        {/* duration */}
                        <div className='flex flex-col justify-end'>
                          <p className={timetext}>{work.period}</p>
                        </div>
                      </div>

                      <div className={`${normaltext} pl-[20px]`}>
                        <p className='flex group-hover:lg:my-[30px] transition-all duration-500'>
                          <strong className={strong}>Desceription:</strong>
                          <p className='flex items-center font-bold text-gray-600'>
                            {parseText(work.des)}
                          </p>
                        </p>
                        <p className='flex group-hover:lg:my-[30px] text-[15px] transition-all duration-500'>
                          <strong className={strong}>Skill:</strong>
                          <p className='flex items-center font-bold text-gray-600'>
                            {work.skill.map((skill, index) => (
                              <React.Fragment key={index}>
                                {skill}
                                {index < work.skill.length - 1 && (
                                  <div
                                    className={divisionCol + ' mx-[10px]'}
                                  ></div>
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        </p>
                        <p>
                          <strong className={strong}>Contribution:</strong>{' '}
                        </p>
                        <ul className='pl-5'>
                          {work.contribution.map((item, index) => (
                            <li
                              key={index}
                              className='mb-4 text-justify group-hover:lg:my-[30px] transition-all duration-500'
                            >
                              <strong className={strong + ' '}>
                                ▸ {item.title} :
                              </strong>
                              {parseText(item.description)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
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
                      'group cursor-pointer mb-6 flex justify-between items-start'
                    }
                  >
                    <div className={contentContainer}>
                      <div className='flex-col items-center justify-start md:flex md:flex-row md:justify-between'>
                        <h3 className={h3}>
                          {project.name}
                          {project.link && (
                            <div
                              className={`flex items-center group-hover:lg:opacity-100  opacity-50 text-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                            >
                              <p
                                className={`ml-[10px] text-[15px]  font-black`}
                              >
                                Link
                              </p>
                              <svg
                                class='w-6 h-6  flex -rotate-45'
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
                            <span class='inline-flex mx-3 items-center tracking-normal gap-x-[5px] bg-green-100 text-green-800 text-[13px] font-medium px-[7px] py-[3px] rounded-full dark:bg-green-900 dark:text-green-300'>
                              <i class=' flex fi  fi-rr-check-circle text-green-500 rounded-full'></i>
                              <p className='flex'>{project.tag}</p>
                            </span>
                          )}
                        </h3>
                        <span className={division + ' mx-[20px]'}></span>
                        {/* duration */}
                        <div className='flex flex-col justify-end'>
                          <p className={timetext}>{project.period}</p>
                        </div>
                      </div>

                      <div className={`${normaltext} pl-[20px]`}>
                        <p className='flex group-hover:lg:my-[30px] transition-all duration-500'>
                          <strong className={strong}>Desceription:</strong>
                          <p className='flex items-center font-bold text-gray-600'>
                            {parseText(project.des)}
                          </p>
                        </p>
                        <p className='flex group-hover:lg:my-[30px] text-[15px] mb-[5px]  transition-all duration-500'>
                          <strong className={strong}>Skill:</strong>
                          <p className='flex items-center font-bold text-gray-600'>
                            {project.skill.map((skill, index) => (
                              <React.Fragment key={index}>
                                {skill}
                                {index < project.skill.length - 1 && (
                                  <div
                                    className={divisionCol + ' mx-[10px]'}
                                  ></div>
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        </p>
                        <p className=''>
                          <strong className={strong}>Contribution:</strong>{' '}
                        </p>
                        <ul className='pl-5 '>
                          {project.contribution.map((item, index) => (
                            <li
                              key={index}
                              className='mb-4 text-justify group-hover:lg:mb-[30px] transition-all duration-500'
                            >
                              <strong className={strong + ' '}>
                                ▸ {item.title} :
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
              <div className='flex flex-nowrap items-center w-full justify-center md:justify-between gap-[30px]'>
                {section.whymes &&
                  section.whymes.map((whyme, index) => (
                    <React.Fragment key={whyme.advantage}>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={whyme.href}
                        className={`group`}
                      >
                        <div key={index} className={whymeIcon}>
                          <i className={whyme.icon}></i>
                        </div>
                        <h3 className={whymelable}>
                          <p className='flex items-center gap-x-[10px]'>
                            {whyme.advantage}
                            {whyme.href && (
                              <div className='flex '>
                                <svg
                                  class='flex w-[10px] h-[10px] -rotate-45'
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
