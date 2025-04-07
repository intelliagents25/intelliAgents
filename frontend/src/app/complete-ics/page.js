'use client';
import React, { useState } from 'react';
import "../globals.css";
import LoadingAnimation from '../components/LoadingAnimation';
import Link from 'next/link';
import Chat from '../components/chat/Chat';
import { generateCalendar } from '../verify/recommended-oh/verifyOhAction';

const handleDownload = () => {
  const icsData = sessionStorage.getItem(process.env.FINAL_ICALS);
  // Log to verify the cleaned-up data
  const blob = new Blob([icsData], { type: 'text/calendar' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'semester_schedule.ics';
  a.click();
}


const mainContent = (
  <main className="flex-1 flex justify-center items-center">
    {/* <div className="flex flex-col items-center justify-center px-4 py-16 text-center w-full"> */}
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center justify-center w-3/5">
        <div className="flex justify-center mb-6">
          <img src="/images/check.png" alt="Check mark" />
        </div>

        <h6 className="mb-4 text-center">Integration Complete!</h6>

      <div className="text-center mx-auto mb-8">
        <p className='text-light text-md md:text-xl lg:text-2xl'>
          <br />
          Thank you for using IntelliAgents!
          <br />
          Download the .ics file below to import it to your preferred calendar application! 
          {" "}
          <a href="/#faq-ics"
            className="text-blue-500 underline hover:text-blue-700">
              Learn more
          </a>
        </p>
      </div>

        <div className="flex flex-col items-center justify-center space-y-5 mt-8">
          <button className="px-8 py-3 font-bold button button-rounded w-64"
            onClick={handleDownload} >
            Download .ics File
          </button>

          {/* <button onClick={generateCalendar}>
          CLICK HERE

          </button> */}

          <Link href={{ pathname: '/' }}>
            <button className="px-8 py-3 button button-blue button-rounded font-bold w-64">
              Return Home
            </button>
          </Link>
        </div>
      </div>

      <div className="flex w-2/5 justify-center items-center hidden lg:flex">
        <Chat />
      </div>
    {/* </div> */}
  </main>
);

const ICSFile = () => {
  const [isLoading, setLoadingState] = useState(false); //TODO: use the state to show loading animation
  
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen flex flex-col bg-blue">
        {isLoading ? <LoadingAnimation /> : mainContent}
      </div>
    </>
  );
};

export default ICSFile;