import Contact from "../conponent/Contact";
import Navbar from "../conponent/Navbar";
import Education from "../conponent/Education";
import { hideRow, bgPic, useLanguage } from "../help/helpFunction";
import { motion } from "framer-motion";
import KeyFeature from "../conponent/KeyFeature";

export default function Example() {
  return (
    <div className="bg-gradient-to-br from-pink-100 from-10% via-pink-50 via-50% to-white/0 ">
      <Navbar />
      <div className="flex flex-col w-full px-0 justify-center overflow-hidden md:px-[50px]">
        <motion.div
          className="flex flex-col bg-sky-200 rounded-[28px] h-[130vh]  mt-[100px] mb-[100vh] w-full animate__animated animate__zoomIn relative"
          style={{
            ...bgPic(
              "https://3o.hk/images/2024/01/19/LearningAbility.png",
              "800px auto",
              "bottom right",
            ),
          }}
        >
          <div className="h-[50vh] ">
            {" "}
            <div className=" flex font-black h-[60vh] text-[30px] justify-center items-center animate__animated animate__fadeInUp md:text-[70px] lg:text-[150px]">
              I have 4 majors
            </div>
          </div>
          <Education hideTittle={true} simpleVer={true} />
        </motion.div>
      </div>
      <KeyFeature className="rounded-[28px] mt-[50vh] p-[28px] overflow-hidden " />
      <Contact className="rounded-[28px] mt-[50vh] p-[28px] overflow-hidden " />
    </div>
  );
}
