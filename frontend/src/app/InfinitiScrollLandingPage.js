import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const InfinitiScrollLandingPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-[50px] mb-4 text-[#151515] mb-8 font-[800]" style={{ fontFamily: 'Inter' }}>
                The AI agent that organises your semester... and keeps it organised.
              </h1>
              <div className="space-y-4">
                <div className="flex space-x-4 mb-8">
                  <button className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50 w-[200px] h-[40px]">
                    <img src="/images/google_logo.png" alt="Google Logo" className="w-6 h-6" />
                    <span className="text-[14px] font-[500] text-[#757575]" style={{ fontFamily: 'Roboto Mono' }}>Sign in with Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50 w-[200px] h-[40px]">
                    <span className="text-[14px] font-[500]" style={{ fontFamily: 'Roboto Mono' }}>Continue without signing in</span>
                  </button>
                </div>
                <a href="#" className="text-[#37B5EC] underline text-[20px] text-weight font-[500]" style={{ fontFamily: 'Roboto Mono' }}>
                  Show me how it works
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/images/temp_mascot.png" alt="Robot mascot" className="w-[203.01px] rotate-[-9.34deg]" />
            </div>
          </div>

          {/* Features Section */}
          <section className="py-16 space-y-24">
            {/* Demo Section */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-gray-600">
                animated demo here
                • robot moving across screen and uploading syllabus
                • syllabus finishing upload and google cal integration
              </p>
            </div>

            {/* Feature 1 */}
            <div className="space-y-4">
              <h2 className="text-[50px] font-[800] text-[#151515]" style={{ fontFamily: 'Inter' }}>
                Your syllabus, streamlined.
              </h2>
              <p className="text-[#00000080] text-[20px]" style={{ fontFamily: 'Roboto Mono' }}>
                Choose to login through your Google account or continue without an account.
                Input your course syllabus as a PDF file.
              </p>
              <div className="bg-gray-100 h-48 rounded-lg"></div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <h2 className="text-[50px] font-[800] text-[#151515] text-right" style={{ fontFamily: 'Inter' }}>
                We'll update your calendar as you go.
              </h2>
              <p className="text-[#00000080] font-[500] text-[20px] text-right" style={{ fontFamily: 'Roboto Mono' }}>
                Our AI agent senses changes in your syllabus and updates your Calendar on its own.
              </p>
              <div className="bg-gray-100 h-48 rounded-lg"></div>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <h2 className="text-[50px] font-[800] text-[#151515]" style={{ fontFamily: 'Inter' }}>
                Translate anything.
              </h2>
              <p className="text-[#00000080] text-[20px] font-[500]" style={{ fontFamily: 'Roboto Mono' }}>
                Tap on Inti, our robot friend, anytime you need help understanding an assignment
                detail in your syllabus.
              </p>
              <div className="bg-gray-100 h-48 rounded-lg"></div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center space-y-6">
            <h2 className="text-[50px] font-[800] text-[#151515]" style={{ fontFamily: 'Inter' }}>
              Ready to give it a go?
            </h2>
            <p className="text-[#00000080] text-[20px] font-[500]" style={{ fontFamily: 'Roboto Mono' }}>
              Start by signing into your Google account or by directly uploading your syllabus.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
                  <button className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50 w-[200px] h-[40px]">
                    <img src="/images/google_logo.png" alt="Google Logo" className="w-6 h-6" />
                    <span className="text-[14px] font-[500] text-[#757575]" style={{ fontFamily: 'Roboto Mono' }}>Sign in with Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50 w-[200px] h-[40px]">
                    <span className="text-[14px] font-[500]" style={{ fontFamily: 'Roboto Mono' }}>Continue without signing in</span>
                  </button>
                </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default InfinitiScrollLandingPage;
