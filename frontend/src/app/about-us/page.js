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
                <div className="bg-[#D5E9FA]">
                    <div className="gap-[32px] pt-20 text-center">
                        <p className="text-[#454F54] text-[18px] font-[500]" style={{ fontFamily: 'Roboto Mono' }}>About Us</p>
                        <h1 className="text-[#152935] text-[48px] font-[400]" style={{ fontFamily: 'Suez One' }}>The Story Behind IntelliAgents</h1>
                    </div>
                    
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full items-center justify-between pt-[32px] md:pt-[128px] lg:pt-[128px] pb-[128px] px-10 md:px-20 lg:px-32">
                        {/* Left content */}
                        <div className="text-[#152935] space-y-5 font-[400] flex flex-col justify-center rounded-lg">
                            <h2 className=" text-[20px] md:text-[40px] lg:text-[40px] text-center md:text-left lg:text-left " style={{ fontFamily: 'Suez One' }}>What is IntelliAgents?</h2>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>IntelliAgents is your AI-powered semester planning assistant, designed to help students stay organised and stress-free. With just a few clicks, our smart system extracts key deadlines from your syllabus and syncs them directly to your Google Calendar—no more manual input, missed deadlines, or last-minute scrambles.</p>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>Whether you're managing multiple courses, extracurriculars, or work commitments, IntelliAgents ensures you have a clear roadmap for your semester, so you can focus on what truly matters—learning, growing, and achieving your goals.</p>
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
                    <div className="flex flex-col md:grid md:grid-cols-2 w-full items-center justify-between pt-[32px] md:pt-[128px] lg:pt-[128px] pb-[128px] px-10 md:px-20 lg:px-32">                      
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
                        <div className="text-[#152935] space-y-5 font-[400] flex flex-col justify-center rounded-lg">
                            <h2 className=" text-[20px] md:text-[40px] lg:text-[40px] text-center md:text-left lg:text-left " style={{ fontFamily: 'Suez One' }}>The IntelliTeam</h2>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>IntelliAgents is built by a passionate team of students at UBC’s MDIA470 course, in collaboration with Emerging Media Lab. Our team — Valery, Stuti, Iris, Rithika, Leon, Daffa, and Vivian — shares a common goal: making academic planning effortless and efficient.</p>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>As students, we understand the challenges of juggling assignments, exams, and projects. That’s why we created IntelliAgents—to empower students with smarter, AI-driven tools that simplify semester planning and reduce stress.</p>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>We're constantly innovating and improving IntelliAgents to serve students better. Try it out today and take control of your semester with ease!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#D5E9FA]">
                    <div className="flex flex-col-reverse md:grid w-full items-center justify-center pt-[128px] pb-[128px] px-10">
                        {/* Title and Subtitle */}
                        <div className="space-y-5 font-[400] flex flex-col justify-center items-center rounded-lg text-center">
                            <h2 className="text-[20px] md:text-[40px] lg:text-[40px]" style={{ fontFamily: 'Suez One' }}>
                                Let us help you with your semester :)
                            </h2>
                            <p className="text-[#152935] text-[18px]" style={{ fontFamily: 'Roboto Mono' }}>
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
