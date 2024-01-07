import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

import { UserProvider } from "./Context/UserProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Zomato",
  description: "The Next Gen Bakery",

};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
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
