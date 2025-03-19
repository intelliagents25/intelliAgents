'use client';
import React, { useState } from 'react';
import "../globals.css";
import ContactUsForm from './ContactUsForm';

const ContactUsPage = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <main className='flex flex-row  justify-content-center bg-blue ml-20'>
                <div className='flex flex-col'>
                    <h1 className="mt-10 text-dark"> Have more questions? Let's connect </h1>
                    <h3 className="font-subtitle text-light"> Reach out to our team by filling in this form.</h3>
                    <div className='mt-10'><ContactUsForm /></div>
                </div>
                <div>
                    <img src="/images/contact-us-graphic.svg" alt="Contact Us" className="hidden lg:block" />
                </div>
            </main>
        </>
    );
};

export default ContactUsPage;
