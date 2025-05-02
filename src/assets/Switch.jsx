import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const Switch = () => {

  const {theme , toggleTheme} = useContext(ThemeContext);
  const {ceviri} = useContext(LanguageContext);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" onClick={()=>toggleTheme()}/>
      <div className="w-12 h-6 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-slate-400 peer-checked:to-slate-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-0.5 after:left-1 after:bg-transparent after:rounded-full after:h-5 after:w-5 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-5 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg" />
      <span className="font-bold text-[#4832D3] dark:text-[#D2D2D2] font-inter pl-2">{theme === "dark" ? ceviri("light") : ceviri("darkmode")}</span>
    </label>
  );
}

export default Switch;
