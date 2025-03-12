"use client";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SignInSection from './components/SignInSection';
import DropZone from './components/DropZone';
import FrequentlyAskedQuestionAccordion from './components/FrequentlyAskedQuestionAccordion';

const InfinitiScrollLandingPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Suez+One&display=swap" rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Header />

        {/* Hero Section */}
        <main className="mx-auto">
          <div className="flex flex-row w-full h-[1181px] justify-between bg-[#D5E9FA]">
            {/* Left content */}
            <div className="flex flex-col items-center md:items-start lg:items-start justify-center md:pl-16 lg:pl-16 md:pr-16 lg:pr-16">
              <h1 className="text-[60px] md:text-[90px] lg:text-[120px] text-[#283C69] font-[400]" style={{ fontFamily: 'Suez One' }}>
                IntelliAgents
              </h1>
              <p className="text-[#505F7C] text-[12px] md:text-[18px] lg:text-[24px] font-[400] text-center md:text-left lg:text-left mb-20" style={{ fontFamily: 'Roboto Mono' }}>
                The AI agent that organises your schedule... and <br /> keeps it organised.
              </p>
              <div className="flex flex-col space-y-10 mb-8 items-center">
                {/* Sign-In Section */}
                <SignInSection className='w-[95%]'/>
                
                {/* Separator */}
                <div className="flex items-center w-[95%]">
                  <hr className="flex-grow border-t border-gray-400" />
                  <span className="px-2 text-gray-600 text-sm">or</span>
                  <hr className="flex-grow border-t border-gray-400" />
                </div>
                
                {/* DropZone */}
                <DropZone />
              </div>
            </div>
            
            {/* Right mascot */}
            <div className="flex">
              <img src="/images/temp_mascot.gif" alt="Animated mascot" className="hidden lg:block" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-auto bg-[#FFFFFB]">
            <p className="text-[#454F54] text-[18px] font-[500] pt-10" style={{ fontFamily: 'Roboto Mono' }}>
              How It works
            </p>
            <h2 className="text-[30px] md:text-[45px] font-[400] text-[#152935] mb-10" style={{ fontFamily: 'Suez One' }}>
              Get Started With 3 Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full items-center justify-between">
            
            {/* Left content */}
            <div className="flex justify-center">
              <video 
              src="/images/2c7887a3acc9fd6d266bd4360dc0530933f86c3a.mp4" 
              alt="Animated mascot" 
              className="w-[285px]" 
              autoPlay 
              loop 
              muted
              playsInline
              />
            </div>
            
            {/* Right content */}
            <div className="flex flex-col justify-center space-y-10 mb-10 pl-16 pr-16 rounded-lg">
              <div className="flex flex-col space-y-4 text-[#152935]">
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px]" style={{ fontFamily: 'Roboto Mono' }}>1</div>
                <div>
                  <h2 className="text-[24px] font-[400]" style={{ fontFamily: 'Suez One' }}>Sign in with Google (recommended)</h2>
                  <p className="text-[18px] font-[400]" style={{ fontFamily: 'Roboto Mono' }}>Click on the sign-in button with the google icon to link your google calendar, and have your calendar directly updated.</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px]" style={{ fontFamily: 'Roboto Mono' }}>2</div>
                <div>
                  <h2 className="text-[24px] font-[400]" style={{ fontFamily: 'Suez One' }}>Drag and drop a syllabus without signing in</h2>
                  <p className="text-[18px] font-[400]" style={{ fontFamily: 'Roboto Mono' }}>Worried about data privacy? Check out our FAQ section below! If you still want to go ahead without signing in, we'll download a file for you to sync up on your calendar.</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px]" style={{ fontFamily: 'Roboto Mono' }}>3</div>
                <div>
                  <h2 className="text-[24px] font-[400]" style={{ fontFamily: 'Suez One' }}>Paste text from your syllabus directly</h2>
                  <p className="text-[18px] font-[400]" style={{ fontFamily: 'Roboto Mono' }}>If you don't have a pdf or document - we still got you! Simply copy and paste your syllabus into our text box.</p>
                </div>
              </div>
            </div>
            
          </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-auto bg-[#D5E9FA] pb-10">
            <h2 className="text-[30px] md:text-[45px] font-[400] text-[#152935] mb-20 pt-10" style={{ fontFamily: 'Suez One' }}>
              Frequently Asked Questions
            </h2>
            <FrequentlyAskedQuestionAccordion />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default InfinitiScrollLandingPage;
