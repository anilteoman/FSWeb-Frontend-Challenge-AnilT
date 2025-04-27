import React from 'react'

export const Hero = () => {
    return (
      <div className="w-full h-[671px] overflow-hidden">
        
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#4731d3]">
            <div className="absolute top-0 right-0 w-[30%] h-full bg-[#cbf281]" />
            <header className='mx-auto h-full p-9 max-w-[1500px]'><p className='text-4xl text-[#cbf281]'>anil</p></header>
          </div>
  
          <div className="relative flex items-center justify-between max-w-[1500px] mx-auto h-full px-6">
            <div className="flex flex-col gap-9 max-w-[528px]">
              <h1 className="font-bold text-[54px] text-[#cbf281] leading-[59.4px] font-['Inter',Helvetica]">
                I am a Frontend
                <br />
                Developer...
              </h1>
  
              <p className="text-2xl text-white font-['Inter',Helvetica] leading-normal">
                ...who likes to craft solid and scalable frontend products with
                great user experiences.
              </p>
  
              <div className="flex items-center gap-3">
                <button
                  variant="outline"
                  className="bg-white text-[#3730a3] border-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5"
                >
                  <i className="w-[26px] h-[26.26px]" />
                  <span className="font-medium text-lg">GithubIcon</span>
                </button>
  
                <button
                  variant="outline"
                  className="bg-white text-[#3730a3] border-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5"
                >
                  <i className="w-6 h-[25.21px]" />
                  <span className="font-medium text-lg">LinkedinIcon</span>
                </button>
              </div>
            </div>
  
            <div className="relative">
              <img
                className="w-[518px] h-auto object-cover"
                alt="Developer portrait"
                src="/hero-right.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Hero