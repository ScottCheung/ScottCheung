import Navbar from "../conponent/Navbar";
import database from "../Database.json";
import KeyFeature from "../conponent/KeyFeature";
import Contact from "../conponent/Contact";
const Scholarships = database.PersonalInfo.Scholarships;
import { hideRow, useLanguage } from "../help/helpFunction";

export default function Scholarship() {
  const lang = useLanguage();
  return (
    <div className="bg-white overflow-hidden">
      <div
        className="page-overview "
        data-component-list="PageXpController"
        data-anim-scroll-group="body"
      >
        <Navbar />

        <main id="main" className="main" role="main">
          <section className="section section-welcome no-pad-bottom">
            <div className="section-content-responsive mt-24">
              <header className="section-header">
                <h1 className=" welcomeanimation section-header-headline">
                  {lang == 1 && "奖学金"}
                  {lang == 0 && "Scholorship"}
                </h1>
                <div className="section-header-copy-visblecontainer">
                  <p>
                    {lang == 1 && "17项奖学金"}
                    {lang == 0 && "17 scholarships"}
                  </p>
                </div>
              </header>
            </div>
          </section>
          <section className="section section-welcome no-pad-bottom">
            <div className="h-auto welcome-video-wall-visblecontainer visblecontainer space-y-6 ">
              <div className=" text-gray-500  pb-4 sticky top-0 z-50 bg-gradient-to-br from-white from-10% via-white via-90% to-white/0 ">
                <h2 className="typography-section-intro-headline section-intro-headline pt-[100px]">
                  {lang == 1 && "奖学金"}
                  {lang == 0 && "Scholorship"}
                </h2>
                <p className=" text-justify pb-[30px]">
                  {lang == 1 && "所有的奖学金都真实。"}
                  {lang == 0 && "All scholorships are real."}
                </p>
              </div>
              <div className="relative pb-48 overflow-x-auto">
                <table className="w-full text-left text-gray-500 rtl:text-right dark:text-gray-40 ">
                  {lang == 1 && (
                    <thead className="text-xs text-gray-700 bg-gray-50 uppercase dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          序列
                        </th>
                        <th scope="col" className="px-6 py-3">
                          奖学金
                        </th>
                        <th scope="col" className="px-6 py-3">
                          类型
                        </th>
                        <th scope="col" className="px-6 py-3">
                          补充描述
                        </th>
                      </tr>
                    </thead>
                  )}
                  {lang == 0 && (
                    <thead className="text-xs text-gray-700 bg-gray-50 uppercase dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Serial
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Scholorship
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          descrition
                        </th>
                      </tr>
                    </thead>
                  )}
                  {Scholarships[lang].map((Scholarship, index) => (
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="text-gray-900 px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td
                          scope="row"
                          className="text-gray-900 px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                        >
                          {Scholarship.CourseName}
                        </td>
                        <td className="px-6 py-4">{Scholarship.Type}</td>
                        <td className="px-6 py-4">{Scholarship.Description}</td>
                      </tr>
                    </tbody>
                  ))}
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="text-gray-900 px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                      >
                        {lang == 1 && "总计 17项奖学金"}
                        {lang == 0 && "Totally 17 scholarships"}
                      </th>
                      <td className="px-6 py-4">{Scholarship.Description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* <div className='h-auto welcome-video-wall-visblecontainer visblecontainer space-y-6 '>
                <div className="sticky text-gray-500 bg-white  pb-4 top-0 z-50" >
                  <h2 className="typography-section-intro-headline section-intro-headline">
                  proof material
                  </h2>
                </div>
                <img className='w-full' src="" alt="proof material" />
        </div> */}
          <KeyFeature />
        </main>
      </div>
    </div>
  );
}
