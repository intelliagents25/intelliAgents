'use client';
import React, { useState } from 'react';
import FAQContainer from './FAQContainer';
import "../globals.css";
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

      <div className="min-h-screen flex flex-col bg-blue">
        <main className="flex-1">
          <FAQSwitcher onSwitch={handleTabSwitch} />
          <FAQContainer selectedTab={selectedTab} />
        </main>
      </div>
    </>
  );
};

export default FAQ;