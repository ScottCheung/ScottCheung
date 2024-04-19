import Navbar from '../conponent/Navbar';
import database from '../Datebase.json';
import KeyFeature from '../conponent/KeyFeature';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '../conponent/Contact';
import { hideRow, useLanguage, ScrollToTop } from '../help/helpFunction';

const Certificates = database.PersonalInfo.Certificates;
const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = database.Animation.Transition.LeftappearBar;
const item = database.Animation.Variant.LeftWelcomeItem;
export default function material() {
  const lang = useLanguage();
  return (
    <>
      <div
        className='page-overview '
        data-component-list='PageXpController'
        data-anim-scroll-group='body'
      >
        <Navbar />
        <ScrollToTop />

        <main id='main' className='main' role='main'>
          <section className='section section-welcome no-pad-bottom'>
            <div className='section-content-responsive mt-24'>
              <header className='section-header'>
                <h1 className=' welcomeanimation section-header-headline'>
                  {lang == 1 && '荣誉'}
                  {lang == 0 && 'Certificates'}
                </h1>
                <div className='section-header-copy-visblecontainer'>
                  <p>
                    {lang == 1 && '60多项荣誉'}
                    {lang == 0 && '60+ Certificates'}
                  </p>
                </div>
              </header>
            </div>
          </section>
          <section className='section section-welcome no-pad-bottom'>
            <div className='welcome-video-wall-visblecontainer visblecontainer space-y-6 h-auto '>
              <div className=' text-gray-500  pb-4 sticky   top-0 z-50 bg-gradient-to-b from-white from-10% via-white via-90% to-white/10  '>
                <h2 className='sticky top-0 z-50 typography-section-intro-headline section-intro-headline pt-[100px]'>
                  {lang == 1 && '荣誉'}
                  {lang == 0 && 'Certificates'}
                </h2>
                <p className=' text-justify pb-[30px]'>
                  {lang == 1 && '所有荣誉真实有效。因部分图片遗失，正在整理中。表格可能不正确。'}
                  {lang == 0 && 'All Certificates are real. The table below shows the certificates I have received. Because of the large number of certificates, I have not collected all of them. I will update them in the not soon. Table is not correct.'}
                </p>
              </div>
              <img className='w-full' src='https://3o.hk/images/2024/04/15/certificate.png'></img>
              <div className='pb-48 relative overflow-x-auto'>
                <motion.table
                  variants={visblecontainer}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='w-full  text-left rtl:text-right text-gray-500 dark:text-gray-40 '
                >
                  {lang == 1 && (
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                      <tr>
                        <th scope='col' className='px-6 py-3'>
                          序列
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          荣誉
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          类型
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          补充描述
                        </th>
                      </tr>
                    </thead>
                  )}
                  {lang == 0 && (
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                      <tr>
                        <th scope='col' className='px-6 py-3'>
                          Serial
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Course
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Type
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          descrition
                        </th>
                      </tr>
                    </thead>
                  )}
                  {Certificates[lang].map((subject, index) => (
                    <motion.tbody
                      key={index}
                      variants={item}
                      transition={LeftappearBar}
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.99 }}
                      layout
                    >
                      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          {index + 1}
                        </th>
                        <td
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          {subject.CourseName}
                        </td>
                        <td className='px-6 py-4'>{subject.Type}</td>
                        <td className='px-6 py-4'>{subject.Description}</td>
                      </tr>
                    </motion.tbody>
                  ))}
                </motion.table>
              </div>
            </div>
            <KeyFeature />
          </section>
        </main>
      </div>
    </>
  );
}
