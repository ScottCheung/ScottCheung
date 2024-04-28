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
      <div className="flex flex-col justify-center w-fullpt-[70px]">
        <motion.div
          className="h-[130vh] w-full bg-sky-200 animate__animated animate__zoomIn rounded-[28px] relative flex flex-col mb-[100vh] mx-[50px] mt-[100px]"
          style={{
            ...bgPic(
              "https://3o.hk/images/2024/01/19/LearningAbility.png",
              "800px auto",
              "bottom right",
            ),
          }}
        >
          <div className=" h-[60vh] flex justify-center items-center text-[30px] md:text-[70px] lg:text-[150px] font-black animate__animated animate__fadeInUp">
            I have 4 majors
          </div>
          <div className="h-[50vh] "></div>
          <Education hideTittle="ture" className="h-[100vh] fixed bottom-0" />
        </motion.div>
        <KeyFeature className="mt-[50vh] rounded-[28px] overflow-hidden p-[28px] " />
        <Contact className="mt-[50vh] rounded-[28px] overflow-hidden p-[28px] " />
      </div>
    </div>
  );
}
