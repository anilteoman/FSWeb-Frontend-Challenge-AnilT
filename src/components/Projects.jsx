import React from 'react'
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section className="bg-[#cbf281]"> {/* arkaplan */}
      <div className="w-4/6 mx-auto p-6 sm:w-full"> {/* ana container */}
      <div className='my-10'>
        <h1 className="text-[#3730a3] font-bold text-6xl font-inter">Projects</h1>
        <div className="flex flex-col items-center py-10"> {/* content container */}
        <ProjectCards />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects