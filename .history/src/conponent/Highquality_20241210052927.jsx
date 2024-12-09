/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
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

function Highquality() {
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
  // const content = [
  //   {
  //     title: lang == 0 ? 'Perfect For Everything' : '完美? 方方面面',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  //   {
  //     title: lang == 0 ? 'Always Can-do Attitude' : '永不言败',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  //   {
  //     title: lang == 0 ? 'Result-Oriented' : '完美? 方方面面',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  // ];

  const content = [
    {
      title: lang == 0 ? 'Perfect For Everything' : '极致追求',
      text:
        lang == 0 ?
          SelectText(
            ' Whether it’s [Code quality], [User experience], [Aesthetics], I strive for perfection in every detail. Excellence isn’t a goal but my habit.',
            'yellow-300',
            '\t ',
          )
        : SelectText(
            '无论是[代码质量]、[用户体验]还是[审美表达]，我都在每一个细节上追求极致。卓越不是目标，而是习惯。',
            'yellow-300',
          ),
    },
    {
      title: lang == 0 ? 'Always Can-Do Attitude' : '永不言败',
      text:
        lang == 0 ?
          SelectText(
            'I am driven by challenges and see every obstacle as an opportunity. With my problem-solving skills and resilience, I tackle difficulties head-on and deliver results that exceed expectations.',
            'yellow-300',
            '\t ',
          )
        : SelectText(
            '我以挑战为动力，把每个障碍都视为机会。凭借我的解决问题能力和韧性，我迎难而上，总能交付超出预期的成果。',
            'yellow-300',
          ),
    },
    {
      title: lang == 0 ? 'Result-Oriented' : '成果导向',
      text:
        lang == 0 ?
          SelectText(
            'Results matter to me. I ensure every project I lead is aligned with goals and achieves measurable success. My focus is not just on completing tasks but on creating impactful outcomes.',
            'yellow-300',
            '\t ',
          )
        : SelectText(
            '成果对我而言至关重要。我确保每个项目都围绕目标展开，并取得可衡量的成功。我不仅关注任务的完成，更在意创造有影响力的结果。',
            'yellow-300',
          ),
    },
    {
      title: lang == 0 ? 'Empathy and Collaboration' : '共情协作',
      text:
        lang == 0 ?
          SelectText(
            'Teamwork fuels innovation. I value diverse perspectives and thrive in collaborative environments, ensuring everyone’s voice is heard and contributes to shared success.',
            'yellow-300',
            '\t ',
          )
        : SelectText(
            '团队协作激发创新。我重视多元化的视角，在协作环境中茁壮成长，确保每个人的声音都能被倾听，并为共同的成功作出贡献。',
            'yellow-300',
          ),
    },
  ];

  const Highquality = (
    <motion.div className='flex h-full w-full min-h-[600px] col-span-12 relative md:col-span-6 lg:col-span-4'>
      {/* 半透明要改 */}
      <motion.div
        style={{
          backgroundImage: 'linear-gradient(135deg, #330867 0%, #30cfd0 100%)',
        }}
        className='rounded-[28px]     flex-1'
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1.3,
          }}
          className='p-[20px] lg:p-[40px] gap-y-[20px] flex flex-col h-full'
        >
          {content.map((item, index) => (
            <div key={index}>
              <h3
                style={{
                  lineHeight: 1.19048,
                  fontWeight: 600,
                  letterSpacing: '0.011em',
                }}
                className='text-white py-4 text-[30px]'
              >
                {item.title}
              </h3>
              <p className='font-[600] text-left text-white/60 text-[15px] lg:text-[20px]'>
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        <div
          className='h-full flex-1 w-full bottom-[30px]  -left-[90px]  absolute'
          style={{
            backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
          }}
        ></div>
      </motion.div>
    </motion.div>
  );

  return Highquality;
}

export default Highquality;
