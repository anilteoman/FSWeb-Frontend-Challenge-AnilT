import React from "react";
import AboutMe from "./AboutMe";
import BasicInfo from "./BasicInfo";

const Profile = () => {
  return (
    <section className="bg-[#4832D3] dark:bg-[#171043] ">
      <div className="w-full  mx-auto p-6 sm:w-4/6">
      <div className="my-10">
        <h1 className="text-[#cbf281] font-bold text-6xl font-inter">Profile</h1>
        <div className="flex flex-col justify-between py-10 sm:flex-row">
        <BasicInfo />
        <div className="relative">
            
            <img
              className="rounded-4xl shadow-2xl h-[300px]"
              alt="resim"
              src="/aLogo.jpg"
            />
          </div>
          <AboutMe />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
