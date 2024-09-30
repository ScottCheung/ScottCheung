import React from 'react';
import Data from './resumeData.json';
import { useLanguage } from '../../help/helpFunction';

export default function Resume() {
  const lang = useLanguage();
  const cvData = Data[lang];

  // 统一管理 className 样式
  const styles = {
    container: 'flex flex-col w-full p-4 md:p-12 lg:p-24 text-[15px]',
    header: 'mb-12 text-center',
    headerTitle: 'text-5xl md:text-[30px]  lg:text-[40px] font-bold',
    headerContacts: 'mt-4 text-lg md:text-[15px]  lg:text-[18px]',
    section: 'mb-12',
    sectionTitle: 'mb-4 text-3xl md:text-[17px]  lg:text-[22px] font-semibold',
    highlightsList: 'pl-5 mb-4 list-disc',
    skillsCategory: 'text-2xl md:text-[15px]  lg:text-[17px] font-medium',
    eduTitle: 'text-2xl md:text-[15px]  lg:text-[17px] font-medium',
    workTitle: 'text-2xl md:text-[15px]  lg:text-[17px] font-medium',
    projectTitle: 'text-2xl md:text-[15px]  lg:text-[17px] font-medium',
    contributionList: 'pl-5 list-disc',
    whyMeList: 'pl-5 list-disc',
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{cvData.header.name}</h1>
        <p className={styles.headerContacts}>
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
        <section key={sectionIndex} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>

          {section.content && (
            <p className='mb-4'>{section.content.replace(/<s>/g, '')}</p>
          )}

          {/* Highlights */}
          {section.highlights && (
            <ul className={styles.highlightsList}>
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
              {Object.entries(section.skills).map(([category, list], index) => (
                <div key={index}>
                  <h3 className={styles.skillsCategory}>{category}</h3>
                  <p>{list.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {section.edus && (
            <div className='mb-4'>
              {section.edus.map((edu, index) => (
                <div key={index} className='mb-2'>
                  <h3 className={styles.eduTitle}>{edu.school}</h3>
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
                  <h3 className={styles.workTitle}>{work.company}</h3>
                  <p>
                    {work.title} - {work.location}
                  </p>
                  <p>{work.des.replace(/<s>/g, '')}</p>
                  <p>{work.skill.join(', ')}</p>
                  <ul className={styles.contributionList}>
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
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p>{project.des}</p>
                  <p>{project.skill.join(', ')}</p>
                  <ul className={styles.contributionList}>
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
            <ul className={styles.whyMeList}>
              {section.whymes.map((whyme, index) => (
                <li key={index}>{whyme.advantage}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
