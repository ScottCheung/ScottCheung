import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../conponent/NavBar/Navbar';
import { useLanguage } from '../../help/helpFunction';
import { motion } from 'framer-motion';
import Toast from '../../conponent/toast';
import resumeData from './resumeData.json';

export default function Errorpage() {
  const [isLatestVersion, setIsLatestVersion] = useState(null);
  const { version } = useParams();
  const lang = useLanguage();
  document.body.style.overflow = 'hidden';

  const latestContact =
    resumeData[lang].header.contacts[
      resumeData[lang].header.contacts.length - 1
    ];
  const latestVersion = latestContact.version || '1.0.0';
  const Message = {
    FirstHeader: ['Resume Version', '简历版本'],
    SecondHeader: [
      'We are checking the resume version.',
      '我们正在检查简历版本',
    ],
    LatestVersion: [
      'Congratulations! You are using the latest version.',
      '恭喜！您正在使用最新版本。',
    ],
    OldVersion: [
      `You are not using latest version. Please view the latest version for updates as of ${latestContact.update}.`,
      `您正在使用旧版本, 请查看最新版本(${latestContact.update} 更新)。`,
    ],
    btn1: [
      `View Latest ( ${latestContact.update} )`,
      `查看最新版 ( ${latestContact.update} )`,
    ],
    btn1web: '/resume',
    btn1Icon: 'fi-rr-home-heart',
    btn2: ['Download Resume', '下载简历'],
    btn2web: '/life',
    btn2Icon: 'fi-rr-trophy-star',
    bg: '',
  };

  useEffect(() => {
    if (version === latestVersion) {
      setIsLatestVersion(true);
    } else {
      setIsLatestVersion(false);
    }
  }, [version, latestVersion]);
  const button = `${isLatestVersion ? 'text-green-800 border-green-700 hover:bg-green-700' : 'text-yellow-800 border-yellow-700 hover:bg-yellow-700'} items-center gap-x-[10px] hover:gap-x-[30px] inline-flex px-[20px] hover:px-[50px] py-2 text-[10px] md:text-[20px] border rounded-full hover:font-semibold  hover:text-white  transition-all animate__animated animate__fadeInUp `;
  const h2 =
    'flex animate__animated animate__fadeInUp mt-4 py-[10px] font-bold tracking-tight text-gray-700 text-[15px] md:text-[20px] ';
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <link
        rel='stylesheet'
        href='../style/uicons/css/all/all.css'
        type='text/css'
      />
      <link
        rel='stylesheet'
        href='.../style/uicons/css/all/all.css'
        type='text/css'
      />
      <main className='h-[100vh] animate__animated animate__fadeIn  place-items-center flex justify-center  px-6 py-24 sm:py-32 lg:px-8 '>
        <div className='text-center '>
          <motion.i
            initial={{ scale: 0, y: '-90px', opacity: 0 }}
            animate={{ scale: 1, y: '0px', opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`animate__animated animate__fadeInUp text-[70px] md:text-[150px] font-semibold fi ${isLatestVersion ? ' fi-rr-check-circle text-green-700 ' : 'text-yellow-700 fi-rs-exclamation'}`}
          ></motion.i>
          <i class=''></i>
          <motion.p
            initial={{ scale: 0, y: '-90px', opacity: 0 }}
            animate={{ scale: 1, y: '0px', opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='animate__animated animate__fadeInUp text-[30px] md:text-[50px] font-semibold text-gray-700'
          >
            {Message.FirstHeader[lang]} {version}
          </motion.p>

          <div className='flex items-center justify-center mt-10 place-items-center gap-x-24'>
            {isLatestVersion !== null && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='animate__animated animate__zoomIn animate__slow'
              >
                {isLatestVersion ? (
                  <motion.div className='flex gap-x-[30px] items-center'>
                    <i class='flex text-5xl text-green-500 fi fi-br-check'></i>
                    <motion.h1
                      initial={{ scale: 0.9, y: '60px', opacity: 0 }}
                      animate={{ scale: 1, y: '0px', opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      style={{ animationDelay: `0.2s` }}
                      className={h2}
                    >
                      {Message.LatestVersion[lang]}
                    </motion.h1>
                  </motion.div>
                ) : (
                  <motion.div className='flex gap-x-[30px] items-center'>
                    <i class='flex text-5xl text-yellow-500 fi fi-br-cross'></i>
                    <motion.h1
                      initial={{ scale: 0.9, y: '60px', opacity: 0 }}
                      animate={{ scale: 1, y: '0px', opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      style={{ animationDelay: `0.2s` }}
                      className={h2}
                    >
                      {Message.OldVersion[lang]}
                    </motion.h1>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
          <div className='flex gap-x-[30px] justify-center py-[40px]'>
            <motion.a
              style={{ animationDelay: '0.2s' }}
              href={Message.btn1web}
              className={button}
            >
              <i class='flex fi fi-sr-galaxy-star text-[20px]'></i>
              {Message.btn1[lang]}
            </motion.a>
            <motion.a
              style={{ animationDelay: '0.4s' }}
              href={`https://github.com/Xianzhezhang97/CV/raw/main/CV%20%7C%20Scott%20Cheung.pdf`}
              className={button}
            >
              <i class='flex fi fi-rr-file-download text-[20px]'></i>
              {Message.btn2[lang]}
            </motion.a>
          </div>
        </div>
      </main>
      <div
        style={{
          backgroundImage: `url(${Message.bg})`,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
}
