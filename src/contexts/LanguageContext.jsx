import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);