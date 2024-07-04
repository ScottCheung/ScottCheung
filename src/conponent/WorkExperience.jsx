const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const h1 = `font-sans tracking-wide text-sky-700 text-[30px] md:text-[50px]  font-bold  transition-all duration-1000`;
const normaltext = "text-[15px] text-jusify transition-all duration-1000";
const h2 = `flex text-[30px]  font-black text-sky-700 group-hover:text-sky-400,
)} gap-x-[15px] items-center transition-all duration-1000`;
const printWidth = "max-w-[1300px] mt-[50px]";
const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-sky-700 opacity-10  transition-all duration-1000`;

const h3 = `text-[15px] font-black flex items-center `;
const timetext = `text-2xl font-[500] text-gray-400 items-start transition-all duration-1000`;
const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-sky-700`;
const whymelable = `text-[15px] text-gray-400 group-hover:text-sky-700`;
const contentContainer = `flex-1 flex flex-col justify-between  animate__animated animate__fadeInUp`;

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const divisionline = `flex duration-0 flex flex-1 h-[5px]  rounded-full bg-sky-700  transition-all duration-1000`;

const cardData = [
  {
    id: 3,
    title: "Project Manager",
    type: "Full Time",
    company: "Zhaoshi Education",
    startTime: "July 2018",
    endTime: "May 2018",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg",
    backgroundColor: "bg-blue-300",
    skill: [
      "Student Recruitment",
      "Teacher Interviewing",
      "Customer Complaint Handling",
      "Procurement Management",
      "Staff Management",
      "Scheduling",
      "Time Management",
      "Communication Skills",
    ],
    points: [
      {
        point: "Student Recruitment",
        description:
          "Successfully recruited over 100 students, enhancing enrollment numbers and contributing to the growth of the institution.",
      },
      {
        point: "Teacher Interviewing",
        description:
          "Conducted interviews and evaluations for potential teachers, ensuring the hiring of qualified and competent staff.",
      },
      {
        point: "Customer Complaint Handling",
        description:
          "Efficiently resolved over 50 customer complaints, improving overall customer satisfaction and retention rates.",
      },
      {
        point: "Procurement Management",
        description:
          "Managed the procurement of desks, chairs, and other classroom necessities, ensuring timely and cost-effective acquisitions.",
      },
      {
        point: "Staff Management",
        description:
          "Oversaw daily management of teachers, including meal coordination, sleep schedules, and shift planning, ensuring smooth operations and staff well-being.",
      },
      {
        point: "Scheduling",
        description:
          "Developed and maintained teacher schedules, optimizing resource allocation and minimizing conflicts.",
      },
    ],
  },
  {
    id: 2,
    title: "Operation / Data Analysis",
    type: "Part Time",
    company: "Domi Group Buying",
    startTime: "Aug 2018",
    endTime: "Nov 2018",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg",
    backgroundColor: "bg-blue-300",
    skill: [
      "Data Analysis",
      "Operational Management",
      "Excel",
      "SQL",
      "Communication Skills",
      "Problem-Solving Skills",
      "Time Management",
      "Attention to Detail",
    ],
    points: [
      {
        point: "Sales Data Analysis",
        description:
          "Analyzed daily sales data using Excel and SQL, identifying trends and insights that led to a 15% increase in overall sales.",
      },
      {
        point: "Operational Efficiency Improvement",
        description:
          "Streamlined order processing and inventory management systems, reducing order fulfillment time by 20%.",
      },
      {
        point: "Customer Behavior Insights",
        description:
          "Conducted customer behavior analysis to understand buying patterns, which informed targeted marketing strategies and improved customer retention by 10%.",
      },
      {
        point: "Performance Reporting",
        description:
          "Developed comprehensive performance reports for management, providing actionable insights and data-driven recommendations to support strategic decision-making.",
      },
    ],
  },
  {
    id: 1,
    title: "Financial Assistant",
    type: "Part Time",
    company:
      "Southwest University of Science and Technology Analytical Testing Centre",
    startTime: "Mar 2021",
    endTime: "Feb 2022",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg",
    backgroundColor: "bg-blue-300",
    skill: [
      "Financial Auditing",
      "Contract Management",
      "Compliance Review",
      "Business Process Automation",
      "Report Analysis",
      "Time Management",
      "Attention to Detail",
      "Communication Skills",
      "Problem-Solving Skills",
      "Office Automation Software Proficiency",
    ],
    points: [
      {
        point: "Achieving Excellence in Business Audits",
        description:
          "Responsible for auditing the invoices of the business office up to RMB1,000,000, drawing up contracts up to RMB100,000, compliance review and signing. ",
      },
      {
        point: "Streamlined Business Audit Processes",
        description:
          "The business is responsible for the assessment and audit of the business system and occasional audits of the accounts flow according to the monthly and annual reports of the business. ",
      },
      {
        point: "Efficiency Improvement through Office Automation Software",
        description:
          "During the course of the work, it was found that the business progress audit was a single simple and time-consuming task, and with the help of office automation software, the business audit workload of this position for a year was completed in half a day, receiving high praise and commendation from the Business Office Director.",
      },
    ],
  },
  {
    id: 0,
    title: "Uber Eats Delivery Driver",
    type: "Part Time",
    company: "Uber Eats",
    startTime: "Dec 2022",
    endTime: "July 2023",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1670495515/assets/69/2878ac-8a8e-48fe-8e9a-cdcd73a3e263/original/Courier_With_Bags_v2.png",
    backgroundColor: "bg-blue-300",
    skill: [
      "Time Management",
      "Customer Service",
      "Navigation and Route Planning",
      "Problem-Solving Skills",
      "Attention to Detail",
      "Communication Skills",
      "Physical Stamina",
      "Safety Awareness",
    ],
    points: [
      {
        point: "Efficient Delivery Management",
        description:
          "Completed over 500 deliveries with an average delivery time of under 30 minutes, ensuring timely and accurate service to customers.",
      },
      {
        point: "Customer Interaction",
        description:
          "Maintained high customer satisfaction through professional and courteous communication, resolving any issues promptly to ensure positive experiences.By editing some messages in advance, it improves the response time of interaction with customers and significantly increases user satisfaction.",
      },
      {
        point: "Route Optimization",
        description:
          "Utilized navigation tools and local knowledge to optimize delivery routes, reducing costs and improving delivery efficiency.",
      },
      {
        point: "Safety and Compliance",
        description:
          "Strictly adhered to traffic laws and safety guidelines, achieving a record of zero accidents or violations during the entire tenure.",
      },
    ],
  },
];

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../help/helpFunction";
import CtButton from "./ctButton";
import { useAppContext } from "../help/ContextManager";

