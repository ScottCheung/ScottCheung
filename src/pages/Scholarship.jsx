import Navbar from "../conponent/NavBar/Navbar";
import database from "../Database.json";
import KeyFeature from "../conponent/KeyFeature";
import Contact from "../conponent/Contact";
const Scholarships = database.PersonalInfo.Scholarships;
import { hideRow, useLanguage } from "../help/helpFunction";

export default function Scholarship() {
  const lang = useLanguage();
  return (
    <div className="overflow-hidden bg-white">
      <div
        className="page-overview "
        data-component-list="PageXpController"
        data-anim-scroll-group="body"
      >
        <Navbar />

        <main
          id="main"
          className="main text-[15px] md:text-[15px] lg:text-[17px]"
          role="main"
        >
          <section className="section section-welcome no-pad-bottom">
            <div className="mt-24 section-content-responsive">
              <header className="flex flex-col items-center justify-between px-8 lg:flex-row section-header">
                <h1 className="flex items-center welcomeanimation section-header-headline font-[600] text-[40px]">
                  {lang == 1 && "奖学金"}
                  {lang == 0 && "Scholorship"}
                </h1>
                <div className="flex items-center welcomeanimation text-[20px]">
                  <p>
                    {" "}
                    {lang == 1 && "17项奖学金"}
                    {lang == 0 && "17 scholarships"}
                  </p>
                </div>
              </header>
            </div>
          </section>
          <section className="section section-welcome no-pad-bottom">
            <div className="h-auto space-y-6 welcome-video-wall-visblecontainer visblecontainer ">
              <div className=" text-gray-500  pb-4 sticky top-0 z-30 bg-gradient-to-br from-white from-10% via-white via-90% to-white/0 ">
                <h2 className="section-header-headline font-[600] text-[40px] text-gray-900 pt-[100px]">
                  {lang == 1 && "奖学金"}
                  {lang == 0 && "Scholorship"}
                </h2>
                <p className=" text-justify py-[30px]">
                  {lang == 1 &&
                    "所有奖学金真实有效。请注意，所有证书均为真实有效，并已在 2024 年 5 月 13 日进行更新。未经授权，请不要复制或保存。"}
                  {lang == 0 &&
                    "All scholorships are authentic. Please note that all scholorships are authentic and valid and have been renewed as of 5/13/2024.Do not copy or save without authorization."}
                </p>
              </div>
              <div className="relative pb-48 overflow-x-auto">
                <table className="w-full text-left text-gray-500 rtl:text-right darrk:text-gray-40">
                  {lang == 1 && (
                    <thead className=" text-gray-700 uppercase bg-gray-50 darrk:bg-gray-700 darrk:text-gray-400  text-[20px]">
                      <tr>
                        <th scope="col" className="px-6 py-3 w-[5%]">
                          序列
                        </th>
                        <th scope="col" className="px-6 py-3">
                          奖学金
                        </th>
                        <th scope="col" className="px-6 py-3">
                          类型
                        </th>
                        <th scope="col" className="px-6 py-3 w-[40%]">
                          补充描述
                        </th>
                      </tr>
                    </thead>
                  )}
                  {lang == 0 && (
                    <thead className=" text-gray-700 uppercase bg-gray-50 darrk:bg-gray-700 darrk:text-gray-400  text-[20px]">
                      <tr>
                        <th scope="col" className="px-6 py-3 w-[5%]">
                          Serial
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Scholorship
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 w-[40%]">
                          descrition
                        </th>
                      </tr>
                    </thead>
                  )}
                  {Scholarships[lang].map((Scholarship, index) => (
                    <tbody>
                      <tr className="bg-white border-b darrk:bg-gray-800 darrk:border-gray-700 ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white w-[5%]"
                        >
                          {index + 1}
                        </th>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white"
                        >
                          {Scholarship.CourseName}
                        </td>
                        <td className="px-6 py-4">{Scholarship.Type}</td>
                        <td className="px-6 py-4 text-[10px]">
                          {Scholarship.Description}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                  <tbody>
                    <tr className="w-full bg-white border-b darrk:bg-gray-800 darrk:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-16 text-[25px] font-medium text-green-900 whitespace-nowrap darrk:text-white"
                      >
                        {lang == 1 && "总计 17项奖学金"}
                        {lang == 0 && "Totally 17 scholarships"}
                      </th>
                      <td className="px-6 py-4 ">{Scholarship.Description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* <div className='h-auto space-y-6 welcome-video-wall-visblecontainer visblecontainer '>
                <div className="sticky top-0 z-50 pb-4 text-gray-500 bg-white" >
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
