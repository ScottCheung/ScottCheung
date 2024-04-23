import React, { useState } from 'react';

const EmphasizeColorLists = [
  'blue',
  'emerald',
  'pink',
  'green',
  'orange',
  'amber',
  'lime',
  'purple',
  'sky',
  'red',
  'blue',
];

export default function Resume() {
  const [view, setView] = useState({ forceColor: 0 });
  const [colorDepth, setColorDepth] = useState(900);
  const cvData = {
    header: {
      name: 'Scott Zhang',
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
              className={`fill-${
                EmphasizeColorLists[view.forceColor]
              }-${colorDepth}`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
            </svg>
          ),
          link: 'https://www.linkedin.com/in/xianzhe1110/',
        },
        {
          name: 'Project',
          icon: <i class='fi fi-rr-folder'></i>,
          link: 'https://xianzhe.site/project',
        },
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
        title: 'Education',
        href: 'https://xianzhe.site/#Education',
        icon: <i class='fi fi-rr-graduation-cap'></i>,
        edus: [
          {
            degree: 'BE',
            school: 'SouthWest University of Science and Technology',
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
          },
        ],
      },
      {
        title: 'Why Me',
        href: 'https://xianzhe.site/#whyme',
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

  const h1 = `font-sans text-${
    EmphasizeColorLists[view.forceColor]
  }-${colorDepth} text-[50px] font-bold`;
  const normaltext = 'text-[15px]';
  const h2 = `flex text-[30px]  font-black text-${
    EmphasizeColorLists[view.forceColor]
  }-${colorDepth} gap-x-[15px] items-center`;
  const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]`;
  const divisionline = ` flex-1 h-[2px] m-0 rounded-full bg-${
    EmphasizeColorLists[view.forceColor]
  }-${colorDepth} opacity-50`;
  const h3 = `text-xl font-black`;
  const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400`;
  const whymelable = `text-[15px] text-gray-400`;
  // const normaltext = 'text-base';
  // const h2 = `text-6xl font-black text-${EmphasizeColorLists[view.forceColor]}-${colorDepth} `; // 使用更大的尺寸 6xl 来增加 h2 标签的字体大小
  // const icon = `w-4 text-base mr-1 mt-0.5`; // 使用 rem 单位, text-base 为字体大小，w-4, mr-1, mt-0.5 对应宽度和边距
  // const divisionline = `w-full h-0.5 m-0 rounded-full bg-${
  //   EmphasizeColorLists[view.forceColor]
  // }-${colorDepth} opacity-50`; // 使用 rem 单位使线条高度更适应不同屏幕
  // const h3 = `text-2xl font-black`; // 将 h3 的字体大小增加到 2xl

  return (
    <div className='bg-white flex justify-center py-[5%] px-[5%] '>
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
                  className={`text-${
                    EmphasizeColorLists[view.forceColor]
                  }-${colorDepth}  flex justify-center items-center gap-x-[5px] `}
                >
                  <div className={icon}>{contact.icon}</div>
                  {contact.name}
                </a>
                {index !== cvData.header.contacts.length - 1 && (
                  <div
                    className={`w-[1px] h-4 bg-${
                      EmphasizeColorLists[view.forceColor]
                    }-${colorDepth}`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {cvData.sections.map((section) => (
          <div key={section.title} className=''>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={section.href}
              className='flex justify-between items-center gap-x-[20px] mt-[30px] mb-[20px]'
            >
              <h2 className={h2}>
                {section.icon}
                {section.title}
              </h2>
              <span className={divisionline}></span>
            </a>

            {section.content && <p className={normaltext}>{section.content}</p>}
            {/* Education */}
            {section.edus &&
              section.edus.map((edu, index) => (
                <div key={index} className='mt-3'>
                  <h3 className={h3}>
                    {edu.degree} - {edu.school}
                  </h3>
                  <div className={normaltext}>
                    <p className='mt-1'>{edu.major}</p>
                    <p>{edu.gpa}</p>
                    <p>{edu.coursework.join(', ')}</p>
                    <p>{edu.period}</p>
                  </div>
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
                    >
                      <div key={index} className={whymeIcon}>
                        <i className={whyme.icon}></i>
                      </div>
                      <h3 className={whymelable}>{whyme.advantage}</h3>
                    </a>
                    {index !== section.whymes.length - 1 && (
                      <div
                        className={`w-[1px] h-4 bg-${
                          EmphasizeColorLists[view.forceColor]
                        }-${colorDepth}`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
