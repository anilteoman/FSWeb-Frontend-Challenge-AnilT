import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Hero = () => {
    return (
      <div className="w-full overflow-hidden">
        
        <div className="relative bg-[linear-gradient(to_right,_#3730a3_70%,_#cbf281_70%)]">
          
  
          <div className="relative flex items-center justify-between w-4/6 mx-auto px-6">
            <div className="flex flex-col gap-9 w-3/6 my-30">
              <h1 className="font-bold text-[60px] text-[#cbf281] font-['Inter',Helvetica]">
                I am a Frontend
                <br />
                Developer...
              </h1>
  
              <p className="text-2xl text-white font-['Inter',Helvetica]">
                ...who likes to craft solid and scalable frontend products with
                great user experiences.
              </p>
  
              <div className="flex items-center gap-4">
                <a
                  href='https://github.com/anilteoman'
                  className="bg-white text-[#3730a3] border-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5"
                >
                  <FontAwesomeIcon size='xl' icon={faSquareGithub} />
                  <span className="font-medium text-lg">Github</span>
                </a>
  
                <a
                  href='https://www.linkedin.com/in/anilteoman/'
                  className="bg-white text-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>
              </div>
            </div>
  
            <div className="relative">
            
              <img
                className="rounded-4xl shadow-2xl"
                alt="resim"
                src="/aLogo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Hero