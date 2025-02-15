'use client';
import React from 'react';
import Header from './components/Header';
import DescriptionBox from './components/DescriptionBox';
import SignInSection from './components/SignInSection';
import DropZone from './components/DropZone';
import Footer from './components/Footer';

const LandingPage = () => {
  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      <Header />
      <main className="flex-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 relative">
              <DescriptionBox />
              <SignInSection handleGoogleSignIn={handleGoogleSignIn} />
            </div>
            <DropZone />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;