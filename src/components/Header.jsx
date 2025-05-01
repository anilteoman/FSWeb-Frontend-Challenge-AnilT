import React from "react";
import Switch from "../assets/Switch.jsx";
import langData from "../langData.js";

const Header = () => {
  return (
    <div class= "bg-[linear-gradient(to_right,_#3730a3_70%,_#cbf281_70%)]">
      <header className=" flex justify-between mx-auto px-6 py-10 w-full sm:w-4/6">
        <p className="text-4xl font-inter font-bold text-[#cbf281]">anil</p>
        <div className="flex justify-between gap-6 sm:gap-8 sm:pr-18 items-center">
            <button className="font-bold text-[#cbf281] font-inter">{langData.tr.langSwitch}</button>
            <div className="flex items-center gap-2">
            <Switch />
            <p className="font-bold text-[#3730a3] font-inter">DARK MODE</p>
            </div>
        </div>

      </header>
      </div>
     
    
  );
};

export default Header;
