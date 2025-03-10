'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import FAQContainer from './FAQContainer';
import Footer from '../components/Footer';
import FAQSwitcher from './FAQSwitcher';

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState('General');

  const handleTabSwitch = (tab) => {
    setSelectedTab(tab);
  };

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
        <main className="flex-1">
          <FAQSwitcher onSwitch={handleTabSwitch} />
          <FAQContainer selectedTab={selectedTab} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;