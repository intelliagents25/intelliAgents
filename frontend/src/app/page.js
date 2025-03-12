"use client";
import React from 'react';
import Header from './components/Header';
import DescriptionBox from './components/DescriptionBox';
import SignInSection from './components/SignInSection';
import DropZone from './components/DropZone';
import FrequentlyAskedQuestionAccordion from './components/FrequentlyAskedQuestionAccordion';

const InfinitiScrollLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      <Header />
      <main className="flex-1">
        <div className="grid grid-cols-3 gap-y-[100px]">
          <div className="col-span-2">
            <DescriptionBox />
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
        </div>
        <p className="text-[#151515] text-[15px] font-[500] ml-[67px]">By continuing, you agree to our privacy policy.
        <a href="#how-it-works" className="hover:text-blue-600 text-[#37B5EC] text-[15px] font-[500] ml-[10px]">Learn more.</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default InfinitiScrollLandingPage;
