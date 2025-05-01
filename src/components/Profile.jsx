import React from "react";
import AboutMe from "./AboutMe";
import BasicInfo from "./BasicInfo";

const Profile = () => {
  return (
    <section className="bg-[#3730a3] ">
      <div className="w-4/6 mx-auto p-6 sm:w-full">
      <div className="my-10">
        <h1 className="text-[#cbf281] font-bold text-6xl font-inter">Profile</h1>
        <div className="flex justify-between py-10 sm:flex-col sm:items-center">
        <BasicInfo />
        <div className="relative">
            
            <img
              className="rounded-4xl shadow-2xl sm:w-[200px]"
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
