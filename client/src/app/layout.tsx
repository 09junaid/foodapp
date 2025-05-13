"use client"
import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider"
import { usePathname } from "next/navigation";

import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname();
    // List of routes where Navbar should be hidden
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <AuthProvider> */}
      <ReduxProvider>
        {!shouldHideNavbar && <Navbar/>}
        {children}
        {!shouldHideNavbar && <FooterSection/>}
        </ReduxProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
