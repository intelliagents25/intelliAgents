import { NextResponse } from "next/server";
import { nanoid } from "nanoid"; // Generates a unique ID

export function middleware(req) {
  const res = NextResponse.next();
  const cookies = req.headers.get("cookie") || "";

  // Check if the user already has a session cookie
  if (!cookies.includes("userToken")) {
    const userToken = nanoid(); // Generate a unique token
    res.cookies.set({
      name: "userToken",
      value: userToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  return res;
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};