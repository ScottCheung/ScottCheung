/** @format */

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import Database from '../data/Database.json';
import { useLanguage } from '../help/helpFunction';
import { useParams, useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import N from '../conponent/Num';
import CtButton from '../conponent/ctButton';
import { useAppContext } from '../help/ContextManager';

function GridHouseCard() {
  const { Components } = useAppContext();
  const lang = useLanguage();
  const navigate = useNavigate();

  const [FavSecMode, setFavSecMode] = useState(false);
  const [reverseOrder, setReverseOrder] = useState(true);
  const MaxScale = 5;
  const MinScale = 1;
  const picturesDate =
    FavSecMode ?
      Database.PersonalInfo.Picture.Favorite
    : Database.PersonalInfo.Picture.AllPicture;
  const [loadedImages, setLoadedImages] = useState(42);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setcurrentImage] = useState(
    localStorage.getItem('currentImage') || null,
  );
  const [zoomLevel, setZoomLevel] = useState(1);
  const picturesToDisplay =
    reverseOrder ?
      picturesDate.slice(-loadedImages).reverse()
    : picturesDate.slice(0, loadedImages);
  const totalPictures = picturesDate.length;
  const [zIndexes, setZIndexes] = useState(
    Array.from({ length: totalPictures }, (_, index) => index + 1),
  );
  const { gallery } = useParams();
  const index = parseInt(gallery);
  const nextIndex =
    reverseOrder ?
      (index - 1 + totalPictures) % totalPictures
    : (index + 1) % totalPictures;
  const prevIndex =
    reverseOrder ?
      (index + 1) % totalPictures
    : (index - 1 + totalPictures) % totalPictures;

  const item = picturesDate[(index - 1 + totalPictures) % totalPictures];
  const preItem = picturesDate[prevIndex];
  const nextItem = picturesDate[nextIndex];
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  // console.log("prevIndex  "+ (prevIndex));
  // console.log("index  "+ (index));
  // console.log("nextIndex  "+ (nextIndex));
  // console.log("prevIndex  "+ (preItem));
  // console.log("item  "+ (item));
  // console.log("nextIndex  "+ (nextItem));
  const handleOriginalImageClick = () => {
    // item.replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, ".md.$1")
    // alert(`${lang === "0" ? "You have turned on the Raw picture mode." : (lang === "1" ? "恭喜您已开启原图模式。 " : "")}`);
  };

  const toolbarButtons = [
    <button
      key='originalButton'
      className='px-4 text-white border-white hover:bg-gray-700 hover:text-white'
      onClick={handleOriginalImageClick}
    >
      {lang === '0' ?
        'Raw picture'
      : lang === '1' ?
        '原图 '
      : ''}
    </button>,
  ];
  // 放大图片
  const zoomIn = () => {
    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = Math.min(prevZoomLevel + 1, MaxScale);
      console.log(newZoomLevel);
      return newZoomLevel;
    });
  };

  // 缩小图片
  const zoomOut = () => {
    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = Math.max(prevZoomLevel - 1, MinScale);
      console.log(newZoomLevel);
      return newZoomLevel;
    });
  };

  // 切换图片时重置为1
  const resetZoom = () => {
    setZoomLevel(1);
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  let delayIndex = 0;
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px 200px 0px',
  });
  const loadMoreImages = () => {
    if (!inView) {
      // 如果上一批图片还在加载过程中，不触发加载新图片的逻辑
      return;
    }
    delayIndex = 0;
    setLoadedImages((prev) => prev + 36);
    setZIndexes((prevZIndexes) => {
      const updatedZIndexes = prevZIndexes.map((value, i) =>
        i == index ? 1 : 0,
      );
      return updatedZIndexes;
    });
  };

  const handleIntersection = (entry) => {
    if (entry.isIntersecting) {
      loadMoreImages();
    }
  };
  useEffect(() => {
    let timeoutId;

    if (gallery !== undefined && !isNaN(index)) {
      setLightboxIsOpen(true);
      timeoutId = setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 1000);
    } else {
      setLightboxIsOpen(false);
      document.body.style.overflow = 'scroll';
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [gallery, index]);

  useEffect(() => {
    // Attach event listener for scrolling to check for reaching the bottom
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight + 1 // Adjust the threshold as needed
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]); // Run whenever inView changes

  return (
    <div>
      <Navbar />

      {/* <link
        rel="stylesheet"
        href="../style/uicons/css/all/all.css"
        type="text/"
      />
      <link rel="stylesheet" href="../style/animation.css" /> */}

      <div className={`flex justify-between w-[100%]`}>
        <div className='mt-24 px-[20px] w-[100%]'>
          <AnimatePresence>
            <header className='py-12 animate_animated animate__fadeIn w-[100%] px-auto'>
              <div className='items-end justify-between lg:flex'>
                <div className='flex-col justify-start'>
                  <h1 className='text-[40px] font-[500]  animate_animated animate__fadeInLeft'>
                    {lang == '0' && 'Life Gallery'}
                    {lang == '1' && '生活图库'}
                  </h1>
                  <p className='animate_animated animate__fadeInRight text-[15px]'>
                    {Database.PersonalInfo.Picture.pictureNotify[lang]}
                  </p>
                </div>
                <div className='flex flex-col text-right'>
                  <h1 className='text-[27px] font-[500]  animate_animated animate__fadeInRight'>
                    {lang == '0' &&
                      (FavSecMode ? 'Favorite Pictures' : 'All Pictures')}
                    {lang == '1' && (FavSecMode ? '精选图片' : '全部图片')}
                  </h1>
                  <p className='animate_animated animate__fadeInLeft text-[20px] flex justify-end'>
                    <i className='pt-1 mr-3 fi fi-sr-picture'></i>
                    <N className='w-[200px]' n={totalPictures} d={1} />
                  </p>
                </div>
              </div>
            </header>
            <motion.div
              layout
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className='w-[100%] px-auto flex justify-between lg:z-50 sticky top-[12px] mt-[20px] h-0 mb-[50px]'
            >
              <motion.label
                layout
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className='relative inline-flex flex-col mb-12 cursor-pointer lg:z-50'
              >
                {!lightboxIsOpen && Components.NavBar === 'visible' && (
                  <div className='inline-flex items-center'>
                    {/* {con} */}
                    <div
                      className={`animate_animated animate__fadeInLeft w-20 h-12   flex  items-center rounded-full p-2 cursor-pointer ${
                        !reverseOrder == true ?
                          'justify-end bg-gradient-to-br from-sky-500 to-emerald-500'
                        : 'justify-start bg-gray-300'
                      }`}
                      onClick={() => {
                        setReverseOrder(!reverseOrder);
                        localStorage.setItem('reverseOrder', !reverseOrder);
                      }}
                    >
                      <motion.div
                        className={`w-8 h-8 bg-white/50 rounded-full`}
                        layout
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className='animate_animated animate__fadeInRight ms-3 text-[15px] font-medium text-gray-900 darrk:text-gray-200'>
                      {lang == '0' ? 'Sequential' : '时间正序'}
                    </span>
                  </div>
                )}
              </motion.label>
              <motion.label
                layout
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className='relative inline-flex flex-col mb-12 cursor-pointer lg:z-50'
              >
                {!lightboxIsOpen && Components.NavBar === 'visible' && (
                  <div className='inline-flex items-center'>
                    <span className='animate_animated animate__fadeInLeft mr-3 text-[15px] font-medium text-gray-900 darrk:text-gray-200'>
                      {lang == '0' ? 'Favorite' : '精选'}
                    </span>
                    <div
                      className={`animate_animated animate__fadeInRight w-20 h-12 flex items-center rounded-full p-2 cursor-pointer ${
                        FavSecMode == true ?
                          'justify-end bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
                        : 'justify-start bg-gray-300'
                      }`}
                      onClick={() => {
                        setFavSecMode(!FavSecMode);
                        localStorage.setItem('FavSecMode', !FavSecMode);
                        // setLoadedImages(36);
                      }}
                    >
                      <motion.div
                        className={`w-8 h-8 bg-white/50 rounded-full`}
                        layout
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                )}
              </motion.label>
            </motion.div>

            <motion.div
              className={` w-[100%] px-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12  z-0`}
              style={{ display: 'grid' }}
            >
              <AnimatePresence>
                {picturesToDisplay.map((item, index) => (
                  <AnimatePresence>
                    <motion.div
                      layoutId={item + 'container'}
                      layout
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{
                        opacity: 0.9,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={item}
                      style={{
                        animationDelay: `${0.04 * (index % 12)}s`,
                        zIndex: zIndexes[index],
                      }}
                      className=' flex w-full  aspect-square justify-center items-center  overflow-hidden bg-gray-500/90  rounded-[14px] shadow-lg animate_animated animate__zoomIn darrk:bg-gray-700 '
                    >
                      <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1, transition: { duration: 1 } }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        // whileHover={{
                        //   scale: 1.2,
                        //   rotate: 2,
                        //   transition: { duration: 1 },
                        // }}

                        onClick={() => {
                          setSelectedImage(item);
                          setcurrentImage(item);
                          localStorage.setItem('currentImage', item);
                          setZIndexes((prevZIndexes) => {
                            const updatedZIndexes = prevZIndexes.map(
                              (value, i) => (i == index ? 1 : 0),
                            );
                            return updatedZIndexes;
                          });

                          setLightboxIsOpen(true);
                          navigate(
                            `/gallery/${
                              reverseOrder ? totalPictures - index : index + 1
                            }`,
                          );
                          timeoutId = setTimeout(() => {
                            document.body.style.overflow = 'hidden';
                          }, 500);
                        }}
                        style={{
                          animationDelay: `${0.05 * (index % 36)}s`,
                          zIndex: zIndexes[index],
                        }}
                        className='absolute inset-0 flex items-center justify-center animate_animated animate__fadeIn'

                        // target="_blank" rel="noopener noreferrer"
                      >
                        <motion.img
                          loading='lazy'
                          // layoutId={item}
                          // transition={{ duration: 0.55, ease: "easeInOut"}}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.6 },
                          }}
                          className='absolute object-cover w-full h-full -z-1'
                          src={item.replace(
                            /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
                            '.md.$1',
                          )}
                          alt={item}
                        />
                      </motion.div>
                      <div
                        role='status'
                        className='flex items-center justify-center w-full h-full rounded-lg -z-10 bg-gray-300/30 darrk:bg-gray-700/30'
                        style={{
                          imageBackground: `url(${item.replace(
                            /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
                            '.md.$1',
                          )})`,
                        }}
                      >
                        <svg
                          className='text-gray-200 animate-pulse w-36 h-36 darrk:text-gray-600'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 18'
                        >
                          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                        </svg>
                        <span className='sr-only'>Loading...</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ))}
              </AnimatePresence>
              <div ref={ref} />
            </motion.div>

            <AnimatePresence>
              {lightboxIsOpen == true && (
                <motion.div
                  layout
                  layoutId={selectedImage + 'container'}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    '  fixed top-0 left-0 w-screen h-screen z-50 bg-gray-950/90 bg-blur-md'
                  }
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 0.7, ease: "easeInOut"}}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={' w-full h-full object-contain'}
                  >
                    <motion.img
                      loading='lazy'
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      layoutId={currentImage}
                      className={`transition-all duration-700 z-10 w-full h-full object-contain overflow-scroll`}
                      src={item}
                      alt={item}
                      style={{
                        transform: `scale(${zoomLevel})`,
                      }}
                      onClick={() => {
                        navigate(`/gallery`);
                        setLightboxIsOpen(false);
                        document.body.style.overflow = 'auto';
                        resetZoom();
                      }}
                    />
                    {/* <motion.img loading="lazy" 
                      layout 
          layoutId={selectedImage}
            className='fixed top-0 left-0 z-10 object-contain w-full h-full transition-all'
            src={item} alt={item.replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, ".md.$1")} /> */}

                    {/* left picture */}
                    <CtButton
                      type={'>'}
                      key={'left'}
                      position={'top-[50%] left-[30px]'}
                      btnsize={'50px'}
                      icon={'w-[16px] h-[16px] rotate-180'}
                      className='z-50 '
                      onClick={() => {
                        setLightboxIsOpen(true);
                        resetZoom();
                        navigate(`/gallery/${prevIndex}`);
                      }}
                    />
                    {/* right picture */}
                    <CtButton
                      type={'>'}
                      key={'right'}
                      position={'top-[50%] right-[30px]'}
                      btnsize={'50px'}
                      icon={'w-[16px] h-[16px] rotate-0'}
                      className='z-50 '
                      onClick={() => {
                        setLightboxIsOpen(true);
                        resetZoom();
                        navigate(`/gallery/${nextIndex}`);
                      }}
                    />
                    {/* close button */}
                    <CtButton
                      type={'x'}
                      key={'close'}
                      position={'top-[20px] right-[30px]'}
                      btnsize={'30px'}
                      icon={'w-[10px] h-[10px] rotate-0'}
                      className='z-50'
                      onClick={() => {
                        navigate(`/gallery`);
                        setLightboxIsOpen(false);
                        document.body.style.overflow = 'auto';
                        resetZoom();
                      }}
                    />
                    {/* zoomIn Button */}
                    <CtButton
                      type={'zoomIn'}
                      key={'zoomIn'}
                      position={'top-[20px] right-[150px]'}
                      btnsize={'30px'}
                      icon={'w-[16px] h-auto rotate-0'}
                      className='z-50'
                      onClick={zoomIn}
                      disabled={zoomLevel === MaxScale}
                    />
                    {/* ZoomOut Button */}
                    <CtButton
                      type={'zoomOut'}
                      key={'zoomOut'}
                      position={'top-[20px] right-[90px]'}
                      btnsize={'30px'}
                      icon={'w-[16px] h-auto rotate-0'}
                      className='z-50'
                      onClick={zoomOut}
                      disabled={zoomLevel === MinScale}
                    />
                    {/* Recovery Button */}
                    <CtButton
                      type={'recovery'}
                      key={'Recovery'}
                      position={'top-[20px] right-[210px]'}
                      btnsize={'30px'}
                      icon={'w-[16px] h-[16px] rotate-0'}
                      className='z-50'
                      onClick={resetZoom}
                      disabled={zoomLevel === 1}
                    />

                    {/* <Lightbox

            className='hidden duration-300 animate_animated animate__zoomIn'
            mainSrc={item}
            nextSrc={nextItem}
            prevSrc={preItem}
            mainSrcThumbnail={item.replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, ".md.$1")}
            nextSrcThumbnail={nextItem.replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, ".md.$1")}
            prevSrcThumbnail={preItem.replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, ".md.$1")}
            animationDisabled={true}
            onCloseRequest={() => {navigate(`/gallery`);setLightboxIsOpen(false);document.body.style.overflow = 'auto';}}
            onMovePrevRequest={() => {
              setLightboxIsOpen(true);
              navigate(`/gallery/${prevIndex}`);
            }}
            onMoveNextRequest={() => {
              setLightboxIsOpen(true);
              navigate(`/gallery/${nextIndex}`);
            }}
            animationOnKeyInput={true}
            imageTitle={(lang == "0" && (FavSecMode==true? "Favorite Pictures":"All Pictures"))+(lang == "1" && (FavSecMode? "精选图片":"全部图片")) +" [ " + gallery +" / " +totalPictures+" ]"}
            // imageCaption={(lang === "0" ? "" : (lang === "1" ? "sdmksdmksmdksmkdmskdmskdmksmdskmdksmkmskdmskdmkmksmdksmd " : ""))}
            clickOutsideToClose={true}
            animationDuration={300}
            onImageLoad={() => {setImageLoaded(true);}}
            toolbarButtons={toolbarButtons}
          />  */}
                  </motion.div>
                </motion.div>
              )}

              {nextIndex && (
                <div className='hidden'>
                  {Array.from({ length: 6 }, (_, i) => (
                    <img
                      loading='lazy'
                      key={i}
                      src={picturesDate[
                        (nextIndex + i + 1) % totalPictures
                      ].replace(/\.(png|jpg|jpeg|gif|bmp|svg|webp)$/, '.th.$1')}
                      alt={`preload-${i}`}
                    />
                  ))}
                  {Array.from({ length: 6 }, (_, i) => (
                    <img
                      loading='lazy'
                      key={i}
                      src={picturesDate[(nextIndex + i + 1) % totalPictures]}
                      alt={`preload-${i}`}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default GridHouseCard;
