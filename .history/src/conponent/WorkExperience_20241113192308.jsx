/** @format */

const h1 = `font-sans tracking-wide text-sky-700 text-[30px] md:text-[50px]  font-bold  transition-all duration-1000`;
const normaltext = 'text-[15px] text-jusify transition-all duration-1000';
const h2 = `flex text-[30px]  font-black text-sky-700 group-hover:text-sky-400,
)} gap-x-[15px] items-center transition-all duration-1000`;
const printWidth = 'max-w-[1300px] mt-[50px]';
const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-sky-700 opacity-10  transition-all duration-1000`;

const h3 = `text-[15px] font-black flex items-center `;
const timetext = `text-2xl font-[500] text-gray-400 items-start transition-all duration-1000`;
const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-sky-700`;
const whymelable = `text-[15px] text-gray-400 group-hover:text-sky-700`;
const contentContainer = `flex-1 flex flex-col justify-between  animate__animated animate__fadeInUp`;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const divisionline = `flex duration-0 flex flex-1 h-[5px] w-[2px] rounded-full bg-sky-700  transition-all duration-1000`;
const parseText = (text) => {
  const parts = text.split(/(<s>.*?<s>)/).map((part, index) => {
    if (part.startsWith('<s>') && part.endsWith('<s>')) {
      return (
        <span
          key={index}
          className={`text-sky-700 transition-all  duration-300   opacity-100 font-bold mx-[3px] `}
        >
          {part.replace(/<s>/g, '')}
        </span>
      );
    }
    return (
      <span className='text-gray-700 transition-all duration-500 ' key={index}>
        {part}
      </span>
    );
  });
  return parts;
};