function Card({ card, onClick }) {
  return (
    <motion.div
      layout
      key={card.id}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      initial={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.001, y: -5 }}
      whileTap={{ scale: 0.99 }}
      layoutId={`card-container-${card.type + card.company + card.id}`}
      className={`relative bg-white  cursor-pointer w-[250px]  lg:w-[400px] p-[28px] shadow-[10px] rounded-[28px]  hover:${card.backgroundColor}/20`}
      onClick={() => onClick(card.id)}
    >
      <div className="absolute  -left-[30px] -top-[30px] right-[60px] rounded-[28px]  overflow-hidden aspect-[16/9] ">
        <motion.img
          layout
          layoutId={`card-img-${card.id}`}
          src={card.image}
          width={window.innerWidth > 1024 ? "800px" : "400px"}
          height={window.innerWidth > 1024 ? "600px" : "300px"}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="object-cover object-bottom w-full shadow-lg"
        />
        <motion.kbd
          layout
          layoutId={"card-type" + card.type + card.company}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          class=" absolute bottom-[20px] right-[20px] flex w-[35px] h-[35px] items-center justify-center p-[20px] text-[20px] font-semibold text-sky-800 bg-sky-100 border border-sky-200 rounded-full darrk:bg-sky-600 darrk:text-sky-100 darrk:border-sky-500"
        >
          {card.type[0]}
        </motion.kbd>
      </div>

      <div className="flex flex-col mt-[60%]  items-start justify-start h-[130px] animate__animated animate__fadeInUp">
        <h1 className="font-bold  text-[20px] md:text-[25px] lg:text-[28px] text-gray">
          {card.title}
        </h1>
        <h2 className="flex  text-[13px] md:text-[16px] lg:text-[21px] text-gray-400">
          {card.company}
        </h2>
      </div>
    </motion.div>
  );
}

function Period({ period }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="-mx-[18%] mt-[10vh]  relative flex  items-center justify-between"
    >
      <div className="absolute  -mt-[100px]  flex w-[60%] justify-between items-center py-[20px] text-[20px] text-gray-500 font-serif">
        <div>{period.startTime}</div>
        <div>{period.endTime}</div>
      </div>
      <span className={divisionline}></span>
      <div className="absolute right-0 bg-sky-700 rounded-full w-[30px] h-[30px]"></div>
    </motion.div>
  );
}

