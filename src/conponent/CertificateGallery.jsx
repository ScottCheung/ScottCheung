import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Database from "../Database.json";
import { useLanguage } from "../help/helpFunction";
import { useParams, useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useAppContext } from "../help/ContextManager";

function CertificateGallery() {
  const picturesDate = Database.PersonalInfo.Picture.Certificates;

  const lang = useLanguage();
  const CertificateGallery = (
    <div className="flex justify-center items-center w-full">
      <div className="grid relative w-full">
        {picturesDate.map((item, index) => (
          <a
            key={index}
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center large-span-2 medium-span-3 small-span-6"
          >
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2, delay: 0.02 * index }}
            >
              <div className="w-full rounded-[14px] flex justify-center items-center">
                <img
                  className="flex h-auto max-w-full"
                  src={item.src}
                  alt={item.name}
                />
              </div>
              <div className="flex p-2 text-gray-500 hidden">
                <p className="text-sm">{item.name}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );

  return CertificateGallery;
}

export default CertificateGallery;
