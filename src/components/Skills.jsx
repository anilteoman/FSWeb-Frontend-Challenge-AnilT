import React, { useContext } from "react";
import SkillsItem from "./SkillsItem";
import { LanguageContext } from "../contexts/LanguageContext";

const Skills = () => {
  const {ceviri} = useContext(LanguageContext);
 

  return (
    <section className="bg-white dark:bg-[#252128]">
      <div className="flex w-full flex-col mx-auto py-10 px-6 justify-between sm:w-4/6 sm:flex-row">
        <h1 className="text-6xl text-[#4832D3] font-bold font-inter dark:text-[#CBF281]">{ceviri("skills")}</h1>
        <SkillsItem />
      </div>
    </section>
  );
};

export default Skills;
