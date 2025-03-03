'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsForm from './ContactUsForm';

const ContactUsPage = () => {

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
                <div className='ml-20'>
                    <h1 className="text-[#000000] text-[30px] font-[800] mt-10" style={{ fontFamily: 'Inter' }}>
                        Have more questions? Let's connect
                    </h1>
                    <h3 className="text-[#000000] text-[20px] font-[500]" style={{ fontFamily: 'Inter' }}>
                        Reach out to our team by filling in this form.
                    </h3>
                    <div className='mt-10'><ContactUsForm /></div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ContactUsPage;
