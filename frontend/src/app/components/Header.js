import React from 'react';

const Header = () => {
  return (
    <header className="h-[137px] px-[90px] pt-[21px] h- bg-gradient-to-b from-[#37b5ec] via-[#98d7f2] to-[#f9f9f9]">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-4xl text-[#272776] font-bold">Intelli</div>
        <div className="space-x-8">
          <a href="#about" className="text-xl font-semibold text-black hover:text-gray-700">About Us</a>
          <a href="#FAQ" className="text-xl font-semibold text-black hover:text-gray-700">FAQ's</a>
          <a href="#contact" className="text-xl font-semibold text-black hover:text-gray-700">Contact Us</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;