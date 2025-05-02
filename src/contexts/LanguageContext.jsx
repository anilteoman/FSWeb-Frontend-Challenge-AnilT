import { createContext, useEffect } from "react";
import langData from "../langData";
import axios from "../api/axiosInstance";
import { useLocalStorage } from "../hooks/useLocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [translations, setTranslations] = useLocalStorage("translations", {});
  const [currentLang, setCurrentLang] = useLocalStorage("language", "tr");

  const toggleLang = () => {
    setCurrentLang(currentLang === "en" ? "tr" : "en")};

  useEffect(() => {
    axios
      .post("/workintech", langData)
      .then((res) => {
        setTranslations(res.data);
      })
      .catch((err) => {
        console.error("Dil verisi alınamadı:", err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ceviri = (key) => translations?.[key]?.[currentLang] || key;

  return (
    <LanguageContext.Provider
      value={{ ceviri, currentLang, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};