/** @format */

import Navbar from '../conponent/NavBar/Navbar';
import database from '../data/Database.json';
import KeyFeature from '../conponent/KeyFeature';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage, ScrollToTop } from '../help/helpFunction';
import CertificateGallery from '../conponent/CertificateGallery';
import Contact from '../conponent/Contact';

const Certificates = database.PersonalInfo.Certificates;
const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = database.Animation.Transition.LeftappearBar;
const item = database.Animation.Variant.LeftWelcomeItem;
export default function material() {
  const lang = useLanguage();
  return (
    <div className='overflow-hidden bg-white'>
      <div
        className='page-overview '
        data-component-list='PageXpController'
        data-anim-scroll-group='body'
      >
        <Navbar />

        <main
          id='main'
          className='main text-[15px] md:text-[15px] lg:text-[17px]'
          role='main'
        >
          <section className='section section-welcome no-pad-bottom'>
            <div className='mt-24 section-content-responsive'>
              <header className='flex flex-col items-center justify-between px-8 lg:flex-row section-header'>
                <h1 className='flex items-center welcomeanimation font-[600] text-[40px] text-gray-900'>
                  {lang == 1 && '荣誉'}
                  {lang == 0 && 'Awards'}
                </h1>
                <div className='flex items-center welcomeanimation text-[20px]'>
                  {lang == 1 && '58项荣誉'}
                  {lang == 0 && '58 Certificates'}
                </div>
              </header>
            </div>
          </section>

          <div className='h-auto md:mx-[10%] z-0 welcomeanimation'>
            <div className=' text-gray-500  pb-4 sticky   top-0 z-0 bg-gradient-to-br from-white from-10% via-white via-90% to-white/10  '>
              <h2 className='sticky top-0 z-50 welcomeanimation font-[600] text-[40px] text-gray-900 pt-[100px]'>
                {lang == 1 && '荣誉'}
                {lang == 0 && 'Awards'}
              </h2>
              <p className=' text-justify py-[30px]'>
                {lang == 1 &&
                  '所有证书真实有效。请注意，所有证书均为真实有效，并已在 2024 年 5 月 13 日进行更新。未经授权，请不要复制或保存。'}
                {lang == 0 &&
                  'All awards are authentic. Please note that all awards are authentic and valid and have been renewed as of 5/13/2024.Do not copy or save without authorization.'}
              </p>
            </div>

            <div className='relative pb-48 overflow-x-auto scrollbar-hide'>
              <motion.table
                variants={visblecontainer}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='w-full text-left text-gray-500 rtl:text-right darrk:text-gray-40 '
              >
                {lang == 1 && (
                  <thead className='text-text-[20px] text-gray-700 bg-gray-50 uppercase darrk:bg-gray-700 darrk:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        序
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        活动
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        奖项
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        链接
                      </th>
                    </tr>
                  </thead>
                )}
                {lang == 0 && (
                  <thead className='text-[20px] text-gray-700 bg-gray-50 uppercase darrk:bg-gray-700 darrk:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Serial
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Activity
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Award
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Link
                      </th>
                    </tr>
                  </thead>
                )}
                {Certificates[lang].map((Certificate, index) => (
                  <motion.tbody
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.001 }}
                    whileTap={{ scale: 0.99 }}
                    layout
                    className='py-16'
                  >
                    <tr className='bg-white border-b darrk:bg-gray-800 darrk:border-gray-700'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white'
                      >
                        {index + 1}
                      </th>
                      <td
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white'
                      >
                        {Certificate.activity}
                      </td>
                      <td className='px-6 py-4'>{Certificate.award}</td>
                      <td className='px-6 py-4'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={Certificate.src}
                          className='text-sky-500 hover:text-sky-700 hover:underline darrk:text-sky-400 darrk:hover:text-sky-700'
                        >
                          {lang == 0 ? 'Link ' : '链接'}
                        </a>
                      </td>
                    </tr>
                  </motion.tbody>
                ))}
              </motion.table>
            </div>
          </div>
          <CertificateGallery />
          <div className='flex justify-center w-full'>
            <KeyFeature />
          </div>
        </main>
      </div>
      <Contact />
    </div>
  );
}
