import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftBar from "@/components/leftBar";
import RightBar from "@/components/rightBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KenneDev X Clone",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal:React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className=" flex justify-center relative mx-auto w-screen min-h-screen container  max-w-screen-xl    ">
        <LeftBar />
          
          {children}
          {modal}

          <RightBar />
        </main>
      </body>
    </html>
  );
}
