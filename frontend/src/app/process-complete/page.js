'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const ProcessComplete = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
                rel="stylesheet"
            />

            <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-center items-center">
                {/* <Header /> */}
                {/* <div className="flex flex-col items-center"> */}
                    <CheckCircle className="w-24 h-24 text-sky-300 mb-4" />
                    <h1 className="text-[24px] text-[#000000] font-[700] mb-4" style={{ fontFamily: 'Inria Sans' }}>Processing Complete!</h1>

                    <div className="text-center max-w-5xl mb-8">
                        <p className="text-[#00000080] text-[20px] font-[500] mb-2" style={{ fontFamily: 'Roboto Mono' }}>
                            Your document has successfully been processed by IntelliAgents!
                        </p>
                    </div>
                {/* </div> */}
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default ProcessComplete;
