import { useTime } from 'framer-motion';
import React, { useState } from 'react';
import DockerBar from '../conponent/DockerBar';
import { useAppContext } from '../help/ContextManager';
import { motion } from 'framer-motion';
import N from '../conponent/Num';

const EmphasizeColorLists = [
  'red',
  'orange',
  'yellow',
  'lime',
  'sky',
  'blue',
  'purple',
];

export default function Resume() {
  const { ResumeView } = useAppContext();
  const forceColor = ResumeView.forceColor;
  const colorDepth = ResumeView.colorDepth;

  const cvData = {
    header: {
      name: 'Xianzhe(Scott) Zhang',
      contacts: [
        {
          name: '+61 434344292',
          icon: <i class='fi fi-rr-mobile-notch'></i>,
          link: 'tel:+61 434344292',
        },
        {
          name: 'xianzhe.zhang@student.unsw.edu.au',
          icon: <i class='fi fi-rr-envelope'></i>,
          link: 'mailto:xianzhe.zhang@student.unsw.edu.au',
        },
        {
          name: 'xianzhe.site',
          icon: <i class='fi fi-rr-link-alt'></i>,
          link: 'https://xianzhe.site',
        },
        {
          name: 'xianzhe1110',
          icon: (
            <svg
              className={`fill-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
            </svg>
          ),
          link: 'https://www.linkedin.com/in/xianzhe1110/',
        },
        // {
        //   name: 'Project',
        //   icon: <i class='fi fi-rr-folder'></i>,
        //   link: 'https://xianzhe.site/project',
        // },
      ],
    },
    sections: [
      {
        title: 'Summary',
        icon: <i class='fi fi-rr-user'></i>,
        content:
          'This is an example resume to showcase the capabilities of the open-source LaTeX CV generator, RenderCV. A substantial part of the content is taken from here, where a clean and tidy CV pattern is proposed by Gayle L. McDowell.',
      },
      {
        title: 'Highlights',
        icon: <i class='fi fi-sr-star-shooting'></i>,
        highlights: [
          {
            no: 4,
            keyfeature: 'Majors',
            href: 'Degrees',
            icon: 'fi-rr-graduation-cap',
          },
          {
            no: 17,
            keyfeature: 'scholarships',
            href: 'scholarships',
            icon: 'fi-rr-trophy-star',
          },
          {
            no: 60,
            keyfeature: ' Certificates',
            href: 'Certificates',
            icon: 'fi-rr-diploma',
          },
          {
            no: 59,
            keyfeature: ' Skills',
            icon: 'fi-rr-tool-box',
          },
          {
            no: 23,
            keyfeature: ' Applications',
            icon: 'fi-sr-window-alt',
          },
          {
            no: 1000000,
            result: '1 M+',
            keyfeature: '1 million views+',
            icon: 'fi-br-following',
          },
        ],
      },
      {
        title: 'Education',
        icon: <i class='fi fi-rr-graduation-cap'></i>,
        edus: [
          {
            degree: 'BE',
            school: 'SouthWest University of Science and Technology',
            link: 'https://xianzhe.site/#Education',
            major: 'Functional Material',
            gpa: '3.9/4.0',
            coursework: [
              'Software Foundations',
              'Computer Architecture',
              'Algorithms',
              'Artificial Intelligence',
              'Comparison of Learning Algorithms',
              'Computational Theory',
            ],
            period: 'Sep 2000 - May 2005',
            endtime: 'May 2005',
          },
        ],
      },
      {
        title: 'Projects',
        link: 'https://xianzhe.site/#Project',
        icon: <i class='fi  fi-rr-folder'></i>,
        projects: [
          {
            name: 'Neo4j iGrapher',
            link: 'http://43.128.92.60/',
            outcome: [
              'Software Foundations',
              'Computer Architecture',
              'Algorithms',
              'Artificial Intelligence',
              'Comparison of Learning Algorithms',
              'Computational Theory',
            ],
            period: 'Feb 2024 - May 2024',
            endtime: 'May 2024',
          },
        ],
      },
      {
        title: 'Skill',
        icon: <i class='fi fi-rr-tool-box'></i>,
        skills: {
          Manage: [
            '☆ Jira',
            '☆ SWOT',
            '☆ PEST',
            '☆ Boston Matrix',
            'Gantt Chart',
            'Organizational Behavioral Analysis',
            'strategic management',
          ],
          'Front-end': [
            'HTML',
            'CSS',
            '☆ JavaScript',
            '☆ React',
            'Redux',
            '☆ Tailwind',
            '☆ Framer',
            'Main UI',
            'Animation libs',
          ],
          'Back-end': [
            'MySQL',
            '☆ PostgreSQL',
            '☆ NodeJS',
            '☆ Json',
            'TablePlus',
          ],
          Database: [
            'MySQL',
            '☆ PostgreSQL',
            'Tableau',
            '☆ Python',
            '☆ Neo4j',
            '☆ Pandas',
          ],
          'AI-Algorithm': [
            'Machine Learning',
            '☆ Deep Learning',
            'Natural Language',
            '☆ Recommender System',
          ],
          'IT-Tool': ['☆ Github', '☆ SSH', 'Docker', '☆ Zsh', 'Vim'],
          Text: ['☆ Markdown', 'LaTeX', '☆ Word', '☆ Pages', 'HTML'],
          Slides: ['☆ PowerPoint', '☆ Keynotes', 'Google Slides'],
          Video: [
            '☆ Final Cut Pro',
            'Premiere',
            'After Effects',
            '☆ DaVinci',
            'iMovie',
            '☆ JianYing',
          ],
          Graph: [
            '☆ Photoshop',
            '☆ Lightroom',
            'Illustrator',
            '☆ InDesign',
            'XD',
            '3D Max',
            '☆ Sharp 3D',
          ],
          Language: ['English', '☆ Chinese', '☆ SiChuan Dialect'],
          Music: ['Guitar', '☆ Piano'],
        },
      },
      {
        title: 'Why Me',
        icon: <i className=' fi fi-rr-lightbulb-on'></i>,
        whymes: [
          {
            id: 'LearningAbility',
            advantage: ['Learning Ability'],
            href: 'https://xianzhe.site/whyme/LearningAbility',
            icon: 'fi-rr-graduation-cap',
          },
          {
            id: 'Leadership',
            advantage: ['Leadership'],
            href: 'https://xianzhe.site/whyme/Leadership',
            icon: 'fi-rr-users-alt',
          },
          {
            id: 'Communication',
            advantage: ['Communication Skills'],
            href: 'https://xianzhe.site/whyme/Communication',
            icon: 'fi-rr-comments',
          },
          {
            id: 'ProblemSolving',
            advantage: ['Problem Solving'],
            href: 'https://xianzhe.site/whyme/ProblemSolving',
            icon: 'fi-rr-lightbulb-question',
          },
          {
            id: 'AestheticAttitude',
            advantage: ['Aesthetic Attitude'],
            href: 'https://xianzhe.site/whyme/AestheticAttitude',
            icon: 'fi-rr-sparkles',
          },
          {
            id: 'EmotionalStable',
            advantage: ['Emotional Stability'],
            href: 'https://xianzhe.site/whyme/EmotionalStable',
            icon: 'fi-rr-smile',
          },
        ],
      },
    ],
  };

  const h1 = `font-sans text-${EmphasizeColorLists[forceColor]}-${colorDepth} text-[50px] font-bold  transition-all duration-1000`;
  const normaltext = 'text-[20px]';
  const h2 = `flex text-[30px]  font-black text-${
    EmphasizeColorLists[forceColor]
  }-${colorDepth} group-hover:text-${
    EmphasizeColorLists[forceColor]
  }-${Math.max(
    colorDepth - 200 || 100,
  )} gap-x-[15px] items-center transition-all duration-1000`;
  const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
  const divisionline = ` flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-50  transition-all duration-1000`;
  const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-10  transition-all duration-1000`;

  const h3 = `text-[15px] font-black flex items-center `;
  const timetext = `text-2xl font-[500] text-gray-400  transition-all duration-1000`;
  const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const whymelable = `text-[15px] text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const contentContainer = `flex-1 flex flex-col justify-between`;
  const laptopMode = window.innerWidth > 1024;

  return (
    <motion.div
      layout
      className={`bg-white flex justify-center py-[5%] px-[5%] pb-[30vh] `}
    >
      <DockerBar />
      <div className='max-w-[1000px] min-h-[100vh]'>
        <div className='text-center py-4'>
          <h1 className={h1}>{cvData.header.name}</h1>
          <div className='flex justify-center items-center gap-x-[15px] flex-wrap mt-[25px] '>
            {cvData.header.contacts.map((contact, index) => (
              <React.Fragment key={contact.name}>
                <a
                  href={contact.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth}  flex justify-center items-center gap-x-[5px] `}
                >
                  <div className={icon}>{contact.icon}</div>
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
          <div key={section.title} className=''>
            {/* Headers */}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={section.href}
              className={`flex justify-between items-center gap-x-[20px] mt-[30px] mb-[20px] ${
                section.href && 'group'
              }`}
            >
              <h2 className={h2}>
                {section.icon}
                {section.title}
                {section.link && (
                  <div className='-ml-[10px] flex'>
                    <svg
                      class='w-[20px] h-[20px]  -rotate-45'
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
            {section.content && <p className={normaltext}>{section.content}</p>}
            {/* Highlights*/}
            <div className='flex flex-wrap w-full justify-center md:justify-between gap-[30px]'>
              {section.highlights &&
                section.highlights.map((KeyFeature, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                      viewport={{ margin: '-30%' }}
                      layout
                      className='group'
                    >
                      <a
                        href={`${KeyFeature.href}`}
                        className='w-full flex flex-col item-center md:justify-center justify-start group transition-all'
                      >
                        <div className={whymeIcon}>
                          <i className={`mr-2 ${KeyFeature.icon} `}></i>
                          <N n={KeyFeature.no} d={5} />
                        </div>
                        <div className='flex items-center w-full justify-center'>
                          <div className={whymelable}>
                            <p>{KeyFeature.keyfeature}</p>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                    {index !== section.highlights.length - 1 && (
                      <div
                        className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
            </div>

            {/* Education */}
            {section.edus &&
              section.edus.map((edu, index) => (
                <a
                  href={edu.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={index}
                  className={
                    edu.link &&
                    'group cursor-pointer ' +
                      ' mt-3 flex justify-between items-start ' +
                      ` `
                  }
                >
                  <div className={contentContainer}>
                    <div className='md:flex flex-col justify-start md:flex-row md:justify-between items-center'>
                      <h3 className={h3 + `cursor-pointer group-hover:bold `}>
                        <div>
                          {edu.degree} - {edu.school}
                        </div>
                        {edu.link && (
                          <div>
                            <svg
                              class='w-4 h-4 mx-2  -rotate-45'
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
                      {/* duration */}

                      <div className='flex flex-col justify-end '>
                        <p className={timetext}>{edu.period}</p>
                      </div>
                    </div>

                    <div
                      className={
                        normaltext +
                        `  group-hover:text-${
                          EmphasizeColorLists[forceColor]
                        }-${colorDepth - 100}`
                      }
                    >
                      <p className='mt-1 group-hover:underline '>{edu.major}</p>
                      <p>{edu.gpa}</p>
                      <p>{edu.coursework.join(', ')}</p>
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
                    'group cursor-pointer ' +
                      ' mt-3 flex justify-between items-start ' +
                      ` `
                  }
                >
                  <div className={contentContainer}>
                    <div className='md:flex flex-col justify-start md:flex-row md:justify-between items-center'>
                      <h3 className={h3}>
                        {project.name}
                        {project.link && (
                          <div>
                            <svg
                              class='w-4 h-4 mx-2  -rotate-45'
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
                      {/* duration */}
                      <div className='flex flex-col justify-end '>
                        <p className={timetext}>{project.period}</p>
                      </div>
                    </div>

                    <div className={normaltext}>
                      <p className='mt-1'>{project.major}</p>
                      <p>{project.gpa}</p>
                      <p>{project.outcome.join(', ')}</p>
                    </div>
                  </div>
                </a>
              ))}
            {/* Skills */}
            {section.skills &&
              Object.entries(section.skills).map(([category, list], index) => (
                <div
                  key={index}
                  className='flex justify-between items-start md:items-center gap-x-[30px] py-[15px] md:py-[3px] '
                >
                  <h2 className='font-[500] min-[20%]'>{category}</h2>

                  <span className={division}></span>

                  <p className='text-right'>{list.join('、')}</p>
                </div>
              ))}
            {/* Whyme */}
            <div className='flex flex-wrap w-full justify-center md:justify-between gap-[30px]'>
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
                      <h3 className={whymelable}>{whyme.advantage}</h3>
                    </a>
                    {index !== section.whymes.length - 1 && (
                      <div
                        className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
