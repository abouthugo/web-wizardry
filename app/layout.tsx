"use client";
import "./output.css";
import { Inter } from "@next/font/google";
import { NavBar } from "../components/NavBar";
import Div100vh from "react-div-100vh";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden">
      <head />
      <body>
        <Div100vh
          className={`flex-col bg-black ${inter.className} overflow-y-scroll overflow-x-hidden`}
        >
          <header className="mb-10">
            <NavBar />
          </header>
          {children}
        </Div100vh>
      </body>
    </html>
  );
}
