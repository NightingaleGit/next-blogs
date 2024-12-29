import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "./components/themeSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="size-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-500 flex justify-center size-full`}
      >
        <div className="flex flex-col h-full w-[50%] overflow-hidden">
          <div className="w-full flex text-slate-900 p-1">
            <h1 className="text-6xl uppercase font-bold text-center sticky size-full select-none">
              {"Posts"}
            </h1>
            <ThemeSwitch />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
