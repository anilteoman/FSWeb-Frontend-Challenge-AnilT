import React from 'react'

const BasicInfo = () => {
    return (
        <div className="w-[300px]">
          <div className="flex flex-col items-start gap-6 p-0">
            <h2 className="font-medium text-white text-3xl leading-7 font-['Inter',Helvetica] w-full">
              Basic Information
            </h2>
    
            <div className="flex items-start gap-2.5">
              <div className="flex-1">
                <p className="font-semibold text-[#cbf281] font-['Inter',Helvetica] mb-6">
                  D. O. B.
                </p>
                <p className="font-semibold text-[#cbf281] font-['Inter',Helvetica] mb-6">
                  Residence
                </p>
                <p className="font-semibold text-[#cbf281] font-['Inter',Helvetica] mb-6">
                  Education Status
                </p>
                <p className="font-semibold text-[#cbf281] font-['Inter',Helvetica] mb-6">
                  Preferred Role
                </p>
              </div>
    
              <div className="w-[190px]">
                <p className="font-normal text-white font-['Inter',Helvetica] mb-6">
                  11.08.1994
                </p>
                <p className="font-normal text-white font-['Inter',Helvetica] mb-6">
                  Trabzon
                </p>
                <p className="font-normal text-white font-['Inter',Helvetica] mb-6 w-[300px]">
                  Bayburt Uni. Mechanical Engineering{"\n"}Bachelor's Degree, 2017
                </p>
                <p className="font-normal text-white font-['Inter',Helvetica] mb-6">
                  Frontend, UI
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default BasicInfo