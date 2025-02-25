import React from 'react';
import { getProviders, signIn } from "next-auth/react"
import { Icons } from './Icons';
const SignInSection = ({}) => {
  return (
    <div className="px-16">
    <h2 className="text-[35px] font-[700] mb-3 text-[#151515]" style={{ fontFamily: 'Inria Sans' }}>Sign in with Google</h2>
      <button onClick={() => signIn("google")} className="flex items-center gap-4 px-6 py-4 w-full max-w-[328px] h-[112px] border-2 border-[#151515] rounded-xl bg-white text-gray-700 hover:bg-gray-50">
      <Icons.google className="w-7 h-7"/>
      Sign in with Google</button>
    </div>
  );
};

export default SignInSection;
