"use client";
import React from 'react';
import SignInSection from './components/SignInSection';
import DropZone from './components/DropZone';
import FrequentlyAskedQuestionAccordion from './components/FrequentlyAskedQuestionAccordion';
import Chat from './components/chat/Chat';

const InfinitiScrollLandingPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <div className="min-h-screen bg-white">
          <div className="flex flex-col md:flex-row w-full h-auto justify-between bg-[#D5E9FA] py-20 px-[5%]">
            {/* Left content */}
            <div className="flex flex-col items-center md:items-start lg:items-start justify-center lg:w-1/2">
              <h1 className="text-[10vw] lg:text-[5vw] text-[#283C69] font-[400] suez-font">
                IntelliAgents
              </h1>
              <p className="text-[#505F7C] text-[4.5vw] md:text-[3vw] lg:text-[1.5vw] font-[400] text-center md:text-left lg:text-left mb-10 roboto-font">
                The AI agent that organises your schedule... and keeps it organised.
              </p>
              <div className="flex flex-col mb-8 items-center md:items-start lg:items-start w-full">
                {/* Sign-In Section */}
                <SignInSection className='w-[90%] my-[25px]'/>
                
                {/* Separator */}
                <div className="flex items-center w-[90%]">
                  <hr className="flex-grow border-t border-gray-400" />
                  <span className="px-2 text-gray-600 text-sm my-[20px]">or</span>
                  <hr className="flex-grow border-t border-gray-400" />
                </div>
                
                {/* DropZone */}
                <div className="flex flex-col items-center w-[90%]">
                  <p className="text-[#505F7C] text-[18px] font-[400] roboto-font text-center self-center mb-[10px] mt-[25px]">
                    Continue without signing in
                  </p>
                  <DropZone />
                </div>

              </div>
            </div>
            
            {/* Right mascot */}
            <div className="w-1/2 items-end hidden lg:flex translate-y-[-50px]">
              <Chat />
            </div>
          </div>

          <div id="how-it-works" className="flex flex-col items-center justify-center w-full h-auto bg-[#FFFFFB]">
            <p className="text-[#454F54] text-[18px] font-[500] pt-10 roboto-font">
              How It works
            </p>
            <h2 className="text-[30px] md:text-[45px] font-[400] text-[#152935] mb-10 suez-font">
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
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px] roboto-font">1</div>
                <div>
                  <h2 className="text-[24px] font-[400] suez-font">Sign in with Google (recommended)</h2>
                  <p className="text-[18px] font-[400] roboto-font">Click on the sign-in button with the google icon to link your google calendar, and have your calendar directly updated. After signing in, you will be prompted to upload your syllabus which will be automatically integrated into your Google Calendar.</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px] roboto-font">2</div>
                <div>
                  <h2 className="text-[24px] font-[400] suez-font">Drag and drop a syllabus without signing in</h2>
                  <p className="text-[18px] font-[400] roboto-font">Worried about data privacy? Check out our FAQ section below! If you still want to go ahead without signing in, we’ll download a file for you to sync up on your calendar yourself.</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full border-[1px] border-[#152935] flex items-center justify-center font-[600] text-[20px] roboto-font">3</div>
                <div>
                  <h2 className="text-[24px] font-[400] suez-font">Paste text from your syllabus directly</h2>
                  <p className="text-[18px] font-[400] roboto-font">If you don’t have a pdf or document - we still got you! Simply copy and paste your syllabus into our text box and we’ll generate a file for your to sync up on your calendar yourself.</p>
                </div>
              </div>
            </div>
            
          </div>
          </div>

          <div id="faq" className="flex flex-col items-center justify-center w-full h-auto bg-[#D5E9FA] pb-10">
            <h2 className="text-[30px] md:text-[45px] font-[400] text-[#152935] mb-20 pt-10 suez-font">
              Frequently Asked Questions
            </h2>
            <FrequentlyAskedQuestionAccordion />
          </div>
      </div>
    </>
  );
};

export default InfinitiScrollLandingPage;