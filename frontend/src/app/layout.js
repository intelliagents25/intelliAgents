import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Suez_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/auth/[...nextauth]/Providers";
import React from 'react';
import Link from 'next/link'
import Chat from './components/chat/Chat';
import WarningModal from './components/WarningModal'; // Import the modal
import CheckboxDropdown from './components/CheckboxDropdown';

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
                  <Link href="/" className="text-[16px] font-[400] text-[#2C5281] hover:underline">FAQ's</Link>
                  <Link href="contact-us" className="text-[16px] font-[400] text-[#2C5281] hover:underline">Contact Us</Link>
                </div>
              </div>

              {/* Right Section: How It Works */}
              <div className='flex items-center'>
                <button className="mx-4 my-4 button">How It Works</button>
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
            <Chat />

            <footer className="footer">
              <h2 className="font-logo">IntelliAgents</h2>
              <p className="text-md text-light">Your student-led, AI-powered, semester agent</p>
              <div className="my-6 space-x-4 md:space-x-6 lg:space-x-8">
                <Link href={{ pathname: '/' }} className="font-roboto">
                  Home
                </Link>                
                <a href="about-us">About Us</a>
                <a href="faq">FAQ's</a>
                <a href="contact-us">Contact Us</a>
                <Link href={{ pathname: '/' }} className="font-roboto">
                  How It Works
                </Link>  
              </div>
              <a href="#" className="scroll-top font-bold">Back to top</a>
              <hr />
              <br />
              <p className="text-sm roboto-font">© IntelliAgents 2025</p>
            </footer>

          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
