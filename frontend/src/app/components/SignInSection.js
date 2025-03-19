import React from 'react';
import { signIn } from "next-auth/react";
import { Icons } from './Icons';

const SignInSection = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <button 
        onClick={() => signIn("google")} 
        className="flex items-center justify-center gap-4 px-6 py-4 border-[1px] w-full border-[#000000] rounded-[32px] bg-[#FFFFFF] text-[#757575] hover:bg-gray-50"
      >
        <Icons.google className="w-7 h-7" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignInSection;
