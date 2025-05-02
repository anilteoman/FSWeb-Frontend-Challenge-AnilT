import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Hero = () => {


    return (
      <div className="w-full overflow-hidden">
        
        <div className="bg-[linear-gradient(to_right,_#4832D3_70%,_#cbf281_70%)] dark:bg-[linear-gradient(to_right,_#171043_70%,_#211F0B_70%)]">
          
  
          <div className="relative flex items-center justify-between w-full sm:w-4/6 mx-auto px-6">
            <div className="flex flex-col gap-9 w-3/6 my-30">
              <h1 className="font-bold text-6xl text-[#cbf281] font-inter">
                I am a Frontend
                <br />
                Developer...
              </h1>
  
              <p className="text-2xl text-white font-inter">
                ...who likes to craft solid and scalable frontend products with
                great user experiences.
              </p>
  
              <div className="flex items-center gap-4">
                <a
                  href='https://github.com/anilteoman'
                  className="bg-white text-[#3730a3] border-1 border-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5 dark:border-[#FFFFFF] dark:bg-[#252128] dark:text-white"
                >
                  <FontAwesomeIcon size='xl' icon={faSquareGithub} />
                  <span className="font-medium text-lg ">Github</span>
                </a>
  
                <a
                  href='https://www.linkedin.com/in/anilteoman/'
                  className="bg-white text-[#3730a3]  border-1 border-[#3730a3] rounded-md pl-3 pr-5 py-3 flex items-center gap-2.5 dark:border-white dark:bg-[#252128] dark:text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>
              </div>
            </div>
  
            <div className="relative">
            
              <img
                className="rounded-4xl shadow-2xl w-[200px] sm:w-full"
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