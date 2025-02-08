/** @format */

import Navbar from '../conponent/NavBar/Navbar';
import database from '../data/Database.json';
import KeyFeature from '../conponent/KeyFeature';
import Contact from '../conponent/Contact';
const Scholarships = database.PersonalInfo.Scholarships;
import { hideRow, useLanguage } from '../help/helpFunction';

export default function Scholarship() {
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
          className='text-[15px] md:text-[15px] lg:text-[17px]'
          role='main'
        >
          <section className='section section-welcome no-pad-bottom'>
            <div className='h-auto space-y-6 welcome-video-wall-visblecontainer visblecontainer '>
              <div className=' text-gray-500  pb-4 sticky top-0 z-30 bg-gradient-to-br from-white from-10% text-[13px] md:text-[17px] lg:text-[20px] via-white via-90% to-white/0 '>
                <h2 className='section-header-headline font-[600] text-[25px] md:text-[30px] lg:text-[40px] text-gray-900 pt-[100px]'>
                  {lang == 1 && '奖学金'}
                  {lang == 0 && 'Scholorship'}
                </h2>
                <p className=' text-justify py-[30px]'>
                  {lang == 1 &&
                    '总计 17项奖学金，所有奖学金真实有效。请注意，所有证书均为真实有效，并已在 2024 年 5 月 13 日进行更新。未经授权，请不要复制或保存。'}
                  {lang == 0 &&
                    'Totally 17 scholarships, all scholorships are authentic. Please note that all scholorships are authentic and valid and have been renewed as of 13 May 2024. Do not copy or save without authorization.'}
                </p>
              </div>
              <div className='relative pb-48 overflow-x-auto'>
                <table className='w-full text-left text-[8px] md:text-[13px] lg:text-[20px] text-gray-500 rtl:text-right darrk:text-gray-40 '>
                  {lang == 1 && (
                    <thead className='text-gray-700 uppercase bg-gray-50 darrk:bg-gray-700 darrk:text-gray-400'>
                      <tr>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          序列
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          奖学金
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          类型
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          补充描述
                        </th>
                      </tr>
                    </thead>
                  )}
                  {lang == 0 && (
                    <thead className=' text-gray-700 uppercase bg-gray-50 darrk:bg-gray-700 darrk:text-gray-400 text-[10px] md:text-[17px] lg:text-[20px]'>
                      <tr>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          Serial
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          Scholorship
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          Type
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-3 text-center lg:px-6'
                        >
                          descrition
                        </th>
                      </tr>
                    </thead>
                  )}
                  {Scholarships[lang].map((Scholarship, index) => (
                    <tbody>
                      <tr className='bg-white border-b darrk:bg-gray-800 darrk:border-gray-700 '>
                        <th
                          scope='row'
                          className='px-2 py-4 font-medium text-gray-900 lg:px-6 whitespace-nowrap darrk:text-white'
                        >
                          {index + 1}
                        </th>
                        <td
                          scope='row'
                          className='lg:px-6 text-center px-2 py-4 font-medium text-gray-900 whitespace-wrap darrk:text-white w-[25%]'
                        >
                          {Scholarship.CourseName}
                        </td>
                        <td className='lg:px-6 px-2 py-4 w-[5%] text-center'>
                          {Scholarship.Type}
                        </td>
                        <td className='px-2 py-4 lg:px-6 '>
                          {Scholarship.Description}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
                <p
                  scope='row'
                  className='text-left py-[20px] text-[16px] md:text-[20px] lg:text-[25px] font-medium text-green-900 whitespace-nowrap darrk:text-white'
                >
                  {lang == 1 && '总计 17项奖学金'}
                  {lang == 0 && 'Totally 17 scholarships'}
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className='flex justify-center w-full'>
        <KeyFeature />
      </div>

      <Contact />
    </div>
  );
}