const cardData = [
  {
    id: 3,
    title: 'Project Manager',
    type: 'Full Time',
    company: 'Zhaoshi Education',
    startTime: 'July 2018',
    endTime: 'May 2018',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg',
    backgroundColor: 'bg-blue-300',
    skill: [
      'Student Recruitment',
      'Teacher Interviewing',
      'Customer Complaint Handling',
      'Procurement Management',
      'Staff Management',
      'Scheduling',
      'Time Management',
      'Communication Skills',
    ],
    points: [
      {
        title: 'Student Recruitment',
        description:
          'Successfully recruited over 100 students, enhancing enrollment numbers and contributing to the growth of the institution.',
      },
      {
        title: 'Teacher Interviewing',
        description:
          'Conducted interviews and evaluations for potential teachers, ensuring the hiring of qualified and competent staff.',
      },
      {
        title: 'Customer Complaint Handling',
        description:
          'Efficiently resolved over 50 customer complaints, improving overall customer satisfaction and retention rates.',
      },
      {
        title: 'Procurement Management',
        description:
          'Managed the procurement of desks, chairs, and other classroom necessities, ensuring timely and cost-effective acquisitions.',
      },
      {
        title: 'Staff Management',
        description:
          'Oversaw daily management of teachers, including meal coordination, sleep schedules, and shift planning, ensuring smooth operations and staff well-being.',
      },
      {
        title: 'Scheduling',
        description:
          'Developed and maintained teacher schedules, optimizing resource allocation and minimizing conflicts.',
      },
    ],
  },
  {
    id: 2,
    title: 'Web Developer',
    type: 'Contract',
    company: 'Domi Group Buying',
    startTime: 'Aug 2018',
    endTime: 'Sep 2019',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg',
    backgroundColor: 'bg-red-300',
    skill: [
      'React',
      'HTML',
      'CSS',
      'JavaScript',
      'Framer Motion',
      'Tailwind',
      'Data Analysis',
      'Shopify',
      'Google Chrome DevTools',
      'Figma',
      'Photoshop(PS)',
      'TypeScript',
      'SEO Optimization',
      'Performance Optimization',
    ],
    points: [
      {
        title: 'UI/UX Interface Enhancement',
        description:
          'Enhanced UI/UX using Photoshop and Figma, integrating a Customer Behaviour Analytics module that increased user engagement by 54% through improved gaze metrics.',
      },
      {
        title: 'E-commerce Platform Optimization',
        description:
          'Overhauled the e-commerce platform with HTML, CSS, JavaScript, and React, enhancing user experience and payment processes. Designed dedicated product pages and promotional posters, significantly boosting product visibility and sales.',
      },
      {
        title: 'SEO and Performance Optimization',
        description:
          'Boosted website performance and SEO by 22% and 14% respectively, utilizing Google Chrome DevTools and Lighthouse for targeted optimizations.',
      },
      {
        title: 'Performance Reporting System Development',
        description:
          'Developed a dynamic performance reporting system using React and Tailwind, enhanced with Framer Motion animations. This system features Excel export capabilities, providing management with detailed, actionable insights.',
      },
    ],
  },
  {
    id: 1,
    title: 'Financial Assistant',
    type: 'Part Time',
    company: 'SWUST Analytical Testing Centre',
    startTime: 'Mar 2021',
    endTime: 'Feb 2022',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg',
    backgroundColor: 'bg-blue-300',
    skill: [
      'Financial Auditing',
      'Contract Management',
      'Compliance Review',
      'Business Process Automation',
      'Report Analysis',
      'Time Management',
      'Attention to Detail',
      'Communication Skills',
      'Problem-Solving Skills',
      'Office Automation Software Proficiency',
    ],
    points: [
      {
        title: 'Achieving Excellence in Business Audits',
        description:
          'Responsible for auditing the invoices of the business office up to RMB1,000,000, drawing up contracts up to RMB100,000, compliance review and signing. ',
      },
      {
        title: 'Streamlined Business Audit Processes',
        description:
          'The business is responsible for the assessment and audit of the business system and occasional audits of the accounts flow according to the monthly and annual reports of the business. ',
      },
      {
        title: 'Efficiency Improvement through Office Automation Software',
        description:
          'During the course of the work, it was found that the business progress audit was a single simple and time-consuming task, and with the help of office automation software, the business audit workload of this position for a year was completed in half a day, receiving high praise and commendation from the Business Office Director.',
      },
    ],
  },
  {
    id: 0,
    title: 'Uber Eats Delivery Driver',
    type: 'Part Time',
    company: 'Uber Eats',
    startTime: 'Dec 2022',
    endTime: 'July 2023',
    image:
      'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1670495515/assets/69/2878ac-8a8e-48fe-8e9a-cdcd73a3e263/original/Courier_With_Bags_v2.png',
    backgroundColor: 'bg-green-300',
    skill: [
      'Time Management',
      'Customer Service',
      'Navigation and Route Planning',
      'Problem-Solving Skills',
      'Attention to Detail',
      'Communication Skills',
      'Physical Stamina',
      'Safety Awareness',
    ],
    points: [
      {
        title: 'Efficient Delivery Management',
        description:
          'Completed over 500 deliveries with an average delivery time of under 30 minutes, ensuring timely and accurate service to customers.',
      },
      {
        title: 'Customer Interaction',
        description:
          'Maintained high customer satisfaction through professional and courteous communication, resolving any issues promptly to ensure positive experiences.By editing some messages in advance, it improves the response time of interaction with customers and significantly increases user satisfaction.',
      },
      {
        title: 'Route Optimization',
        description:
          'Utilized navigation tools and local knowledge to optimize delivery routes, reducing costs and improving delivery efficiency.',
      },
      {
        title: 'Safety and Compliance',
        description:
          'Strictly adhered to traffic laws and safety guidelines, achieving a record of zero accidents or violations during the entire tenure.',
      },
    ],
  },
  {
    company: 'Wolli Software',
    title: 'Web Developer',
    location: 'Sydney',
    type: 'Full Time',
    startTime: 'Sep 2023',
    endTime: 'Present',
    name: 'Gobell Membership System',
    des: 'Developed a membership management system for Gobell from scratch, including features like member login, registration, orders, products, payment processing, deposits, and credential verification.',
    tag: 'Web Development',
    link: 'https://www.linkedin.com/company/wolli-software/posts/?feedView=all',
    image:
      'https://media.istockphoto.com/id/1492719675/photo/multicultural-professionals-driving-innovation-in-sydneys-office-environment.jpg?s=612x612&w=0&k=20&c=jv1hAPk8cTe3ryKMtdlvBXR3YaWmMFG8DS2GRBu1-1E=',
    backgroundColor: 'bg-sky-300',
    skill: [
      'HTML',
      'CSS',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind',
      'Framer Motion',
      'Redux',
      'i18n',
      'Figma',
      'AWS Cloud',
      'jsBarcode',
      'QRcode',
    ],
    points: [
      {
        title: 'Developed UI Components',
        link: 'https://gobell.vercel.app/',
        description:
          'converted <s>Figma<s> designs into interactive and responsive react components using <s>TypeScript<s>, <s>ReactJS<s>, and <s>Next.js<s> base on <s>best practices<s>.',
      },
      {
        title: 'Performance Optimization',
        description:
          'used Google <s>Lighthouse<s> for performance analysis to optimize the web application.',
      },
      {
        title: 'Integrated RESTful APIs',
        description:
          'Developed <s>RESTful APIs<s> using <s>C#<s> and <s>ASP.NET<s> to facilitate communication ( APIs integration ) between the front-end and back-end, ensuring secure and efficient data transfer ensuring seamless user experiences.',
      },
      {
        title: 'Implemented unit tests',
        description:
          'Implemented unit tests using <s>Jest<s> and <s>React Testing Library<s> to ensure component functionality and stability.',
      },
      {
        title: 'Built the front-end architecture',
        link: 'https://github.com/Xianzhezhang97/gobell',
        description:
          'Built the front-end architecture, using <s>Next.js<s> to ensure <s>SEO Friendly<s> and integrated <s>Redux<s> for efficient state management, making the project scalable, using <s>GIT<s> easy to manage.',
      },
      {
        title: 'Error handling',
        description:
          'Error handling, identifying and diagnosing root causes of errors in real-time. Collaborated with cross-functional teams to develop and test patches, ensuring minimal downtime and impact on users.',
      },
      {
        title: 'Led UI/UX Design',
        link: 'xianzhe.site/gobelldesign',
        description:
          'designed client/business UI/UX interfaces, promotional flyers, brochures, pull-up banners and 3 membership cards using <s>Figma<s> and <s>Photoshop<s>.',
      },
      {
        title: 'UI/UX Enchancement',
        link: 'https://gobell.vercel.app/',
        description:
          'UI/UX Enchancement. Developed and customized animations using  Framer Motion for UI. Improved interface responsiveness at least by <s>20%.<s>',
      },
      {
        title: 'Established design system',
        link: 'https://gobell.vercel.app/test',
        description:
          'for front-end development, including color schemes, typography, and spacing rules, reducing team communication overhead and cross-browser compatibility and responsiveness.',
      },
      {
        title: 'Implemented CI/CD',
        link: 'm.gobell.au/',
        description:
          'created script to deploy web application to <s>AWS EC2<s>, <s>AWS S3 bucket<s>.',
      },
    ],
  },
];

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../data/Database.json';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../help/helpFunction';
import CtButton from './ctButton';
import { useAppContext } from '../help/ContextManager';
import ScrollableContainer from './ScrollableContainer';

