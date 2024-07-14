import Navbar from "../conponent/Navbar/Navbar";
import Database from "../data/Database.json";
import { motion, AnimatePresence } from "framer-motion";
import Education from "../conponent/Education";
import { Link } from "react-router-dom";
const course = Database.PersonalInfo.Education;
const FM = course.filter((item) => item.major.includes("Material"));
const visblecontainer = Database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = Database.Animation.Transition.LeftappearBar;
const item = Database.Animation.Variant.LeftWelcomeItem;
export default function material() {
  return (
    <div className="overflow-hidden">
      <div
        className="page-overview "
        data-component-list="PageXpController"
        data-anim-scroll-group="body"
      >
        <Navbar />

        <main id="main" className="main" role="main">
          <section className="section section-welcome no-pad-bottom">
            <div className="section-content-responsive mt-24">
              <header className="section-header row">
                <h1 className=" welcomeanimation section-header-headline">
                  Functional Material
                </h1>
                <div className="section-header-copy-visblecontainer">
                  <p>Bacholor degree</p>
                </div>
              </header>
            </div>
            <div className="welcome-video-wall-visblecontainer w-full flex justify-center py-16 flex-col z-50 bg-sky-100 bgrid-colsover bgrid-colsenter sticky top-0 shadow-2xl">
              <div className="flex flex-row justify-center items-center">
                <img
                  className="w-[130px] "
                  src="https://www.swust.edu.cn/_upload/article/images/a2/be/26cda87e40859fc995162c402b1e/817d5684-7ac9-491b-8752-60cfa0809adc.png"
                  alt=""
                />
                <img
                  className="w-[400px] h-[130px] py-12 px-7"
                  src="https://www.swust.edu.cn/_upload/article/images/a2/be/26cda87e40859fc995162c402b1e/ea60b2ce-3079-4e5f-ad4d-440410ae50af.png"
                  alt=""
                />
              </div>
            </div>
            <div className="welcome-video-wall-visblecontainer visblecontainer space-y-6 h-auto">
              <div className=" text-gray-500 pt-24 pb-4 sticky top-0">
                <h2 className="typography-section-intro-headline section-intro-headline">
                  University Status
                </h2>
              </div>
              <p className=" text-justify">
                Southwest University of Science and Technology is located in
                Mianyang City, Sichuan Province, a science and technology city
                in China. The school is a university jointly built by the
                People's Government of Sichuan Province and the Ministry of
                Education. It is a university jointly built by the People's
                Government of Sichuan Province and the State Administration of
                Science, Technology and Industry for National Defense. It has
                been identified by the Ministry of Education as one of the 14
                universities in the western region that are under national key
                construction. Comrade Li Lanqing, former member of the Standing
                Committee of the Political Bureau of the CPC Central Committee
                and Vice Premier of the State Council, praised the school's
                "co-construction and regional industry-university-research joint
                education" for having developed a school-running path with its
                own characteristics. The current party secretary of the school
                is Dong Faqin and the principal Huang Qi.
              </p>
              <p className=" text-justify">
                The school currently has more than 39,000 students. It has 16
                colleges including the National Defense Science and Technology
                Institute, with 85 undergraduate majors in 9 major disciplines
                including engineering, agriculture, science, economics, law,
                literature, management, education, and art; it has first-level
                doctorate degrees There are 5 authorization points, 18 doctoral
                degree authorization points in second-level disciplines; 24
                master's degree authorization points in first-level disciplines,
                88 master's degree authorization points in second-level
                disciplines; and 15 professional master's degree categories.
                There are 3 postdoctoral research stations, and doctoral
                students are jointly trained in 4 disciplines with the China
                Academy of Engineering Physics. There are 2 "double first-class"
                construction disciplines (groups) in Sichuan Province, 4
                provincial-level advantageous disciplines, 11 provincial-level
                key disciplines, 1 basic national defense discipline approved by
                the Bureau of National Defense Science and Industry, and 5
                national defense specialty disciplines. Four disciplines,
                materials science, engineering science, chemistry, and
                environment/ecology, have entered the top 1% of ESI rankings,
                among which three disciplines of materials science, engineering
                science, and chemistry have entered the top 5‰ of ESI rankings.
                <a className="text-sky-500" href={FM[0].web}>
                  {" "}
                  [ Offical Website ]
                </a>
              </p>
              <div className=" text-gray-500 pt-24 pb-4 sticky top-0">
                <h2 className="typography-section-intro-headline section-intro-headline">
                  Functional Material
                </h2>
              </div>
              <p className=" text-justify">
                Functional materials are generally characterised as those
                materials which possess particular native properties and
                functions of their own. For example, ferroelectricity,
                piezoelectricity, magnetism or energy storage functions.
              </p>
              <p className=" text-justify">
                Functional materials are found in all classes of materials:
                ceramics, metals, polymers and organic molecules. Functional
                materials are often used in electromagnetic applications from
                KHz to THz and at optical frequencies where the plasmonic
                properties of metals assume particular importance. Functional
                materials are also of critical importance in materials for
                energy such as electro- and magnetocaloric materials, for energy
                storage and for solar harvesting functions.
                <a
                  className="text-sky-500"
                  href="https://en.wikipedia.org/wiki/Functional_materials"
                >
                  {" "}
                  [ weki ]
                </a>
              </p>
            </div>
          </section>
          <section className="section section-welcome no-pad-bottom">
            <div className="welcome-video-wall-visblecontainer visblecontainer space-y-6 h-auto ">
              <div className=" text-gray-500 pt-24 pb-4 sticky top-0 z-50 bg-white">
                <h2 className="typography-section-intro-headline section-intro-headline">
                  Main Course
                </h2>
                <p className=" text-justify">{FM[0].description[0]}</p>
                <p className=" text-justify">{FM[0].description[1]}</p>
              </div>
              <div className="pb-48 relative overflow-x-auto">
                <motion.table
                  variants={visblecontainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full  text-left rtl:text-right text-gray-500 darrk:text-gray-40 "
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 darrk:bg-gray-700 darrk:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Serial
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        descrition
                      </th>
                    </tr>
                  </thead>
                  {FM[0].courses.map((subject, index) => (
                    <motion.tbody
                      key={index}
                      variants={item}
                      transition={LeftappearBar}
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.99 }}
                      layout
                    >
                      <tr className="bg-white border-b darrk:bg-gray-800 darrk:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white text-center"
                        >
                          {index + 1}
                        </th>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap darrk:text-white"
                        >
                          {subject.CourseName}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {subject.Type}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {subject.Description}
                        </td>
                      </tr>
                    </motion.tbody>
                  ))}
                </motion.table>
              </div>
            </div>
          </section>
          <Education hideTittle={true} className="h-[100vh]" />
        </main>
      </div>
    </div>
  );
}
