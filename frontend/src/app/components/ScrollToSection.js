// src/app/components/ScrollToSection.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ScrollToSection = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    // Add event listener for scrolling or button click
    const button = document.getElementById('how-it-works-button');
    if (button) {
      button.addEventListener('click', handleScroll);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return null;
};

export default ScrollToSection;
