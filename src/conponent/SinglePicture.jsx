import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Database from "../data/Database.json";
import { useLanguage } from "../help/helpFunction";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SinglPic() {
  const lang = useLanguage();
  const { gallery } = useParams();
  const picture = gallery;
  const navigate = useNavigate();
  const index = parseInt(picture);
  const FavSecMode = useState(localStorage.getItem("FavSecMode"));
  const SelectedPictureDate =
    FavSecMode == ture
      ? Database.PersonalInfo.Picture.Favorite
      : Database.PersonalInfo.Picture.AllPicture;
  const totalPictures = SelectedPictureDate.length;
  const nextIndex = (index + 1) % totalPictures;
  const prevIndex = (index - 1 + totalPictures) % totalPictures;
  const item = SelectedPictureDate[index];
  const preItem = SelectedPictureDate[prevIndex];
  const nextItem = SelectedPictureDate[nextIndex];
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOriginalImageClick = () => {
    window.location.reload();
    // alert(`${lang === "0" ? "You have turned on the Raw picture mode." : (lang === "1" ? "恭喜您已开启原图模式。 " : "")}`);
  };
  const toolbarButtons = [
    <button
      key="originalButton"
      className=" border-white px-4 text-white hover:bg-gray-700 hover:text-white"
      onClick={handleOriginalImageClick}
    >
      {lang === "0" ? "Raw picture" : lang === "1" ? "原图 " : ""}
    </button>,
    // 其他按钮
  ];
  {
    console.log(SelectedPictureDate);
  }
  return (
    <div className="bg-black">
      {
        <motion.div>
          <Lightbox
            className="animate__animated animate__zoomIn duration-500"
            mainSrc={item}
            nextSrc={nextItem}
            prevSrc={preItem}
            mainSrcThumbnail={item.replace(
              /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
              ".md.$1",
            )}
            nextSrcThumbnail={nextItem.replace(
              /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
              ".md.$1",
            )}
            prevSrcThumbnail={preItem.replace(
              /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
              ".md.$1",
            )}
            onCloseRequest={() => {
              navigate(`/life/gallery`);
            }}
            onMovePrevRequest={() => {
              navigate(`/life/gallery/${prevIndex}`);
            }}
            onMoveNextRequest={() => {
              navigate(`/life/gallery/${nextIndex}`);
            }}
            closeLabel={"string"}
            animationOnKeyInput={true}
            imageTitle={
              (lang === "0"
                ? "Personal Gallery "
                : lang === "1"
                  ? "个人图库 "
                  : "") +
              " [ " +
              picture +
              " / " +
              totalPictures +
              " ]"
            }
            // imageCaption={(lang === "0" ? "" : (lang === "1" ? "sdmksdmksmdksmkdmskdmskdmksmdskmdksmkmskdmskdmkmksmdksmd " : ""))}
            clickOutsideToClose={false}
            animationDuration={700}
            onImageLoad={() => {
              setImageLoaded(true);
            }}
            toolbarButtons={toolbarButtons}
          />
        </motion.div>
      }
      <div className="hidden">
        <img
          src={SelectedPictureDate[(nextIndex + 1) % totalPictures].replace(
            /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
            ".md.$1",
          )}
          alt="prevThumbnail"
        />
        <img
          src={SelectedPictureDate[(nextIndex + 2) % totalPictures].replace(
            /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
            ".md.$1",
          )}
          alt="prevThumbnail"
        />
        {/* <img src={SelectedPictureDate[nextIndex+1]} alt="preload" />
        <img src={SelectedPictureDate[nextIndex+2]} alt="preload" />
        <img src={SelectedPictureDate[nextIndex+3]} alt="preload" />
        <img src={SelectedPictureDate[nextIndex+4]} alt="preload" />
        <img src={SelectedPictureDate[nextIndex+5]} alt="preload" />
        <img src={SelectedPictureDate[nextIndex+6]} alt="preload" /> */}
      </div>
    </div>
  );
}

export default SinglPic;
