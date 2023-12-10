import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Zomato-lite",
  description: "Tasty food at fingertips",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black`}>
          <Navbar />
          {/* <CartContextProvider> */}
          {children}
          {/* </CartContextProvider> */}
          <Footer />
        </body>
      </html>
    //  </ClerkProvider>
  );
}
