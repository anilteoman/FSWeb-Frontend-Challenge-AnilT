import React from "react";

const Profile = () => {
  return (
    <section className="bg-[#3730a3]">
      <div className="w-4/6 mx-auto p-6">
        <h1 className="text-[#cbf281] font-bold text-6xl">Profile</h1>
        <div className="flex justify-between py-10">
        <div>isim kısmı</div>
        <div className="relative">
            
            <img
              className="rounded-4xl shadow-2xl"
              alt="resim"
              src="/aLogo.jpg"
            />
          </div>
        <div>about me kısmı</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
