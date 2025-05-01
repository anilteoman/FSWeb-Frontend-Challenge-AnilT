import React from 'react'

const ProjectCards = () => {
  return (
    <div className='flex flex-col gap-10 w-full'> {/*ana container*/}
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px]'> {/*card1*/}
        <img src="/resimler/pizzachall.png" alt="proje1img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
          <h2 className="text-[#3730a3] font-inter text-2xl font-bold text-center sm:text-left ">S8 Pizza Challenge</h2>
          <p className="font-inter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore vel unde eligendi neque porro, explicabo provident non est inventore modi illo dolor pariatur ipsa, cumque id temporibus necessitatibus in?</p>
          <div className='flex gap-2'> {/*techstack*/}
            <p className='border-2 rounded-2xl px-4 py-1 text-white bg-[#3730a3] font-inter'>react</p>
            <p className='border-2 rounded-2xl px-4 py-1 text-white bg-[#3730a3] font-inter'>axios</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold" href="#">View Project</a><a className="font-inter underline font-bold" href="https://github.com/anilteoman/fsweb-s8-challenge-pizza">Github</a>

          </div>
        </div>
      </div>
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px] '> {/*card2*/}
        <img src="/resimler/witflix.png" alt="proje2img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
        <h2 className="text-[#3730a3] font-inter text-2xl font-bold text-center sm:text-left">WitFlix</h2>
          <p className="font-inter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore vel unde eligendi neque porro, explicabo provident non est inventore modi illo dolor pariatur ipsa, cumque id temporibus necessitatibus in?</p>
          <div className='flex gap-2'> {/*techstack*/}
            <p className='border-2 rounded-2xl px-4 py-1 text-white bg-[#3730a3] font-inter'>html</p>
            <p className='border-2 rounded-2xl px-4 py-1 text-white bg-[#3730a3] font-inter'>css</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold" href="#">View Project</a><a className="font-bold font-inter underline" href="https://github.com/anilteoman/WiTFlix">Github</a>

          </div>
        </div>
      </div>
      </div>
  )
}

export default ProjectCards