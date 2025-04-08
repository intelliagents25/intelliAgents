import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async function addEmailInfo(req, res) {
  // get token and email from request. 
  const token = await getToken({ req, secret });
  if (!token) {
    return;
  }

  res.cookies.set({
    name: "userEmail",
    value: token.email,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    expires: new Date(token.exp * 1000)
  });
  return ;
}

export async function middleware(req) {
  const res = NextResponse.next();
  const cookies = req.headers.get("cookie") || "";

  await addEmailInfo(req, res);
  // Check if the user already has a session cookie
  if (!cookies.includes("userToken")) {
    let userToken = uuidv4();
    res.cookies.set({
      name: "userToken",
      value: userToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    res.headers.set("user-cookie", `${userToken}`);
  }

  return res;
}

// Apply middleware to all/api routes, except /api/auth/*
export const config = {
  matcher: ['/api/((?!auth).*)']
};