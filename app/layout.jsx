// "use client"
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
// import { useState, useEffect } from "react";
import { UserProvider } from "./Context/UserProvider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <UserProvider>
          <body className={`${inter.className} bg-black`}>
            <Navbar  />
            {children}
            <Footer/>
          </body>
            </UserProvider>
            {/* </Suspense> */}
        </html>
  );
}
