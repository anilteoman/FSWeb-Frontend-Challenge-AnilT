import React, { useContext } from 'react'
import ProjectCards from './ProjectCards';
import { LanguageContext } from '../contexts/LanguageContext';

const Projects = () => {
  const {ceviri} = useContext(LanguageContext);
  return (
    <section className="bg-[#cbf281] dark:bg-[#211F0B]"> {/* arkaplan */}
      <div className="w-full sm:w-4/6 mx-auto p-6"> {/* ana container */}
      <div className='my-10'>
        <h1 className="text-[#4832D3] font-bold text-6xl font-inter dark:text-[#CBF281]">{ceviri("projects")}</h1>
        <div className="flex flex-col items-center py-10"> {/* content container */}
        <ProjectCards />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects