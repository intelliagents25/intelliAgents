import React from 'react';
import Image from 'next/image';

const DescriptionBox = () => {
  return (
    <><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" /><div className="relative flex items-center px-16 py-8 z-10">
        {/* Description Box */}
        <div className="relative z-10 flex">
          <div className="p-4 border-[4px] border-[#151515] w-[583px] rounded-2xl bg-[#F9F9F9] z-10 w-[583px] h-[222px]">
            <h1 className="text-[32px] font-[400] text-[#000000] mt-[-15px]" style={{ fontFamily: 'Inria Sans' }}>Hey! We're</h1>
            <h1 className="text-[85px] font-[800] text-[#272776] mt-[-35px]" style={{ fontFamily: 'Inter' }}>IntelliAgents</h1>
            <p className="text-[#000000B2] text-[21px] font-[400] mt-[-20px]">
              Agentic semester partners created by students, for students.
            </p>
            <a href="#how-it-works" className="text-[#6088CB] hover:text-blue-600 text-[15px] font-[400] underline">
              Show me how it works
            </a>
          </div>
          <div className="relative ml-[-40px] mt-[20px] z-0">
            <Image
              src="/images/temp_mascot.png"
              alt="Robot Mascot"
              width={160}
              height={160}
              className="transform rotate-[36.38deg]" />
          </div>
        </div>
      </div></>
  );
};

export default DescriptionBox;