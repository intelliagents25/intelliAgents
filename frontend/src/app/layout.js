import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/auth/[...nextauth]/Providers";
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/chat/Chat';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IntelliAgent",
  description: "MDIA470 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Chat />
            <Footer />
          </div>   
        </AuthProvider>
      </body>
    </html>
  );
}
