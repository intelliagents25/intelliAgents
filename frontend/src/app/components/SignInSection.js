import React from 'react';

const SignInSection = ({ handleGoogleSignIn }) => {
  return (
    <div className="px-16">
      <h2 className="text-[35px] font-[700] mb-3 text-[#151515]" style={{ fontFamily: 'Inria Sans' }}>Sign in with Google</h2>
      <button 
        onClick={handleGoogleSignIn} 
        className="flex items-center gap-4 px-6 py-4 w-full max-w-[328px] h-[112px] border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50"
      >
        <img src="/images/google_logo.png" alt="Google Logo" className="w-6 h-6" />
        <span className="text-[20px] font-[500] text-left text-[#0000008A]" style={{ fontFamily: 'Roboto' }}>
          Sign in with Google to save your syllabi and upload to your calendar
        </span>
      </button>
    </div>
  );
};

export default SignInSection;
