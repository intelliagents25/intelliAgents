'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const GCalIntegration = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />

      <main className="flex-1">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          <CheckCircle className="w-24 h-24 text-sky-300 mb-4" />
          <h1 className="mb-4">Integration Completed!</h1>
          <div className="text-center max-w-5xl mb-8">
            <p className='text-light text-xl'>
              Check your calendar - IntelliAgents has successfully integrated your syllabus into your calendar!
              <br />
              Thank you for using IntelliAgents.
            </p>
          </div>

          <div className="flex flex-row justify-center space-x-10 mt-8">
            {/* Buttons for actions */}
            <button className="px-6 py-2 button button-blue font-bold">
              Return Home
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default GCalIntegration;