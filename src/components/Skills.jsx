import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
 

  return (
    <section className="bg-white">
      <div className="flex w-full flex-col mx-auto my-10 p-6 justify-between sm:w-4/6 sm:flex-row">
        <h1 className="text-6xl text-[#3730a3] font-bold font-inter">Skills</h1>
        <SkillsItem />
      </div>
    </section>
  );
};

export default Skills;
