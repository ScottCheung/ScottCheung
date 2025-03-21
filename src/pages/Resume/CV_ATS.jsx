/** @format */

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Data from './resumeData.json';
import { useLanguage } from '../../help/helpFunction';

export default function Resume() {
  const lang = useLanguage();
  const cvData = Data[lang];
  const resumeRef = useRef(); // Ref for the printable content

  // Function to trigger the PDF download
  const handlePrint = useReactToPrint({
    content: () => {
      return resumeRef.current;
    }, // 必须是返回 resumeRef.current 的函数
    documentTitle: 'Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      body {
        margin: 0;
        padding: 0;
      }
    `,
  });

  return (
    <div className='flex flex-col items-center py-[200px]'>
      {/* Resume content */}
      <div className='relative w-full max-w-screen-md rounded-md shadow-2xl col bg-sky-50 min-h-full'>
        {/* Sticky Button to download PDF */}
        <button
          className='sticky top-0 left-0 right-0 z-[1000] px-8 py-4 mb-6 text-white bg-blue-500 rounded-md'
          onClick={(e) => {
            e.preventDefault(); // 防止默认事件
            handlePrint(); // 触发打印
          }}
        >
          Download PDF
        </button>

        <div
          ref={resumeRef}
          className='flex flex-col w-full p-4 md:p-12 lg:p-24'
        >
          {/* Header Section */}
          <header className='mb-12 text-center'>
            <h1 className='text-5xl font-bold '>{cvData.header.name}</h1>
            <p className='mt-4 text-lg'>
              {cvData.header.contacts.map((contact, index) => (
                <span key={index}>
                  {contact.name}
                  {index < cvData.header.contacts.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </header>

          {/* Sections */}
          {cvData.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className='mb-12'>
              <h2 className='mb-4 text-3xl font-semibold my-[50px] text-[200px]'>
                {section.title}
              </h2>

              {section.content && (
                <p className='mb-4'>{section.content.replace(/<s>/g, '')}</p>
              )}

              {/* Highlights */}
              {section.highlights && (
                <ul className='pl-5 mb-4 list-disc'>
                  {section.highlights.map((highlight, index) => (
                    <li key={index}>
                      {highlight.no} {highlight.keyfeature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              {section.skills && (
                <div className='mb-4'>
                  {Object.entries(section.skills).map(
                    ([category, list], index) => (
                      <div key={index}>
                        <h3 className='text-2xl font-medium'>{category}</h3>
                        <p>{list.join(', ')}</p>
                      </div>
                    ),
                  )}
                </div>
              )}

              {/* Education */}
              {section.edus && (
                <div className='mb-4'>
                  {section.edus.map((edu, index) => (
                    <div key={index} className='mb-2'>
                      <h3 className='text-2xl font-medium'>{edu.school}</h3>
                      <p>{edu.period}</p>
                      <p>
                        {edu.degree} - {edu.major}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Work Experience */}
              {section.WorkExperience && (
                <div className='mb-4'>
                  {section.WorkExperience.map((work, index) => (
                    <div key={index} className='mb-4'>
                      <h3 className='text-2xl font-medium'>{work.company}</h3>
                      <p>
                        {work.title} - {work.location}
                      </p>
                      <p>{work.des.replace(/<s>/g, '')}</p>
                      <p>{work.skill.join(', ')}</p>
                      <ul className='pl-5 list-disc'>
                        {work.contribution.map((item, index) => (
                          <li key={index}>
                            <strong>{item.title}</strong>
                            <p>{item.description.replace(/<s>/g, '')}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects */}
              {section.projects && (
                <div className='mb-4'>
                  {section.projects.map((project, index) => (
                    <div key={index} className='mb-4'>
                      <h3 className='text-2xl font-medium'>{project.name}</h3>
                      <p>{project.des}</p>
                      <p>{project.skill.join(', ')}</p>
                      <ul className='pl-5 list-disc'>
                        {project.contribution.map((item, index) => (
                          <li key={index}>
                            <strong>{item.title}</strong>
                            <p>{item.description.replace(/<s>/g, '')}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Why me */}
              {section.whymes && (
                <ul className='pl-5 list-disc'>
                  {section.whymes.map((whyme, index) => (
                    <li key={index}>{whyme.advantage}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
