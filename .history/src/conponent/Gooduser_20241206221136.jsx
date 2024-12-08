/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import N from './Num';
import Toggle from './Toggle';

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
  const [open, setOpen] = useState(false);
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
    <motion.div className='col-span-12 md:col-span-6 lg:col-span-8'>
      <motion.div className='h-full rounded-[28px] overflow-hidden bg-gradient-to-br to-[30%] hover:to-[25%] transition-all from-blue-900 to-black '>
        <motion.div
          layout
          style={{
            backgroundImage: `url(https://img.picgo.net/2024/12/06/gooduserab13df0e7b6d38c8.jpg)`,
            backgroundSize: open ? '150% auto' : '100% auto',
            // opacity: open ? 0.4 : 1,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
          }}
          // style={{

          //   background: `linear-gradient(45deg, rgba(118, 118, 118, 0.4), rgba(29, 29, 31, 1))`,
          // }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: '10px' }}
          whileInView={{ opacity: 1, scale: 1, y: '0px' }}
          // style={{ background: 'linear-gradient(45deg,#767676,#1d1d1f)' }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1.3,
          }}
          className='p-[20px] lg:p-[40px]  '
        >
          <div className='flex items-center justify-between pb-4'>
            <motion.div
              style={{
                lineHeight: 1.1904761905,
                fontWeight: 600,
                letterSpacing: '0.011em',
                // fontFamily: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
              }}
              transition={{ duration: 0.5 }}
              className='text-white font-[600] text-[30px]'
            >
              {lang == 0 && 'Good User'}
              {lang == 1 && '绝对的能手'}
            </motion.div>
            <motion.button
              layout
              transition={{ duration: 0.5 }}
              onClick={() => setOpen(!open)}
              className='flex'
            >
              <Toggle isExpanded={open} />
            </motion.button>
          </div>
          <motion.div
            style={{
              lineHeight: 1.4211026316,
              fontWeight: 600,
              letterSpacing: '0.012em',
            }}
            className='text-[15px] flex flex-col lg:text-[20px]  text-white pb-[50px]'
          >
            <motion.p layout transition={{ duration: 1 }} className='mb-[28px]'>
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
            </motion.p>
            <AnimatePresence>
              {open && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8, height: 0 }}
                  animate={{ opacity: 1, scale: 1, height: 'auto' }}
                  exit={{ opacity: 0, scale: 0.8, height: 0 }}
                  className='flex text-white '
                  layout
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {lang == 0 &&
                    "I have amassed extensive experience in the IT field, demonstrating proficiency with a wide array of professional software. I am adept at utilizing the Microsoft Office suite, including Word, Excel, and PowerPoint, to efficiently manage document editing, data analysis, and presentation creation. Additionally, I have expertise in Adobe's suite of software, such as Photoshop, Illustrator, and After Effects, enabling me to produce high-quality designs and animated effects.In the realm of development, I excel in using tools like Visual Studio Code, PyCharm, and other integrated development environments (IDEs), alongside version control systems like GitHub. Throughout my past projects, I have successfully leveraged these tools to accomplish a diverse range of tasks, showcasing my technical skills and demonstrating a high level of proficiency. My passion for learning new technologies drives me to continuously stay updated on the latest industry trends, ensuring that I remain competitive and effective in my professional endeavors."}
                  {lang == 1 &&
                    '我在IT领域积累了丰富的经验，精通各种专业软件。我熟练掌握Microsoft Office套件，包括Word、Excel和PowerPoint，能够高效地处理文档编辑、数据分析和演示文稿的制作。此外，我在Adobe软件套件（如Photoshop、Illustrator和After Effects）方面也有很高的造诣，能够制作出高质量的设计和动画效果。在开发方面，我擅长使用Visual Studio Code、PyCharm等集成开发环境（IDEs），以及GitHub等版本控制工具。在过去的项目中，我成功地利用这些工具完成了各种任务，展示了我的技术技能并证明了我高水平的专业能力。我对学习新技术充满热情，并始终关注最新的行业趋势，以确保我的竞争力和专业效率。'}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className='mb-[30px] rounded-[28px] '
        >
          <motion.div
            variants={fastWelcomevisblecontainer}
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: true }}

            className='grid items-center content-center justify-center w-full h-full grid-cols-12 gap-16'
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
                className='col-span-4 md:col-span-4 lg:col-span-3'
              >
                <motion.div className='flex justify-center flex-shrink-0'>
                  <img
                    key={index}
                    className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   p-2  rounded-[9px]'
                    src={app.src}
                    alt={app.alt}
                  />
                </motion.div>
                <motion.div className='text-center pt-3 text-[15px] lg:text-[18px]  md:text-[15px] py-[10px] text-white  typography-subsection-headline '>
                  {app.alt}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* <motion.div className="tile-overlay">
          <label
            tabIndex={0}
            className="tile-button-wrapper"
            htmlFor="tile-overlay-toggle-check-in"
          >
            <span className="tile-button">
              <svg
                className="tile-icon-alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z" />
              </svg>
            </span>
            <span
              className="tile-button-text"
              role="button"
              aria-expanded="false"
              aria-controls="content-toggle-check-in"
            ></span>
          </label>
          <motion.div
            className="tile-overlay-content"
            style={{
              background: "linear-gradient(135deg,#767676,#1d1d1f)",
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
              className="tile-overlay-header"
              id="content-toggle-check-in"
            >
              <h3 className="tile-overlay-headline typography-subsection-headline text-[50px]">
                {lang == 0 && "Good User"}
                {lang == 1 && "绝对的能手"}
              </h3>
            </motion.div>
            <motion.div className="tile-overlay-body">
              <p className="tile-overlay typography-subsection text-[20px] lg:text-[25px] text-white">
                {lang == 0 &&
                  "I have accumulated extensive experience in the IT field, proficiently mastering a variety of professional software. For example, I am well-versed in the Microsoft Office suite, including Word, Excel, and PowerPoint, allowing me to efficiently handle document editing, data analysis, and presentation creation. Additionally, I possess expertise in Adobe's suite of software, such as Photoshop, Illustrator, and After Effects, enabling me to craft exquisite designs and animated effects. Regarding development, I excel in utilizing tools like Visual Studio Code, PyCharm, and other IDEs, along with version control tools like GitHub. In past projects, I have successfully leveraged these software tools to accomplish a diverse range of tasks, showcasing my professional skills and demonstrating a high level of proficiency. I have a strong passion for learning new technologies, consistently staying updated on the latest industry trends to uphold my competitiveness."}
                {lang == 1 &&
                  "在IT领域，我积累了丰富的经验，熟练掌握了多种专业软件。例如，我熟悉Microsoft Office套件，包括Word、Excel和PowerPoint，使我能够高效进行文档编辑、数据分析和演示文稿创建。此外，我精通Adobe软件套件，如Photoshop、Illustrator和After Effects，使我能够实现精致的设计和动画效果。在开发方面，我擅长使用诸如Visual Studio Code、PyCharm等集成开发环境（IDE）。其次，也熟悉GitHub等版本控制工具。在过去的项目中，我成功地运用这些软件工具完成了各种任务，展示了我的专业技能和高水平的熟练程度。我对学习新技术充满兴趣，始终保持对行业最新趋势的更新，以保持自己的竞争力。"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );

  return Gooduser;
}

export default Gooduser;
