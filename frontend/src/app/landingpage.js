'use client';
import React from 'react';
import Image from "next/image";

const LandingPage = () => {
  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
    console.log('Google Sign In clicked');
  };

  const handleSkip = () => {
    // Implement skip navigation
    console.log('Skip clicked');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl text-black font-semibold">Intelli</div>
          <div className="space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
            <h1 className="animate-character font-bold text-[#272776]">IntelliAgents</h1>

              <p className="text-xl text-gray-600 m-0">
                An agentic semester partner created by students, for students.
                </p>
                <a
                href="#how-it-works"
                className="text-[#37B5EC] hover:text-blue-600 inline-block underline m-0"
                >
                    Show me how it works
                    </a>

              <div className="max-w-md space-y-4 pt-4">
              <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg
              bg-white text-gray-700 text-[15px] font-medium tracking-wide 
              shadow-[0px_4px_0px_0px_#d1d5db] transition-all duration-300 ease-in-out 
              hover:bg-gray-100 hover:shadow-[0px_3px_0px_0px_#d1d5db] 
              active:bg-gray-200 active:shadow-[0px_0px_0px_0px_#d1d5db] active:translate-y-[2px]"
              >
                <img
                src="/images/google_logo.png"
                alt="Google Logo"
                className="w-6 h-6"
                />
                Sign in with Google to save your syllabi and upload to your calendar
                </button>




                <button
                onClick={handleSkip}
                className="w-full px-10 py-[17px] bg-[#6138B9] text-white text-[15px] tracking-[1.5px] rounded-[10px] border-0
                shadow-[0px_10px_0px_0px_#4F2D94] transition-all duration-300 ease-in-out 
                hover:bg-[#532EA3] hover:shadow-[0px_7px_0px_0px_#4F2D94] 
                active:bg-[#47268A] active:shadow-[0px_0px_0px_0px_#4F2D94] active:translate-y-[5px]"
                >
                    No thanks. Let me jump straight into the magic!
                    </button>



              </div>
            </div>

            {/* Right Content - Robot Image */}
            <div className="flex-1 flex justify-center">
            <div className="w-96 h-96 relative" style={{ transform: 'rotate(-9.34deg)' }}>
                {/* Robot PNG */}
                <Image src="/images/temp_mascot.png" alt="Robot" width={384} height={384} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-black">Thank you for visiting!</h2>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 underline font-semibold">Contact Us</a>
          <p className="text-sm text-gray-600 mt-2 font-[300]">©IntelliAgents 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;