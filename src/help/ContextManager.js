import React, { createContext, useState } from 'react';
const AppContext = createContext();

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [Components, setComponents] = useState({
    NavBar: 'visible',
    whymeCard: 'hidden',
  });
  const [whymeCard, setWhymeCard] = useState({
    id: 'LearningAbility',
    advantage: ['Learning Ability'],
    href: '/whyme/LearningAbility',
    pic: [
      'https://3o.hk/images/2024/01/19/LearningAbility.png',
      '/Graphs/whyme/LearningAbility.png',
    ],
    pic2: '/Graphs/whyme/LearningAbility2.jpg',
    icon: 'fi-rr-graduation-cap',
    description:
      'The candidate possesses outstanding learning ability.\n1. Excellent self-driven learning. The candidate maintains a mindset of constantly learning new things, self-learning piano and guitar out of passion, and systematically studying photography, Photoshop editing, Adobe Illustrator vector graphics design, Lightroom color correction, Premiere, and Final Cut Pro video editing software in spare time. The candidate always learns new technologies and methods with a results-oriented approach for achieving perfection.\n2. Exceptional learning speed. The candidate completed 90% of the coursework for a second degree within one year of their third year of undergraduate study, which should have taken four years. Additionally, the candidate studied four majors and holds three degrees, accomplishing the learning of four majors in the time usually taken for two.\n3. Excellent learning methods. Thanks to AI empowerment, the candidate adeptly uses ChatGPT and other AI tools to quickly grasp fresh technologies and efficiently solve problems. The candidate consistently embraces new technologies and methods rapidly.',
    color1: 'from-red-500',
    color2: 'to-red-700',
  });
  const contextValue = {
    Components,
    setComponents,
    whymeCard,
    setWhymeCard,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