function WorkExperience() {
  const lang = useLanguage();
  const navigate = useNavigate();
  const { Components, setComponents } = useAppContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerRef = useRef(null);
  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    BanScroll();
    setIsOpen(true);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "hide",
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCard(null);
    UnBanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "visible",
    }));
  };
  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.marginRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.opacity = 0;
  };

  const UnBanScroll = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px"; // 重置paddingRight
    // document.getElementById('navbar').style.marginRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.opacity = 1;
  };

  return (
    <motion.div layout className="flex flex-col justify-center w-full ">
      {/* 一级标题 */}
      <motion.div layout id="WorkExperience" className={`flex justify-center `}>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 1,
          }}
          className="flex items-center justify-center "
        >
          <div className="">
            <i className="pt-3 mr-3 text-5xl fi lg:text-8xl fi-rr-tool-box"></i>
          </div>
          <h2 className="font-mono text-5xl font-bold lg:text-8xl">
            {lang == 0 && "Work Experience"}
            {lang == 1 && "工作经验"}
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        layout
        ref={containerRef}
        variants={Welcomevisblecontainer}
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0 }}
        viewport={{ once: false, margin: "-30%" }}
        onAnimationComplete={scrollToRight}
        style={{
          paddingRight:
            "calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)",
        }}
        className="flex w-full space-x-[80px] overflow-x-auto py-[20vh] pl-[200px] scroll-smooth scrollbar-hide   flex-shrink-0 "
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            // variants={WelcomeItem}
            transition={StagerFadeInUp}
            // className="flex flex-col items-center justify-center"
          >
            <Card card={card} onClick={() => handleCardClick(card)} />
            <Period
              period={card}
              // onClick={() => handleCardClick(period)}
            />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed  inset-0 top-0 bottom-0  w-full h-full z-50  bg-gray-900/75 backdrop-blur-[20px]"
          >
            <div className="relative flex items-center justify-center w-full h-full ">
              <CtButton
                type={"x"}
                key={"close"}
                position={"top-[30px] right-[30px] ESC  "}
                btnsize={"60px"}
                icon={"w-[20px] h-[20px] rotate-0"}
                className="z-50"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClose();
                }}
              />

              {isOpen && (
                <motion.div onClick={(e) => e.stopPropagation()}>
                  <motion.div
                    layout
                    layoutId={`card-container-${
                      selectedCard.type + selectedCard.company + selectedCard.id
                    }`}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative p-[20px] md:gap-x-[40px] flex-wrap lg:flex w-full gap-y-[50px]  justify-center items-start bg-white shadow-lg max-h-[100vh] overflow-y-auto "
                  >
                    <motion.div
                      layoutId={`card-img-${selectedCard.id}`}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-full max-w-[800px] flex md:p-0 aspect-[4/3] z-50"
                    >
                      <motion.img
                        layout
                        src={selectedCard.image}
                        alt="detail"
                        className="object-cover object-bottom w-full"
                      />
                    </motion.div>

                    <motion.div
                      // layout

                      className="flex flex-col w-full max-w-[800px] pt-[30px] lg:pt-0 z-40"
                    >
                      <div className="flex flex-col gap-y-8 ">
                        <div className="flex flex-wrap items-center gap-8">
                          <h1 className="font-bold text-7xl">
                            {selectedCard.title}
                          </h1>
                          <motion.kbd
                            layoutId={
                              "card-type" +
                              selectedCard.type +
                              selectedCard.company
                            }
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            class="flex items-center justify-center px-[20px] py-[5px] text-xl font-semibold text-sky-800 bg-sky-100 border border-sky-200 rounded-full darrk:bg-sky-600 darrk:text-sky-100 darrk:border-sky-500"
                          >
                            {selectedCard.type}
                          </motion.kbd>
                        </div>

                        <div className="flex-col items-start justify-start md:flex md:flex-row md:justify-between overflow-y-auto  h-[30%]  pb-8">
                          <h2 className="flex w-[70%] text-[13px] md:text-[16px] lg:text-[21px] text-gray-400">
                            {selectedCard.company}
                          </h2>
                          {/* duration */}
                          <div className="flex justify-end ">
                            <p className={timetext}>
                              {selectedCard.startTime +
                                " - " +
                                selectedCard.endTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={contentContainer}>
                        <div className={normaltext}>
                          <p>
                            <h3 className="text-[20px] font-black">Skill:</h3>{" "}
                            {selectedCard.skill.join(",  ")}
                          </p>
                          <h3 className="text-[20px] font-black">
                            Achievements:
                          </h3>
                          <ul className="pl-5 ">
                            {selectedCard.points.map((item, index) => (
                              <li key={index} className="mb-2 text-justify">
                                <strong className="block mr-2 font-semibold">
                                  ▸ {item.point}
                                </strong>
                                {item.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WorkExperience;
