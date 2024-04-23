import React from 'react';
import {
  faPhone,
  faEnvelope,
  faLink,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-solid-svg-icons';
const cvData = {
  header: {
    name: 'Scott Zhang',
    contacts: [
      {
        name: 'Phone',
        icon: 'faPhone',
        link: 'tel:+61 434344292',
      },
      {
        name: 'Email',
        icon: 'faEnvelope',
        link: 'mailto:xianzhe.zhang@student.unsw.edu.au',
      },
      {
        name: 'Website',
        icon: 'faLink',
        link: 'https://xianzhe.site',
      },
      {
        name: 'LinkedIn',
        icon: 'faLinkedin',
        link: 'https://www.linkedin.com/in/xianzhe1110/',
      },
      {
        name: 'GitHub',
        icon: 'faGithub',
        link: 'https://xianzhe.site/project',
      },
    ],
  },
  sections: [
    {
      title: 'Summary',
      content:
        'This is an example resume to showcase the capabilities of the open-source LaTeX CV generator, RenderCV. A substantial part of the content is taken from here, where a clean and tidy CV pattern is proposed by Gayle L. McDowell.',
    },
    {
      title: 'Education',
      entries: [
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
          period: 'Sept. 2000 to May 2005',
        },
      ],
    },
  ],
};

export default function Resume() {
  return (
    <div className='font-sans text-blue-900'>
      <div className='text-center py-4'>
        <h1 className='text-4xl font-bold'>{cvData.header.name}</h1>
        <div className='font-sans text-blue-900'>
          <div className='text-center py-4'>
            <h1 className='text-4xl font-bold'>{cvData.header.name}</h1>
            {cvData.header.contacts.map((contact) => (
              <p key={contact.name} className='text-base'>
                <a href={contact.link} className='text-blue-900 underline'>
                  <FontAwesomeIcon
                    icon={icons[contact.icon]}
                    className='mr-2'
                  />
                  {contact.name}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      {cvData.sections.map((section) => (
        <div key={section.title} className='mt-8 px-8'>
          <h2 className='text-2xl font-bold text-blue-900 border-b-2 border-blue-900'>
            {section.title}
          </h2>
          {section.content && <p className='mt-2'>{section.content}</p>}
          {section.entries &&
            section.entries.map((entry, index) => (
              <div key={index} className='mt-3'>
                <h3 className='text-xl'>
                  {entry.degree} - {entry.school}
                </h3>
                <p className='mt-1'>Major: {entry.major}</p>
                <p>GPA: {entry.gpa}</p>
                <p>Coursework: {entry.coursework.join(', ')}</p>
                <p>Period: {entry.period}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
