import React from 'react';

const HowItWorks = () => {
  const handleScroll = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button 
        onClick={handleScroll}
        className="flex items-center justify-center w-[93px] md:w-[139.5px] lg:w-[186px] h-[44px] border-[1px] border-[#2E374C] rounded-[32px] bg-[#9855D4] text-[#FFFFFF] text-[10px] md:text-[14px] lg:text-[18px] font-[500]"
        style={{ fontFamily: 'Roboto Mono' }}
      >
        How It Works
      </button>
    </div>
  );
};

export default HowItWorks;