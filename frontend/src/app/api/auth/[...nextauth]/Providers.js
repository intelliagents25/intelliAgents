"use client";

// used to provide session for next-auth
// based on https://www.reddit.com/r/nextjs/comments/1bdqhnx/how_to_use_sessionprovider_from_nextauth_in_root/
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
   return <SessionProvider>{children}</SessionProvider>;
};