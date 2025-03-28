import React from 'react';
import { signIn } from "next-auth/react";
import { Icons } from './Icons';

const SignInSection = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <button 
        onClick={() => signIn("google")} 
        className="flex items-center justify-center gap-4 px-6 py-4 border-[1px] w-full border-[#000000] rounded-[16px] bg-[#FFFFFF] text-[#757575] hover:bg-gray-50"
      >
        <Icons.google className="w-[20%] h-[20%]" />
        <span className='text-[4vw] md:text-[2vw] lg:text-[1vw]'>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignInSection;
