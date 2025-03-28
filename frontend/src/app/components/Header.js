import React from 'react';
import Link from 'next/link';
import HowItWorks from './HowItWorks';
import CheckboxDropdown from './CheckboxDropdown.js';

const Header = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Suez+One&display=swap" rel="stylesheet" />

      <header className="h-[68px] px-[16px] bg-[#FFFFFB] border-[1px] border-[#000000] flex items-center">
        <nav className="w-full flex items-center justify-between ml-10 mr-10 md:ml-15 md:mr-15 lg:ml-20 lg:mr-20">
          
          {/* Left Section: Intelli + Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Intelli (Always Visible) */}
            <Link href="/" className="text-[30px] text-[#2C5281] font-[400]" style={{ fontFamily: 'Suez One' }}>
              Intelli
            </Link>

            {/* Navigation Links (Hidden on Small Screens) */}
            <div className="hidden md:flex lg:flex items-center space-x-8">
              <a href="/" className="text-[16px] font-[400] text-[#2C5281] hover:underline">Home</a>
              <a href="about-us" className="text-[16px] font-[400] text-[#2C5281] hover:underline">About</a>
              <a href="contact-us" className="text-[16px] font-[400] text-[#2C5281] hover:underline">Contact</a>
            </div>
          </div>

          {/* Right Section: How It Works */}
          <div className='flex items-center'>
            <HowItWorks />
            <div className="flex md:hidden lg:hidden">
            <CheckboxDropdown />
          </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
