// // "use client"
// import "../globals.css";
// import { Inter } from "next/font/google";
// import { UserProvider } from "../Context/UserProvider";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: "Zomato-lite",
//   description: "Tasty food at fingertips",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-black`}>
//         <UserProvider>
//         <Navbar />
//         {children}
//         <Footer />
//         </UserProvider>
//       </body>
//     </html>
//   );
// }
