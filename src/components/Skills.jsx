import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
 

  return (
    <section className="bg-white">
      <div className="flex w-4/6 mx-auto my-10 p-6 justify-between">
        <h1 className="text-6xl text-[#3730a3] font-bold">Skills</h1>
        <SkillsItem />
      </div>
    </section>
  );
};

export default Skills;
