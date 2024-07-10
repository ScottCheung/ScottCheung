import React, { createContext, useState } from "react";
const AppContext = createContext();

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [Components, setComponents] = useState({
    NavBar: "visible",
    whymeCard: "hidden",
  });
  const [ResumeView, setResumeView] = useState({
    forceColor: 4,
    colorDepth: 800,
  });
  const [whymeCard, setWhymeCard] = useState();
  const contextValue = {
    Components,
    setComponents,
    whymeCard,
    setWhymeCard,
    ResumeView,
    setResumeView,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
