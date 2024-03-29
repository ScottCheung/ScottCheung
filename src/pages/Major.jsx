import '../LazyLoad';
import React, { useEffect } from 'react';
import Navbar from '../conponent/Navbar';
import StudyExperience from '../conponent/StudyExperience';
import WhyMe from '../conponent/WhyMe';
import SelfDescribing from '../conponent/SelfDescribing'
import WorkExperience from '../conponent/WorkExperience';
import Capability from '../conponent/Capability';
import KeyFeature from '../conponent/KeyFeature';
import Welcome from '../conponent/Welocome';
import { Link } from 'react-router-dom';

function Home () {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
    
                if (entry.isIntersecting) {
                    target.classList.add('visible');
                    target.classList.remove('lazyload');
                } else {
                    target.classList.add('lazyload');
                }
            });
        }, {
            root: null, 
            rootMargin: '50px',
            threshold: 0.5, // 当目标元素的50%可见时触发回调
        });
    
        const sections = document.querySelectorAll('.lazyload');
    
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
    <div>

        <Navbar />
        
        <body>
                <Welcome />

                <div className="main  main-raised rounded-[44px] ">
                    <div className="bg-[#fafafa] dark:bg-gray-950 rounded-[44px]" id="subscribe">
                        <StudyExperience className='sm:m-[-4em]' />
                        <KeyFeature />
                        {/* <Capability /> */}
                        {/* <SelfDescribing /> */}
                        {/* <WhyMe /> */}
                        {/* <WorkExperience /> */}
                        
                         
                        {/* <div className='p-10'>
                            <div className='min-h-[15vh] max-h-[15vh] my-10'>
                            <iframe
                                className='smothchange lazyload animate__animated animate__fadeInUp'
                                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                style={{ width: "100%", overflow: "hidden", borderRadius: 10 }}
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                src="https://embed.music.apple.com/au/album/from-now-on/1326770464?i=1326770830&l=en-GB"
                                />
                            </div>
                            <div className='min-h-[15vh] max-h-[15vh] my-10'>
                                    <iframe
                                        className='smothchange lazyload animate__animated animate__fadeInUp'
                                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                        style={{ width: "100%", overflow: "hidden", borderRadius: 10 }}
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                        src="https://embed.music.apple.com/au/album/the-prayer/1326770464?i=1326770827&l=en-GB"
                                        />

                            </div>
                            <div className='min-h-[15vh] max-h-[15h] my-10'>
                            <iframe
                                className='smothchange lazyload animate__animated animate__fadeInUp'
                                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                style={{ width: "100%", overflow: "hidden", borderRadius: 10 }}
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                src="https://embed.music.apple.com/cn/album/the-moment/541856819?i=541857029&l=en-GB"
                                />
                            
                        </div>

                            </div> */}
                        
                                

                                
                                
                                

                        {/*<WorkExperience />


                        <section className="hestia-testimonials " id="testimonials" data-sorder="hestia_testimonials">
                            <div className="visblecontainer">
                                <div className="col-md-8 col-md-offset-2 text-center hestia-shop-title-area">
                                    <h2 className="hestia-title">Other reviews</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2 text-center hestia-testimonials-title-area">
                                    </div>
                                </div>
                                <div className="hestia-testimonials-content">
                                    <div className="row">
                                        <div className="col-xs-12 col-ms-6 col-sm-6 col-md-4">
                                            <div className="card card-testimonial card-plain">
                                                <div className="card-avatar">
                                                    <img className="img"
                                                        src="./Xianzhe&#39;s Personal Page – Welcome to my Page_files/5.jpg"
                                                        alt="Inverness McKenzie" title="Inverness McKenzie"></img>
                                                </div>
                                                <div className="content">
                                                    <h4 className="card-title">Inverness McKenzie</h4>
                                                    <h6 className="category text-muted">Business Owner</h6>
                                                    <p className="card-description">"We have no regrets! After using your product my
                                                        business skyrocketed! I made back the purchase price in just 48 hours! I
                                                        couldn't have asked for more than this."</p>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <a href="http://facebook.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the facebook profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-facebook"></i>
                                                    </a>
                                                <a href="http://plus.google.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the plus profile of Desmond Purpleson">
                                                    <i className="fi fi-sr-envelope"></i>
                                                    </a>
                                                <a href="http://twitter.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the twitter profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-twitter-alt-circle"></i></a>
                                                <a href="http://linkedin.com/"
                                                    className="btn btn-just-icon btn-simple"
                                                    aria-label="View the linkedin profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-linkedin"></i>
                                                </a>
                                                <a href="http://linkedin.com/"
                                                className="btn btn-just-icon btn-simple"
                                                aria-label="View the linkedin profile of Desmond Purpleson">
                                                <i className="fi fi-brands-instagram"></i>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-ms-6 col-sm-6 col-md-4">
                                            <div className="card card-testimonial card-plain">
                                                <div className="card-avatar">
                                                    <img className="img"
                                                        src="./Xianzhe&#39;s Personal Page – Welcome to my Page_files/6.jpg"
                                                        alt="Hanson Deck" title="Hanson Deck"></img>
                                                </div>
                                                <div className="content">
                                                    <h4 className="card-title">Hanson Deck</h4>
                                                    <h6 className="category text-muted">Independent Artist</h6>
                                                    <p className="card-description">"Your company is truly upstanding and is behind its
                                                        product 100 percent. Hestia is worth much more than I paid. I like Hestia
                                                        more each day because it makes easier."</p>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <a href="http://facebook.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the facebook profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-facebook"></i>
                                                    </a>
                                                <a href="http://plus.google.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the plus profile of Desmond Purpleson">
                                                    <i className="fi fi-sr-envelope"></i>
                                                    </a>
                                                <a href="http://twitter.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the twitter profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-twitter-alt-circle"></i></a>
                                                <a href="http://linkedin.com/"
                                                    className="btn btn-just-icon btn-simple"
                                                    aria-label="View the linkedin profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-linkedin"></i>
                                                </a>
                                                <a href="http://linkedin.com/"
                                                className="btn btn-just-icon btn-simple"
                                                aria-label="View the linkedin profile of Desmond Purpleson">
                                                <i className="fi fi-brands-instagram"></i>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-ms-6 col-sm-6 col-md-4">
                                            <div className="card card-testimonial card-plain">
                                                <div className="card-avatar">
                                                    <img className="img"
                                                        src="./Xianzhe&#39;s Personal Page – Welcome to my Page_files/7.jpg"
                                                        alt="Natalya Undergrowth" title="Natalya Undergrowth"></img>
                                                </div>
                                                <div className="content">
                                                    <h4 className="card-title">Natalya Undergrowth</h4>
                                                    <h6 className="category text-muted">Freelancer</h6>
                                                    <p className="card-description">"Thank you for making it painless, pleasant and most
                                                        of all hassle free! I am so pleased with this product. Dude, your stuff is
                                                        great! I will refer everyone I know."</p>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <a href="http://facebook.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the facebook profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-facebook"></i>
                                                    </a>
                                                <a href="http://plus.google.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the plus profile of Desmond Purpleson">
                                                    <i className="fi fi-sr-envelope"></i>
                                                    </a>
                                                <a href="http://twitter.com/" className="btn btn-just-icon btn-simple"
                                                    aria-label="View the twitter profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-twitter-alt-circle"></i></a>
                                                <a href="http://linkedin.com/"
                                                    className="btn btn-just-icon btn-simple"
                                                    aria-label="View the linkedin profile of Desmond Purpleson">
                                                    <i className="fi fi-brands-linkedin"></i>
                                                </a>
                                                <a href="http://linkedin.com/"
                                                className="btn btn-just-icon btn-simple"
                                                aria-label="View the linkedin profile of Desmond Purpleson">
                                                <i className="fi fi-brands-instagram"></i>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-3xl hestia-blogs " id="blog" data-sorder="hestia_blog">
                                <div className="bg-white py-24 sm:py-32">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
                                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Linkedin" width="158" height="48"></img>
                                            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"></img>
                                            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"></img>
                                            <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"></img>
                                            <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"></img>
                                        </div>
                                    </div>
                                </div>
                        </section> */}

                </div>
{/* 
                <div  className="rounded-3xl h-[80vh] hestia-contact contactus section-image" data-sorder="hestia_contact"
                style={{backgroundImage: 'url(./contact1.jpg)'}}>
                <div className="visblecontainer rounded-3xl">
                    <div className="text-center hestia-shop-title-area">
                        <h2 id="ContactMe" className="hestia-title">Contact information</h2>
                    </div>
                    <div className="grid grid-cols-2 grid-cols gap-6 h-72 text-white">

                        <div className="">
                            <a className="hover:no-underline" href="https://www.linkedin.com/in/zhang-xianzhe-03133a259/"><h4 className="info-title items-center text-white"><i className="fi fi-brands-linkedin mr-3"></i> Linkedin</h4>
                                <p>Xianzhe Zhang</p></a>

                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="https://outlook.office365.com/mail/">
                                <h4 className="info-title items-center text-white"><i className="fi fi-sr-envelope mr-6"></i>E-mail</h4>
                                <p>z5443003@ad.unsw.edu.au</p>
                            </a>
                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="https://www.facebook.com/profile.php?id=100085874466260">
                            <h4 className="info-title items-center text-white"><i className="fi fi-brands-facebook mr-6"></i>Facebook</h4></a>
                            <p>Xianzhe Zhang</p>
                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="0434344292"><h4 className="info-title items-center text-white"><i className="fi fi-sr-circle-phone-flip mr-6"></i>Phone</h4>
                            <p>0434344292</p></a>
                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="https://www.instagram.com/invites/contact/?i=er73s6a2y80u&utm_content=pblnb0t"><h4 className="info-title items-center text-white"><i className="fi fi-brands-instagram mr-6"></i>Instagram</h4>
                            <p>scottzhang9779</p></a>
                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="https://www.xiaohongshu.com/user/profile/5e36719a0000000001006210?xhsshare=CopyLink&appuid=5e36719a0000000001006210&apptime=1700945579"><h4 className="info-title items-center text-white"><i className="fi fi-sr-book-alt mr-6"></i>Little Red Book</h4>
                            <p>贤哲scott</p></a>
                        </div>
                        <div className="description">
                            <a className="hover:no-underline" href="https://www.wechat.com/"><h4 className="info-title items-center text-white"><i className="fi fi-sr-comments mr-6"></i>Wechat</h4>
                            <p>Scottt1110</p></a>
                        </div>
                    </div>
                    <footer className="text-white p-4 text-base-content flex justify-center">
                        <p>Copyright © 2023-2024 - All right reserved by Xianzhe</p>
                    </footer>
                    </div>
                </div> */}
                </div>
      
                                    
                
                
        </body>
        
    </div>
  );
}

export default Home;
