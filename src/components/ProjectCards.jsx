import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const ProjectCards = () => {
  const {ceviri} = useContext(LanguageContext);
  return (
    <div className='flex flex-col gap-10 w-full'> {/*ana container*/}
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px] dark:bg-[#3A3A3A]'> {/*card1*/}
        <img src="/resimler/pizzachall.png" alt="proje1img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
          <h2 className="text-[#4832D3] font-inter text-2xl font-bold text-center sm:text-left dark:text-[#BAB2E7]">S8 Pizza Challenge</h2>
          <p className="font-inter dark:text-white">{ceviri("projectDesc")} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore vel unde eligendi neque porro, explicabo provident non est inventore modi illo dolor pariatur ipsa, cumque id temporibus necessitatibus in?</p>
          <div className='flex gap-2'> {/*techstack*/}
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>react</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>axios</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold dark:text-[#CBF281]" href="#">{ceviri("projectView")}</a><a className="font-inter underline font-bold dark:text-[#CBF281]" href="https://github.com/anilteoman/fsweb-s8-challenge-pizza">Github</a>

          </div>
        </div>
      </div>
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px] dark:bg-[#3A3A3A]'> {/*card2*/}
        <img src="/resimler/witflix.png" alt="proje2img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
        <h2 className="text-[#4832D3] font-inter text-2xl font-bold text-center sm:text-left dark:text-[#BAB2E7]">WitFlix</h2>
          <p className="font-inter dark:text-white">{ceviri("projectDesc")} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore vel unde eligendi neque porro, explicabo provident non est inventore modi illo dolor pariatur ipsa, cumque id temporibus necessitatibus in?</p>
          <div className='flex gap-2'> {/*techstack*/}
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>html</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>css</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold dark:text-[#CBF281]" href="#">{ceviri("projectView")}</a><a className="font-bold font-inter underline dark:text-[#CBF281]" href="https://github.com/anilteoman/WiTFlix">Github</a>

          </div>
        </div>
      </div>
      </div>
  )
}

export default ProjectCards