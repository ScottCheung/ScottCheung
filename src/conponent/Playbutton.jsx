import React, { useState } from 'react';
import { motion } from 'framer-motion';

function PlayButton(Toggle,isToggle) {


  const iconVariants = {
    paused: "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
    playing: "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"
  };

  return (


        <svg onClick={Toggle} viewBox="0 0 36 36">
          <motion.path 
            d={isToggle ? iconVariants.playing : iconVariants.paused}
            animate={{ d: isToggle ? iconVariants.playing : iconVariants.paused }}
            transition={{ duration: 0.3 }}
          />
        </svg>
  );
}

export default PlayButton;
