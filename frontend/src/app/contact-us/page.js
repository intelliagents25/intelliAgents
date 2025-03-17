'use client';
import React from 'react';
import "../globals.css";
import ContactUsForm from './ContactUsForm';

const ContactUsPage = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <div className="min-h-screen flex flex-col bg-blue mx-10 md:mx-15 lg:mx-20">
                <div className="bg-[#D5E9FA]">
                    <div>
                        <h1 className="mt-10 text-dark text-center lg:text-start">Have more questions? Let's connect!</h1>
                        <h3 className="mb-10 font-subtitle text-light text-center lg:text-start">Reach out to our team by filling in this form.</h3>
                    </div>
                    
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 w-full items-center justify-between">
                        {/* Left content */}
                        <ContactUsForm />
            
                        {/* Right content */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/contact-us-graphic.svg"
                                alt="Question marks in speech bubbles"
                                className="w-[75vw]" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsPage;