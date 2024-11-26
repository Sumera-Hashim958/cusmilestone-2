import "./globals.css";
import Navbar from "../app/components/Navbar"
import Hero from "../app/components/Hero"
import Projects from "../app/components/Projects";
import Skills from "../app/components/Skills";
import Footer from "../app/components/Footer";
import About from "../app/components/About";
import Contact from "../app/components/Contact";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
