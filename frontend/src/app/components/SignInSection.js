import React from 'react';
import { signIn } from "next-auth/react";
import { Icons } from './Icons';

const SignInSection = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-[35px] font-[700] mb-3 text-[#151515]" style={{ fontFamily: 'Inria Sans' }}></h2>
      <button onClick={() => signIn("google")} 
        className="flex items-center gap-4 px-6 py-4 border-[1px] border-[#000000] rounded-[15px] bg-[#FFFFFF] text-[#757575] hover:bg-gray-50">
        <Icons.google className="w-7 h-7" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInSection;
