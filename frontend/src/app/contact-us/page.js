'use client';
import React, { useState } from 'react';
import "../globals.css";
import ContactUsForm from './ContactUsForm';

const ContactUsPage = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <main className='flex flex-col bg-blue ml-20'>
                <h1 className="mt-10 text-dark"> Have more questions? Let's connect </h1>
                <h3 className="font-subtitle text-light"> Reach out to our team by filling in this form.</h3>
                <div className='mt-10'><ContactUsForm /></div>
            </main>
        </>
    );
};

export default ContactUsPage;
