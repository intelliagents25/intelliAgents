import React from 'react';

const Footer = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Suez+One&display=swap" rel="stylesheet"
      />
    <footer className="px-[32px] py-[32px] bg-[#FFFFFB] border-[1px] border-[#000000]">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-[40px] font-[400] text-[#152935]" style={{ fontFamily: 'Suez One' }}>IntelliAgents</h2>
        <p className="text-[14px] text-gray-600 -mt-2" style={{ fontFamily: 'Roboto Mono' }}>Your student-led, AI-powered, semester agent</p>
        
        <div className="flex gap-8 mt-5 mb-5" style={{ fontFamily: 'Roboto Mono' }}>
          <a href="/" className="text-[15px] font-[500] text-[#152935] hover:underline">Home</a>
          <a href="about-us" className="text-[15px] font-[500] text-[#152935] hover:underline">About</a>
          <a href="/" className="text-[15px] font-[500] text-[#152935] hover:underline">How It Works</a>
          <a href="contact-us" className="text-[15px] font-[500] text-[#152935] hover:underline">Contact</a>
        </div>
        <a href="#" className="text-[15px] font-[700] text-[#152935] hover:underline">Back to top</a>

        <div className="border-t border-[#C1C7CD] mt-5"></div>
        
        <p className="text-sm text-gray-600 mt-5">© 2025 IntelliAgents</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;