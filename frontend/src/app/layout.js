import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Suez_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/auth/[...nextauth]/Providers";
import React from 'react';
import Link from 'next/link'
import Chat from './components/chat/Chat';
import WarningModal from './components/WarningModal'; // Import the modal
import CheckboxDropdown from './components/CheckboxDropdown';
import ScrollToSection from "./components/ScrollToSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal and bold
  variable: "--font-roboto",
});

const suezOne = Suez_One({
  subsets: ["latin"],
  weight: "400", // Only available in regular weight
  variable: "--font-suez-one",
});

export const metadata = {
  title: "IntelliAgent",
  description: "MDIA470 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${suezOne.variable} antialiased`}>
        <AuthProvider>
          <div className="layout">
            
          <header className="h-[68px] px-[16px] bg-[#FFFFFB] border-[1px] border-[#000000] flex items-center">
            <nav className="w-full flex items-center justify-between ml-10 mr-10 md:ml-15 md:mr-15 lg:ml-20 lg:mr-20">
              
              {/* Left Section: Intelli + Navigation Links */}
              <div className="flex items-center space-x-8">
                {/* Intelli (Always Visible) */}
                <Link href="/" className="text-[30px] text-[#2C5281] font-[400] suez-font">
                  Intelli
                </Link>

                {/* Navigation Links (Hidden on Small Screens) */}
                <div className="hidden md:flex lg:flex items-center space-x-8">
                  <Link href="about-us" className="text-[16px] font-[400] text-[#2C5281] hover:underline">About Us</Link>
                  <Link href="contact-us" className="text-[16px] font-[400] text-[#2C5281] hover:underline">Contact Us</Link>
                  <Link href="/#faq" className="text-[16px] font-[400] text-[#2C5281] hover:underline">FAQ's</Link>
                </div>
              </div>

              <ScrollToSection />

              {/* Right Section: How It Works */}
              <div className='flex items-center py-[10px]'>
              <Link
              href="#how-it-works"
              id="how-it-works-button"
              className="flex justify-center w-[30vw] md:w-[20vw] lg:w-[10vw] items-center bg-[--secondary-color-1] text-white py-2 px-4 rounded-full border border-[#2E374C] cursor-pointer hover:bg-[#5AAAFA] font-medium whitespace-nowrap"
              >
                How It Works
                </Link>
                <div className="flex md:hidden lg:hidden">
                <CheckboxDropdown />
              </div>
              </div>
            </nav>
          </header>

            <main className="body">
              {/* Inject WarningModal inside layout */}
              <WarningModal />
              {children}
            </main>

            <footer className="footer">
              <h2 className="font-logo">IntelliAgents</h2>
              <p className="text-md text-light">Your student-led, AI-powered, semester agent</p>
              <div className="my-6 space-x-4 md:space-x-6 lg:space-x-8">
                <Link href={{ pathname: '/' }} className="font-roboto">
                  Home
                </Link>                
                <a href="about-us">About Us</a>
                <Link href="#faq">FAQ's</Link>
                <a href="contact-us">Contact Us</a>
                <Link href="fa" className="font-roboto">
                  How It Works
                </Link>  
              </div>
              <a href="#" className="scroll-top font-bold">Back to top</a>
              <hr />
              <br />
              <div className="flex flex-row justify-between items-center w-full">
                <p id="disclaimer" className="text-md roboto-font" style={{ fontStyle: 'italic' }}>
                  <span className="font-semibold">*Disclaimer:</span> IntelliAgents can make mistakes sometimes. Please double-check the information!
                </p>
                <p className="text-sm roboto-font ml-auto">© IntelliAgents 2025</p>
              </div>
            </footer>

          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
