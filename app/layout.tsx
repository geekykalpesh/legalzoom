"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "../components/ui/resizable-navbar";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import "./globals.css";

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
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Business", link: "/business" },
    { name: "Personal", link: "/personal" },
    { name: "Attorneys", link: "/attorneys" },
    { name: "Forms", link: "/forms" },
    { name: "Support", link: "/support" },
  ];

  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <BackgroundRippleEffect rows={12} cols={35} cellSize={40} />
          <Navbar className="fixed top-0 z-50">
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <NavbarButton>Sign In</NavbarButton>
            </NavBody>
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              </MobileNavHeader>
              <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {navItems.map((item, idx) => (
                  <a key={idx} href={item.link} className="text-neutral-600">
                    {item.name}
                  </a>
                ))}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
          <div className="relative z-10 pt-16 max-w-6xl mx-auto px-4">
            <div className="relative border-2 border-gray-300 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-2xl before:pointer-events-none">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
