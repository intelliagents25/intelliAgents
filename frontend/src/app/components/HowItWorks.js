import React from 'react';
import "../globals.css";
import Link from 'next/link';


const HowItWorks = ({ }) => {
  return (
    <div className="">
      <Link href="/#how-it-works">
        <button className="button-rounded w-[93px] md:w-[139.5px] lg:w-[186px] h-[44px] text-[10px] md:text-[14px] lg:text-[18px] font-[500]">
          How It Works
        </button>
      </Link>
    </div>
  );
};

export default HowItWorks;