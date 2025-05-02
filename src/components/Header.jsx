

import Switch from "../assets/Switch.jsx";
import langData from "../langData.js";



const Header = () => {



  return (
    <div className= "bg-[linear-gradient(to_right,_#4832D3_70%,_#cbf281_70%)] dark:bg-[linear-gradient(to_right,_#171043_70%,_#211F0B_70%)]">
      <header className=" flex justify-between mx-auto px-6 py-10 w-full sm:w-4/6">
        <p className="text-4xl font-inter font-bold text-[#cbf281]">anil</p>
        <div className="flex justify-between gap-6 sm:gap-8 sm:pr-18 items-center">
            <button className="font-bold text-[#D2D2D2] dark:text-[#D2D2D2] font-inter"><span className="text-[#cbf281] dark:text-[#8173DA]">{langData.tr.langSwitch}</span>'YE GEÇ</button>
            
            <Switch />
        </div>

      </header>
      </div>
     
    
  );
};

export default Header;
