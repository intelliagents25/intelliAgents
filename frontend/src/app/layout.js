import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Suez_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/auth/[...nextauth]/Providers";
import React from 'react';
import Link from 'next/link'
import Chat from './components/chat/Chat';
import WarningModal from './components/WarningModal'; // Import the modal

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
            
            <header className="header">
              <Link href={{ pathname: '/' }} className="font-logo px-6">
                Intelli
              </Link>
              <div className="mx-6 space-x-8">
                <a href="about-us">About Us</a>
                <a href="faq">FAQ's</a>
                <a href="contact-us">Contact Us</a>
              </div>
              <button className="mx-4 button">How It Works</button>
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
              <div className="my-6 space-x-8">
                <a href="#" className="scroll-top font-bold">Back to top</a>
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
