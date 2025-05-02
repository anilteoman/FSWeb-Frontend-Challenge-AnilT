import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext';

const BasicInfo = () => {
  const {ceviri} = useContext(LanguageContext);
    return (
        <div className="w-[300px]">
          <div className="flex flex-col items-start gap-6 p-0">
            <h2 className="font-medium text-white text-3xl leading-7 font-inter w-full">
              {ceviri("info")}
            </h2>
    
            <div className="flex items-start gap-2.5">
              <div className="flex-1">
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                  {ceviri("dob")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("residence")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("edStatus")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("prefRole")}
                </p>
              </div>
    
              <div className="w-[190px]">
                <p className="font-normal text-white font-inter mb-6">
                  11.08.1994
                </p>
                <p className="font-normal text-white font-inter mb-6">
                  Trabzon
                </p>
                <p className="font-normal text-white font-inter mb-6 w-[300px]">
                {ceviri("uni")}
                </p>
                <p className="font-normal text-white font-inter mb-6">
                  Frontend, UI
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default BasicInfo