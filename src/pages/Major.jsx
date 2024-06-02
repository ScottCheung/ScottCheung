import "../LazyLoad";
import React, { useEffect } from "react";
import Navbar from "../conponent/Navbar/Navbar";
import Education from "../conponent/Education";
import WhyMe from "../conponent/WhyMe";
import SelfDescribing from "../conponent/SelfDescribing";
import WorkExperience from "../conponent/WorkExperience";
import Capability from "../conponent/Capability";
import KeyFeature from "../conponent/KeyFeature";
import Welcome from "../conponent/Welocome";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("visible");
            target.classList.remove("lazyload");
          } else {
            target.classList.add("lazyload");
          }
        });
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.5, // 当目标元素的50%可见时触发回调
      },
    );

    const sections = document.querySelectorAll(".lazyload");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />

      <body>
        <Welcome />

        <div className="  rounded-[44px] overflow-hidden">
          <div
            className="bg-[#fafafa] darrk:bg-gray-950 rounded-[44px] overflow-hidden"
            id="subscribe"
          >
            <Education className="overflow-hidden" />
            <KeyFeature />
          </div>

          <div
            className="rounded-3xl h-[80vh] hestia-contact contactus section-image overflow-hidden"
            data-sorder="hestia_contact"
            style={{ backgroundImage: "url(./contact1.jpg)" }}
          >
            <div className="visblecontainer rounded-3xl">
              <div className="text-center hestia-shop-title-area">
                <h2 id="ContactMe" className="hestia-title">
                  Contact information
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6 text-white grid-cols h-72">
                <div className="">
                  <a
                    className="hover:no-underline"
                    href="https://www.linkedin.com/in/zhang-xianzhe-03133a259/"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-3 fi fi-brands-linkedin"></i> Linkedin
                    </h4>
                    <p>Xianzhe Zhang</p>
                  </a>
                </div>
                <div className="description">
                  <a
                    className="hover:no-underline"
                    href="https://outlook.office365.com/mail/"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-sr-envelope"></i>E-mail
                    </h4>
                    <p>z5443003@ad.unsw.edu.au</p>
                  </a>
                </div>
                <div className="description">
                  <a
                    className="hover:no-underline"
                    href="https://www.facebook.com/profile.php?id=100085874466260"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-brands-facebook"></i>Facebook
                    </h4>
                  </a>
                  <p>Xianzhe Zhang</p>
                </div>
                <div className="description">
                  <a className="hover:no-underline" href="0434344292">
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-sr-circle-phone-flip"></i>Phone
                    </h4>
                    <p>0434344292</p>
                  </a>
                </div>
                <div className="description">
                  <a
                    className="hover:no-underline"
                    href="https://www.instagram.com/invites/contact/?i=er73s6a2y80u&utm_content=pblnb0t"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-brands-instagram"></i>Instagram
                    </h4>
                    <p>scottzhang9779</p>
                  </a>
                </div>
                <div className="description">
                  <a
                    className="hover:no-underline"
                    href="https://www.xiaohongshu.com/user/profile/5e36719a0000000001006210?xhsshare=CopyLink&appuid=5e36719a0000000001006210&apptime=1700945579"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-sr-book-alt"></i>Little Red Book
                    </h4>
                    <p>贤哲scott</p>
                  </a>
                </div>
                <div className="description">
                  <a
                    className="hover:no-underline"
                    href="https://www.wechat.com/"
                  >
                    <h4 className="items-center text-white info-title">
                      <i className="mr-6 fi fi-sr-comments"></i>Wechat
                    </h4>
                    <p>Scottt1110</p>
                  </a>
                </div>
              </div>
              <footer className="flex justify-center p-4 text-white text-base-content">
                <p>Copyright © 2023-2024 - All right reserved by Xianzhe</p>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
