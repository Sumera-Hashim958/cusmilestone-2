'use client'
import "./globals.css";
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar/>
      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
