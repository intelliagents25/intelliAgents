'use client';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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

    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
        <Header />
        <main className="flex-1">
        <div className="flex flex-col items-center justify-center px-4 py-16">
      <CheckCircle className="w-24 h-24 text-sky-300 mb-4" />
      <h1 className="text-[24px] text-[#000000] font-[700] mb-4" style={{ fontFamily: 'Inria Sans' }}>Integration Complete!</h1>
      
      <div className="text-center max-w-5xl mb-8">
        <p className="text-[#00000080] text-[20px] font-[500] mb-2" style={{ fontFamily: 'Roboto Mono' }}>
        Check your calendar - IntelliAgents has successfully integrated your syllabus into your calendar! Thank you for using IntelliAgents.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="bg-[#37B5EC] border-[1px] border-[#151515] text-[#EDEDED] font-[700] text-[15px] px-6 py-2 rounded" style={{ fontFamily: 'Inter' }}>
          RETURN HOME
        </button>
      </div>
    </div>

    <img src="/images/temp_mascot.png" alt="Mascot" className="w-[195px] rotate-[29.92deg] ml-[-50px]" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GCalIntegration;