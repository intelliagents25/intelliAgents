import React from 'react';
import Image from 'next/image';

const DescriptionBox = () => {
  return (
    <div className="relative">
      <div className="w-96 h-96 absolute top-[135px] left-[600.21px] z-0">
        <Image src="/images/temp_mascot.png" alt="Robot Mascot" width={160} height={160} className="transform rotate-[36.38deg]" />
      </div>
      <div className="p-8 border-4 border-[#151515] w-[583px] h-[222px] rounded-2xl bg-white relative z-10 left-[67px] top-[113px]">
        <h1 className="text-4xl font-bold text-[#272776] mb-2">Hey! We're</h1>
        <h1 className="text-5xl font-bold text-[#272776] mb-4">IntelliAgents</h1>
        <p className="text-gray-600 text-lg mb-2">Agentic semester partners created by students, for students.</p>
        <a href="#how-it-works" className="text-blue-500 hover:text-blue-600 text-lg underline">Show me how it works</a>
      </div>
    </div>
  );
};

export default DescriptionBox;