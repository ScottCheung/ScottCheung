import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import N from './Num';
import BG from './gfBG';

// loaddata
const language = Database.PersonalInfo.Capability.language;
const personality = Database.PersonalInfo.Capability.personality;
const apps = Database.PersonalInfo.Capability.Apps;
const frontEnd = Database.PersonalInfo.Capability['front-end'];
const BackendEnd = Database.PersonalInfo.Capability['backend-end'];
const database = Database.PersonalInfo.Capability.database;
const algorithm = Database.PersonalInfo.Capability.Algorithm;
const other = Database.PersonalInfo.Capability.other;

// animation
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const fastWelcomevisblecontainer =
  Database.Animation.Variant.fastWelcomevisblecontainer;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const ProgressBar = Database.Animation.Transition.ProgressBar;
const ProgressBarvisblecontainer =
  Database.Animation.Variant.ProgressBarvisblecontainer;
const ProgressBarItem = Database.Animation.Variant.ProgressBarItem;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const item = Database.Animation.Variant.WelcomeItem;

const tabs = [
  {
    label: ['Frontend', '前端'],
    color1: 'red-500',
    color2: 'red-700',
    content: 'Content for Frontend Tab',
  },
  {
    label: ['Backend', '后端'],
    color1: 'orange-500',
    color2: 'amber-500',
    content: 'Content for Backend Tab',
  },
  {
    label: ['DataBase', '数据库'],
    color1: 'sky-500',
    color2: 'emerald-500',
    content: 'Content for Data Tab',
  },
  {
    label: ['Algorithm', '算法'],
    color1: 'cyan-500',
    color2: 'blue-500',
    content: 'Content for Algorithm Tab',
  },
  {
    label: ['Other', '其他'],
    color1: 'indigo-500',
    color2: 'pink-500',
    content: 'Content for Other Tab',
  },
];

function Gooduser() {
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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

  const Gooduser = (
    // {/* Good User */}
    <motion.div
      className='grid-item large-span-6 small-span-12 grid-item-check-in will-change carnival-item-in-view '
      data-component-list='CarnivalInlineVideo TileOverlay WillChange'
      data-analytics-section-engagement='name:let your friend know when you arrive safely'
      data-tile-name='check-in'
    >
      <motion.div className='tile tile-with-overlay'>
        <motion.div
          style={{ background: 'linear-gradient(45deg,#767676,#1d1d1f)' }}
          className='tile-content tile-rounded '
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: '10px' }}
            whileInView={{ opacity: 1, scale: 1, y: '0px' }}
            // style={{ background: 'linear-gradient(45deg,#767676,#1d1d1f)' }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 1.3,
            }}
            className='tile-header pb-[30px] tile-rounded '
          >
            <motion.div className='tile-headline typography-subsection-headline text-white'>
              {lang == 0 && 'Good User'}
              {lang == 1 && '绝对的能手'}
            </motion.div>
            <p className='tile-copy typography-subsection-copy text-white pb-[20px]'>
              {lang == 0 &&
                SelectText(
                  "As a proficient user, I've mastered every app I need, ensuring that work is [flawless] and [efficient].",
                  'yellow-500',
                )}
              {lang == 1 &&
                SelectText(
                  '作为一位熟练的使用者，我掌握了我所需的每个应用程序，确保每一项工作都完成得[无懈可击]且[高效]。',
                  'yellow-500',
                )}
            </p>
          </motion.div>
          <motion.div
            // style={{ background: 'linear-gradient(135deg,#767676,#1d1d1f)' }}
            className='mb-[30px] p-[28px] rounded-[28px] '
          >
            <motion.div
              variants={fastWelcomevisblecontainer}
              initial='hidden'
              whileInView='visible'
              // viewport={{ once: true }}

              className=' justify-center items-center w-full h-full grid grid-cols-4 content-center    '
            >
              {apps.map((app, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.5,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.5 } }}
                >
                  <motion.div className='flex-shrink-0 flex justify-center'>
                    <img
                      key={index}
                      className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   p-2  rounded-[9px]'
                      src={app.src}
                      alt={app.alt}
                    />
                  </motion.div>
                  <motion.div className='text-center pt-3 text-[14px] text-white typography-subsection-headline '>
                    {app.alt}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <input
          type='checkbox'
          className='tile-overlay-toggle'
          id='tile-overlay-toggle-check-in'
        />
        <motion.div className='tile-overlay'>
          <label
            tabIndex={0}
            className='tile-button-wrapper'
            htmlFor='tile-overlay-toggle-check-in'
          >
            <span className='tile-button'>
              <svg
                className='tile-icon-alt'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z' />
              </svg>
            </span>
            <span
              className='tile-button-text'
              role='button'
              aria-expanded='false'
              aria-controls='content-toggle-check-in'
            ></span>
          </label>
          <motion.div
            className='tile-overlay-content'
            style={{
              background: 'linear-gradient(135deg,#767676,#1d1d1f)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1,
                delayChildren: 0,
              }}
              className='tile-overlay-header'
              id='content-toggle-check-in'
            >
              <h3 className='tile-overlay-headline typography-subsection-headline'>
                {lang == 0 && 'Good User'}
                {lang == 1 && '绝对的能手'}
              </h3>
            </motion.div>
            <motion.div className='tile-overlay-body'>
              <p className='tile-overlay-copy typography-subsection-copy'>
                {lang == 0 &&
                  "I have accumulated extensive experience in the IT field, proficiently mastering a variety of professional software. For example, I am well-versed in the Microsoft Office suite, including Word, Excel, and PowerPoint, allowing me to efficiently handle document editing, data analysis, and presentation creation. Additionally, I possess expertise in Adobe's suite of software, such as Photoshop, Illustrator, and After Effects, enabling me to craft exquisite designs and animated effects. Regarding development, I excel in utilizing tools like Visual Studio Code, PyCharm, and other IDEs, along with version control tools like GitHub. In past projects, I have successfully leveraged these software tools to accomplish a diverse range of tasks, showcasing my professional skills and demonstrating a high level of proficiency. I have a strong passion for learning new technologies, consistently staying updated on the latest industry trends to uphold my competitiveness."}
                {lang == 1 &&
                  '在IT领域，我积累了丰富的经验，熟练掌握了多种专业软件。例如，我熟悉Microsoft Office套件，包括Word、Excel和PowerPoint，使我能够高效进行文档编辑、数据分析和演示文稿创建。此外，我精通Adobe软件套件，如Photoshop、Illustrator和After Effects，使我能够实现精致的设计和动画效果。在开发方面，我擅长使用诸如Visual Studio Code、PyCharm等集成开发环境（IDE）。其次，也熟悉GitHub等版本控制工具。在过去的项目中，我成功地运用这些软件工具完成了各种任务，展示了我的专业技能和高水平的熟练程度。我对学习新技术充满兴趣，始终保持对行业最新趋势的更新，以保持自己的竞争力。'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Gooduser;
}

export default Gooduser;
