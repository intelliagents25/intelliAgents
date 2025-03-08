'use client';
import React, { useState } from 'react';
import "../globals.css";
import { CheckCircle } from 'lucide-react';

const ProcessComplete = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <div className="min-h-screen bg-blue flex flex-col justify-center items-center">
                <CheckCircle className="w-24 h-24 text-sky-300 mb-4" />
                <h1 className="mb-4">Processing Complete!</h1>
                <h3 className="mb-2 roboto-font text-light">
                    Your document has successfully been processed by IntelliAgents!
                </h3>
            </div>
        </>
    );
};

export default ProcessComplete;