function Card({ card, onClick }) {
  return (
    <motion.div
      layout
      key={card.id}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      initial={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.001, y: -5 }}
      whileTap={{ scale: 0.99 }}
      layoutId={`card-container-${card.type + card.company + card.id}`}
      className={`relative bg-white transform-gpuu cursor-pointer w-auto h-auto flex flex-col lg:w-[400px] lg:p-[28px] shadow-[10px] rounded-[14px] lg:rounded-[28px] overflow-hidden lg:overflow-visible  lg:hover:${card.backgroundColor}/20`}
      onClick={() => onClick(card.id)}
    >
      <div className='lg:absolute  -left-[30px] -top-[30px] right-[60px] lg:rounded-[28px]  overflow-hidden aspect-[16/9] '>
        <motion.img
          layout
          layoutId={`card-img-${card.id}`}
          src={card.image}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='object-cover object-bottom w-full shadow-lg'
        />
        {/* <motion.kbd
          layout
          layoutId={'card-type' + card.type + card.company}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          class=' absolute top-[20px] right-[20px]  lg:bottom-[20px] lg:right-[20px] flex-shrink-0 flex w-[35px] h-[35rpx] lg:w-[35px] lg:h-[35px]  items-center justify-center  lg:p-[20px] text-[18px] lg:text-[20px] font-semibold text-sky-800 bg-sky-100 border border-sky-200 rounded-full darrk:bg-sky-600 darrk:text-sky-100 darrk:border-sky-500'
        >
          {card.type[0]}
        </motion.kbd> */}
        ``
      </div>

      <div className='flex flex-col  p-[14px] lg:p-[0px] lg:mt-[60%]  items-start justify-start h-[130px] animate__animated animate__fadeInUp'>
        <h1 className='font-bold  text-[17px] md:text-[25px] lg:text-[28px] text-gray'>
          {card.title}
        </h1>
        <h2 className='flex  text-[11px] md:text-[16px] lg:text-[21px] text-gray-400'>
          {card.company}
        </h2>
      </div>
    </motion.div>
  );
}

function Period({ period }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='-mx-[18%] mt-[10vh] hidden relative lg:flex  items-center justify-between'
    >
      <div className='absolute  -mt-[100px]  flex w-[60%] justify-between items-center py-[20px] text-[20px] text-gray-500 font-serif'>
        <div>{period.startTime}</div>
        <div>{period.endTime}</div>
      </div>
      <span className={divisionline}></span>
      <div className='absolute right-0 bg-sky-700 rounded-full w-[30px] h-[30px]'></div>
    </motion.div>
  );
}

