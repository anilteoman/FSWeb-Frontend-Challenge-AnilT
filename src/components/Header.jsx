import React from "react";
import Switch from "../assets/Switch.jsx";

const Header = () => {
  return (
    <div class= "bg-[linear-gradient(to_right,_#3730a3_70%,_#cbf281_70%)]">
      <header className=" flex justify-between mx-auto px-6 py-10 w-4/6 ">
        <p className="text-4xl font-['Inter',Helvetica] font-bold text-[#cbf281] flex-1">anil</p>
        <div className="flex justify-between gap-3 pr-10 items-center">
            <button className="text-xl ">TÜRKÇE'YE GEÇ</button>
            <Switch />
            <p className="text-xl ">DARK MODE</p>
        </div>

      </header>
      </div>
     
    
  );
};

export default Header;
