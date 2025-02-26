'use client';
import React from 'react';
import Header from './components/Header';
import DescriptionBox from './components/DescriptionBox';
import SignInSection from './components/SignInSection';
import DropZone from './components/DropZone';
import Footer from './components/Footer';

const LandingPage = () => {
  <><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" /></>
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      <Header />
      <main className="flex-1">
        <div className="grid grid-cols-3 gap-y-[100px]">
          <div className="col-span-2">
            <DescriptionBox />
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-1">
          <SignInSection />
          </div>
          <div className="col-span-1">
          <p className="text-[#151515] text-[64px] font-[700] mb-6 text-center" style={{ fontFamily: 'Inria Sans' }}>OR</p>
          </div>
          <div className="col-span-1">
          <DropZone />
          </div>
        </div>
        <p className="text-[#151515] text-[15px] font-[500] ml-[67px]">By continuing, you agree to our privacy policy.
        <a href="#how-it-works" className="hover:text-blue-600 text-[#37B5EC] text-[15px] font-[500] ml-[10px]">Learn more.</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;