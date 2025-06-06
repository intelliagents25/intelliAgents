'use client';
import React, { useState } from 'react';
import "../globals.css";
import HowItWorks from '../components/HowItWorks';

const AboutUsPage = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <div className="min-h-screen flex flex-col">
                <div className="bg-blue">
                    <div className="gap-[32px] pt-20 text-center">
                        <p className="text-light text-[18px] font-[500] roboto-font">About Us</p>
                        <h1 className="text-dark text-[48px] font-[400] suez-font">The Story Behind IntelliAgents</h1>
                    </div>
                    
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full items-center justify-between pt-[32px] md:pt-[128px] lg:pt-[128px] pb-[128px] px-10 md:px-20 lg:px-32">
                        {/* Left content */}
                        <div className="text-dark space-y-5 font-[400] flex flex-col justify-center rounded-lg">
                            <h2 className=" text-[20px] md:text-[40px] lg:text-[40px] text-center md:text-left lg:text-left " style={{ fontFamily: 'Suez One' }}>What is IntelliAgents?</h2>
                            <p className="text-dark text-[18px] roboto-font">IntelliAgents is your AI-powered semester planning assistant, designed to help students stay organised and stress-free. With just a few clicks, our smart system extracts key deadlines from your syllabus and syncs them directly to your Google Calendar—no more manual input, missed deadlines, or last-minute scrambles.</p>
                            <p className="text-dark text-[18px] roboto-font">Whether you're managing multiple courses, extracurriculars, or work commitments, IntelliAgents ensures you have a clear roadmap for your semester, so you can focus on what truly matters—learning, growing, and achieving your goals.</p>
                        </div>
            
                        {/* Right content */}
                        <div className="flex justify-end">
                            <img
                            src="/images/cal_illustration.png"  
                            className="w-[157px] lg:w-[328px] md:w-[328px]" 
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFB]">                    
                    <div className="flex flex-col md:grid md:grid-cols-2 w-full items-center justify-between pt-[32px] px-10 md:px-20 lg:px-32 mb-[32px]">                      
                        {/* Left content */}
                        <div className="flex justify-start mr-20 ml-20">
                            <video
                            src="/images/e347121d75f4354721998732ed6789ece6c9bbbd.mp4" 
                            alt="Animated mascot" 
                            className="w-[532px]" 
                            autoPlay 
                            loop 
                            muted
                            playsInline
                            />
                        </div>
                                   
                        {/* Right content */}
                        <div className="text-dark space-y-5 font-[400] flex flex-col justify-center rounded-lg">
                            <h2 className=" text-[20px] md:text-[40px] lg:text-[40px] text-center md:text-left lg:text-left " style={{ fontFamily: 'Suez One' }}>The IntelliTeam</h2>
                            <p className="text-dark text-[18px] roboto-font">IntelliAgents is built by a passionate team of students at UBC’s MDIA470 course, in collaboration with Emerging Media Lab. Our team — Valery, Stuti, Iris, Rithika, Leon, Daffa, and Vivian — shares a common goal: making academic planning effortless and efficient.</p>
                            <p className="text-dark text-[18px] roboto-font">As students, we understand the challenges of juggling assignments, exams, and projects. That’s why we created IntelliAgents—to empower students with smarter, AI-driven tools that simplify semester planning and reduce stress.</p>
                            <p className="text-dark text-[18px] roboto-font">We're constantly innovating and improving IntelliAgents to serve students better. Try it out today and take control of your semester with ease!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue flex flex-col justify-center items-center">
                    <div className="gap-[32px] pt-20 text-center flex flex-col items-center">
                        <h1 className="text-dark text-[48px] font-[400] suez-font">Where does my data go?</h1>
                    </div>
                    
                    <div className="w-full flex flex-col justify-center items-center space-y-5 justify-center items-center pt-[32px] pb-[128px] px-10 md:px-20 lg:px-32">
                        <p className="text-dark text-[18px] roboto-font text-center max-w-5xl">Your data security and privacy are our highest priorities at IntelliAgents. We employ industry-leading standards and robust security measures to ensure your personal information is protected at all times. IntelliAgents strictly adheres to applicable privacy laws and regulations, ensuring your data remains confidential and secure.</p>
                        <p className="text-dark text-[18px] roboto-font text-center max-w-5xl">We are committed to transparency about how your information is used. Your data is processed solely to enhance and personalize your experience with our services. Under no circumstances do we sell, rent, or share your data with third-party entities without obtaining your explicit consent.</p>
                        <p className="text-dark text-[18px] roboto-font text-center max-w-5xl">Should there be a need to involve trusted third-party partners to facilitate specific services, we will always clearly inform you and seek your approval before sharing any of your information. You retain complete control over your data and can review, modify, or request deletion of your information at any time.</p>
                    </div>
                </div>

                <div className="bg-[#FFFFFB]">
                    <div className="flex flex-col-reverse md:grid w-full items-center justify-center pt-[32px] px-10">
                        {/* Title and Subtitle */}
                        <div className="space-y-5 font-[400] flex flex-col justify-center items-center rounded-lg text-center">
                            <h2 className="text-[20px] md:text-[40px] lg:text-[40px]" style={{ fontFamily: 'Suez One' }}>
                                Let us help you with your semester :
                            </h2>
                            <p className="text-dark text-[18px] roboto-font">
                                Get started with 3 different methods
                            </p>
                            <HowItWorks />
                        </div>

                        {/* Images Side by Side */}
                        <div className="flex flex-wrap items-center justify-center md:space-x-[200px] lg:space-x-[300px] mt-[-64px]">
                            <img
                                src="/images/0ddee70f985b3ca8987924905e766ca4.png"
                                className="w-[100px] md:w-[200px] lg:w-[300px] rotate-[-10.86deg] transition-transform duration-300 ease-in-out"
                                alt="Image 1"
                            />
                            <img
                                src="/images/772c4cfa41b31aa38d151d5b2c490a87.png"
                                className="w-[100px] md:w-[200px] lg:w-[300px] rotate-[-4.79deg] transition-transform duration-300 ease-in-out"
                                alt="Image 2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