function WorkExperience() {
  const lang = useLanguage();
  const navigate = useNavigate();
  const { Components, setComponents } = useAppContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const containerRef = useRef(null);
  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    BanScroll();
    setIsOpen(true);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'hide',
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCard(null);
    UnBanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'visible',
    }));
  };
  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.marginRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.opacity = 0;
  };

  const UnBanScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.marginRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.opacity = 1;
  };

  return (
    <motion.div
      layout
      id='WorkExperience'
      className='flex flex-col items-center justify-center w-full min-h-[100vh]'
    >
      <ScrollableContainer
        toRight={true}
        gap={80}
        containerPY={50}
        header={{
          cont: lang == 0 ? 'Work Experience' : '工作经验',
          icon: 'fi-rr-tool-box',
        }}
      >
        <AnimatePresence mode='wait'>
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={WelcomeItem}
              transition={StagerFadeInUp}
              className='col-span-6'
            >
              <Card card={card} onClick={() => handleCardClick(card)} />
              <Period period={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollableContainer>
      {/* </motion.div> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className='fixed  inset-0 top-0 bottom-0  w-full h-full z-30  bg-gray-900/75 backdrop-blur-[20px]'
          >
            <div className='relative flex items-center justify-center w-full h-full '>
              <CtButton
                type={'x'}
                key={'close'}
                position={'top-[30px] right-[30px] ESC  '}
                btnsize={'60px'}
                icon={'w-[20px] h-[20px] rotate-0'}
                className='z-40'
                onClick={(event) => {
                  event.stopPropagation();
                  handleClose();
                }}
              />

              {isOpen && (
                <motion.div
                  className='sticky top-0 flex'
                  layout
                  layoutId={`card-container-${
                    selectedCard.type + selectedCard.company + selectedCard.id
                  }`}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div className='relative  z-0 flex transform-gpuu lg:rounded-[28px]  flex-wrap  max-h-[100vh] lg:max-h-[90vh] overflow-auto lg:overflow-hidden  w-full gap-y-[50px]  justify-center items-start bg-white shadow-lg   '>
                    <motion.div
                      layoutId={`card-img-${selectedCard.id}`}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`${windowWidth > 1440 ? 'lg:max-w-[400px] w-full h-full' : 'w-full h-[300px]'} object-center  object-cover flex md:p-0 aspect-[4/3] z-50`}
                    >
                      <motion.img
                        layout
                        src={selectedCard.image}
                        alt='detail'
                        className='object-cover object-center w-full h-full'
                      />
                    </motion.div>

                    <motion.div
                      layout
                      className='flex flex-col w-full max-w-[800px] m-[40px] lg:pt-0 z-40 pb-[50px]  h-[70vh]  lg:overflow-auto'
                    >
                      <div className='flex flex-col gap-8 '>
                        <div className='flex items-baseline gap-12'>
                          <div className='flex font-bold text-7xl'>
                            {selectedCard.title}
                          </div>
                          {/* <motion.div
                            layoutId={
                              'card-type' +
                              selectedCard.type +
                              selectedCard.company
                            }
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            class='flex items-center justify-center px-[20px] py-[5px] text-xl font-semibold text-sky-800 bg-sky-100 border border-sky-200 rounded-full darrk:bg-sky-600 darrk:text-sky-100 darrk:border-sky-500'
                          >
                            {selectedCard.type}
                          </motion.div> */}
                        </div>

                        <div className='flex-col items-start justify-start md:flex md:flex-row md:justify-between overflow-hidden h-[30%]  pb-8'>
                          <h2 className='flex w-[70%] text-[13px] md:text-[16px] lg:text-[21px] text-gray-400'>
                            {selectedCard.company}
                          </h2>
                          {/* duration */}
                          <div className='flex justify-end '>
                            <p className={timetext}>
                              {selectedCard.startTime +
                                ' - ' +
                                selectedCard.endTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={contentContainer}>
                        <div className={normaltext + ' pb-[10vh] md:pb-[0vh]'}>
                          <p>
                            <h3 className='text-[20px] font-black'>Skill:</h3>{' '}
                            {selectedCard.skill.join(',  ')}
                          </p>
                          <h3 className='text-[20px] font-black'>
                            Achievements:
                          </h3>
                          <ul className='pl-5 '>
                            {selectedCard.points.map((item, index) => (
                              <li key={index} className='mb-2 text-justify'>
                                <strong className='block mr-2 font-semibold'>
                                  ▸ {item.title}:
                                </strong>
                                {parseText(item.description)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WorkExperience;
